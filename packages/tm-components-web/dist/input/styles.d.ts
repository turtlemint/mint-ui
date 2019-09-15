import { InputProps } from './index';
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, Pick<InputProps, "block">, never>;
export declare const StyledInput: import("styled-components").StyledComponent<"input", any, Pick<InputProps, "disabled" | "error"> & Pick<InputProps, "disabled" | "error" | "label" | "block" | "type" | "onBlur" | "placeholder" | "value" | "helpText">, never>;
declare type LabelProps = Pick<InputProps, 'error'> & {
    children: React.ReactNode;
};
export declare const StyledLabel: import("styled-components").StyledComponent<"div", any, LabelProps, never>;
export declare const StyledError: import("styled-components").StyledComponent<"div", any, {
    children: import("react").ReactNode;
}, never>;
export declare const HelpText: import("styled-components").StyledComponent<"p", any, {
    children: import("react").ReactNode;
}, never>;
export {};
