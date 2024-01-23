import { ComponentPropsWithoutRef, forwardRef } from 'react';

type IconProps = ComponentPropsWithoutRef<'svg'> & {
  /**
   * Hex color or color name or "default" to use the default hex for each icon
   */
  color?: string;
  /**
   * The size of the Icon.
   */
  size?: string | number;
  /**
   * The title provides an accessible short text description to the SVG
   */
  title?: string;
};

export const Tongyi = forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, color = 'currentColor', ...res }, ref) => {
    return (
      <svg
        fill={color}
        height={size}
        ref={ref}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        {...res}
      >
        <path d="m20.99335 9.5017 2.05049 3.58034c.27624.48378.55724.97638.84299 1.47779.1876.3292.1211.53945-.0475.84102a144.66062 144.66062 0 0 1-1.45564 2.55188c-.17335.29676-.38469.4097-.74326.4037a47.00954 47.00954 0 0 0-2.53728.01802c-.03686.00145-.07043.02184-.08905.05406a627.38118 627.38118 0 0 1-2.95047 5.17106c-.18404.31959-.41438.39648-.79075.39768a643.18508 643.18508 0 0 1-3.29123.0012c-.20875-.00011-.40181-.11267-.50699-.29555l-1.45683-2.53387c-.02058-.03524-.05066-.05286-.09023-.05286l-5.58393-.0012c-.31029.03283-.60276-.0004-.87743-.09973l-1.7489-3.02166c-.10562-.18188-.10653-.40716-.00238-.58991l1.31673-2.3116c.0382-.0669.0382-.14902 0-.21506-.9277-1.60594-1.83084-3.18586-2.70945-4.73974-.33601-.59472-.47374-.7389-.0938-1.4045a934.60462 934.60462 0 0 0 1.51264-2.65762c.14366-.2547.33126-.36404.63758-.36524.95144-.004 1.89258-.0044 2.82343-.0012.04848.00012.09331-.026.11755-.06848L8.38053.29976c.0955-.1659.27094-.26793.46068-.26792.85605-.0024 1.72635.0036 2.59665-.02523.41437-.01322.98665-.04566 1.22055.36404a532.67505 532.67505 0 0 1 1.28111 2.26354c.03526.0618.10046.09982.17098.09972h6.05767c.18917 0 .35104.11894.4856.35683a877.7949 877.7949 0 0 1 1.58626 2.803c.20778.36764.2624.52142.02612.9131a62.15338 62.15338 0 0 0-1.22887 2.13619c-.11636.21385-.2434.30637-.04393.55867Zm-3.41946 4.11258.85368-1.50782a.06042.06042 0 0 1 .05224-.0303.06042.06042 0 0 1 .05224.0303l1.5542 2.76094c.0235.04159.0679.06726.11635.06728l3.01458-.02163a.04384.04384 0 0 0 .03759-.0221.04491.04491 0 0 0 .0004-.04398L20.091 9.29866c-.02295-.04085-.02295-.0817 0-.12255l.31939-.55387 1.22293-2.15661c.02533-.04486.01227-.06729-.03918-.06729H8.94569c-.06412 0-.07995-.02803-.0475-.0841l1.56488-2.7333c.02375-.04086.02375-.0821 0-.12376L8.973.84402A.06635.06635 0 0 0 8.9154.81037a.06635.06635 0 0 0-.05758.03365l-3.1262 5.46902c-.03095.05282-.0869.08523-.14722.0853H2.4582c-.06094 0-.07598.02684-.04511.0805l6.33906 11.07982c.02612.04485.01345.06768-.038.06848l-3.04902.01562c-.09656.0008-.16899.04325-.21727.12735l-1.44021 2.51945c-.04829.0857-.02375.12856.07361.12856l6.23576.00961c.04987 0 .08747.02203.1128.06608l1.53045 2.67684c.05065.08891.10131.08931.15197.0012l5.46164-9.55757Z" />
        <path d="m14.906 11.22339-2.85074 5.00165a.06082.06082 0 0 1-.05343.03162c-.0223 0-.04312-.01206-.05462-.03162L8.1787 9.64468c-.02138-.03685-.01109-.05647.03087-.05888l.23508-.01321 7.33284-.01322c.04987 0 .06214.02163.03681.06488l-.9083 1.59914Z" />
      </svg>
    );
  },
);

export default Tongyi;
