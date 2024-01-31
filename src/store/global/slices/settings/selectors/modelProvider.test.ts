import { describe, expect, it } from 'vitest';

import { agentSelectors } from '@/store/session/slices/agent';

import { GlobalStore, useGlobalStore } from '../../../store';
import { modelProviderSelectors } from './modelProvider';

describe('modelProviderSelectors', () => {
  describe('CUSTOM_MODELS', () => {
    it('custom deletion, addition, and renaming of models', () => {
      const s = {
        serverConfig: {
          customModelName:
            '-all,+llama,+claude-2，-gpt-3.5-turbo,gpt-4-1106-preview=gpt-4-turbo,gpt-4-1106-preview=gpt-4-32k',
        },
        settings: {
          languageModel: {
            openAI: {},
          },
        },
      } as unknown as GlobalStore;

      const result = modelProviderSelectors.modelList(s);

      expect(result).toMatchSnapshot();
    });

    it('duplicate naming model', () => {
      const s = {
        serverConfig: {},
        settings: {
          languageModel: {
            openAI: {
              customModelName: 'gpt-4-1106-preview=gpt-4-turbo，gpt-4-1106-preview=gpt-4-32k',
            },
          },
        },
      } as unknown as GlobalStore;

      const result = modelProviderSelectors.modelList(s);

      expect(result).toMatchSnapshot();
    });

    it('should delete model', () => {
      const s = {
        serverConfig: {
          customModelName: '-gpt-4',
        },
        settings: {
          languageModel: {
            openAI: {},
          },
        },
      } as unknown as GlobalStore;

      const result = modelProviderSelectors.modelList(s);

      expect(result).toEqual([
        {
          displayName: 'gpt-3.5-turbo',
          name: 'gpt-3.5-turbo',
        },
        {
          displayName: 'gpt-3.5-turbo-1106',
          name: 'gpt-3.5-turbo-1106',
        },
        {
          displayName: 'gpt-3.5-turbo-16k',
          name: 'gpt-3.5-turbo-16k',
        },
        {
          displayName: 'gpt-4-32k',
          name: 'gpt-4-32k',
        },
        {
          displayName: 'gpt-4-1106-preview',
          name: 'gpt-4-1106-preview',
        },
        {
          displayName: 'gpt-4-vision-preview',
          name: 'gpt-4-vision-preview',
        },
      ]);
    });

    it('only add the model', () => {
      const s = {
        serverConfig: {},
        settings: {
          languageModel: {
            openAI: {
              customModelName: 'model1,model2,model3，model4',
            },
          },
        },
      } as unknown as GlobalStore;

      const result = modelProviderSelectors.modelList(s);

      expect(result).toMatchSnapshot();
    });
  });

  describe('modelEnabledVision', () => {
    it('should return true if the model has vision ability', () => {
      const hasAbility = modelProviderSelectors.modelEnabledVision('gpt-4-vision-preview')(
        useGlobalStore.getState(),
      );
      expect(hasAbility).toBeTruthy();
    });

    it('should return false if the model does not have vision ability', () => {
      const hasAbility = modelProviderSelectors.modelEnabledVision('some-other-model')(
        useGlobalStore.getState(),
      );

      expect(hasAbility).toBeFalsy();
    });

    it('should return false if the model include vision in id', () => {
      const hasAbility = modelProviderSelectors.modelEnabledVision('some-other-model-vision')(
        useGlobalStore.getState(),
      );

      expect(hasAbility).toBeTruthy();
    });
  });

  describe('modelEnabledVision', () => {
    it('should return true if the model is in the list of models that show tokens', () => {
      const show = modelProviderSelectors.modelHasMaxToken('gpt-3.5-turbo')(
        useGlobalStore.getState(),
      );
      expect(show).toBeTruthy();
    });

    it('should return false if the model is not in the list of models that show tokens', () => {
      const show = modelProviderSelectors.modelHasMaxToken('some-other-model')(
        useGlobalStore.getState(),
      );
      expect(show).toBe(false);
    });
  });
});
