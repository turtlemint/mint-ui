declare const ColValues: [12, 9, 8, 6, 4, 3];
export declare type ColValueType = (typeof ColValues)[number];
interface ColProps {
    xs: ColValueType;
    sm: ColValueType;
    md: ColValueType;
    lg: ColValueType;
    xsOffset: ColValueType;
    smOffset: ColValueType;
    mdOffset: ColValueType;
    lgOffset: ColValueType;
    align: string;
    xsHidden: boolean;
    smHidden: boolean;
    mdHidden: boolean;
    lgHidden: boolean;
}
declare const Col: import("styled-components").StyledComponent<"div", any, Partial<ColProps>, never>;
export default Col;
