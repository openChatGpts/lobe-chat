export default {
  ModelSwitch: {
    featureTag: {
      functionCall: '该模型支持函数调用（Function Call）',
      vision: '该模型支持视觉识别',
    },
    provider: {
      bedrock: 'AWS Bedrock',
      oneapi: 'One API',
      openai: 'OpenAI',
      zhipu: '智谱AI',
    },
    title: '模型',
  },
  agentDefaultMessage:
    '你好，我是 **{{name}}**，你可以立即与我开始对话，也可以前往 [助手设置](/chat/settings#session={{id}}) 完善我的信息。',
  agentDefaultMessageWithSystemRole: '你好，我是 **{{name}}**，{{systemRole}}，让我们开始对话吧！',
  backToBottom: '跳转至当前',
  clearCurrentMessages: '清空当前会话消息',
  confirmClearCurrentMessages: '即将清空当前会话消息，清空后将无法找回，请确认你的操作',
  confirmRemoveSessionItemAlert: '即将删除该助手，删除后该将无法找回，请确认你的操作',
  defaultAgent: '自定义助手',
  defaultList: '默认列表',
  defaultSession: '自定义助手',
  duplicateTitle: '{{title}} 副本',
  historyRange: '历史范围',
  inbox: {
    defaultMessage:
      '你好，我是你的智能助手，你可以问我任何问题，我会尽力回答你。如果需要获得更加专业或定制的助手，可以点击`+`创建自定义助手',
    desc: '开启大脑集群，激发思维火花。你的智能助理，在这里与你交流一切',
    title: '随便聊聊',
  },
  input: {
    onlyAdd: '仅添加消息',
    send: '发送',
    sendWithCmdEnter: '按 {{meta}} + Enter 键发送',
    sendWithEnter: '按 Enter 键发送',
    stop: '停止',
    warp: '换行',
  },
  messageAction: {
    delAndRegenerate: '删除并重新生成',
    regenerate: '重新生成',
  },
  newAgent: '新建助手',
  noDescription: '暂无描述',
  pin: '置顶',
  pinOff: '取消置顶',
  regenerate: '重新生成',
  roleAndArchive: '角色与记录',
  searchAgentPlaceholder: '搜索助手和对话...',
  sendPlaceholder: '输入聊天内容...',
  sessionGroup: {
    config: '分组管理',
    confirmRemoveGroupAlert: '即将删除该分组，删除后该分组的助手将移动到默认列表，请确认你的操作',
    createGroup: '添加新分组',
    createSuccess: '创建成功',
    inputPlaceholder: '请输入分组名称...',
    moveGroup: '移动到分组',
    newGroup: '新分组',
    rename: '重命名分组',
    renameSuccess: '重命名成功',
    tooLong: '分组名称长度需在 1-20 之内',
  },
  shareModal: {
    download: '下载截图',
    imageType: '图片格式',
    screenshot: '截图',
    settings: '导出设置',
    shareToShareGPT: '生成 ShareGPT 分享链接',
    withBackground: '包含背景图片',
    withFooter: '包含页脚',
    withPluginInfo: '包含插件信息',
    withSystemRole: '包含助手角色设定',
  },
  stt: {
    action: '语音输入',
    loading: '识别中...',
    prettifying: '润色中...',
  },
  temp: '临时',
  tokenDetails: {
    chats: '会话消息',
    rest: '剩余可用',
    systemRole: '角色设定',
    tools: '插件设定',
    total: '总共可用',
    used: '总计使用',
  },
  tokenTag: {
    overload: '超过限制',
    remained: '剩余',
    used: '使用',
  },
  topic: {
    actions: {
      autoRename: '智能重命名',
      duplicate: '创建副本',
      export: '导出话题',
    },
    confirmRemoveAll: '即将删除全部话题，删除后将不可恢复，请谨慎操作。',
    confirmRemoveTopic: '即将删除该话题，删除后将不可恢复，请谨慎操作。',
    confirmRemoveUnstarred: '即将删除未收藏话题，删除后将不可恢复，请谨慎操作。',
    defaultTitle: '默认话题',
    guide: {
      desc: '点击发送左侧按钮可将当前会话保存为历史话题，并开启新一轮会话',
      title: '话题列表',
    },
    openNewTopic: '开启新话题',
    removeAll: '删除全部话题',
    removeUnstarred: '删除未收藏话题',
    saveCurrentMessages: '将当前会话保存为话题',
    searchPlaceholder: '搜索话题...',
    title: '话题',
  },
  translate: {
    action: '翻译',
    clear: '删除翻译',
  },
  tts: {
    action: '语音朗读',
    clear: '删除语音',
  },
  updateAgent: '更新助理信息',
  upload: {
    actionTooltip: '上传图片',
    disabled: '当前模型不支持视觉识别，请切换模型后使用',
    dragDesc: '拖拽文件到这里，支持上传多个图片。按住 Shift 直接发送图片',
    dragTitle: '上传图片',
  },
};
