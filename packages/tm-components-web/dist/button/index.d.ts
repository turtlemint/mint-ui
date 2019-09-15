import React from 'react';
import { Omit } from '../__utils/type';
declare const ButtonTypes: ["outlined", "primary", "danger", "link"];
export declare type ButtonType = (typeof ButtonTypes)[number];
declare const ButtonSizes: ["sm", "md"];
export declare type ButtonSize = (typeof ButtonSizes)[number];
declare const ButtonHTMLTypes: ["submit", "button", "reset"];
export declare type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];
export interface IBaseButtonProps {
    btnType?: ButtonType;
    disabled?: boolean;
    size?: ButtonSize;
    block?: boolean;
    loading?: boolean | {
        delay?: number;
    };
    icon?: string;
    className?: string;
    prefixCls?: string;
    children: React.ReactNode;
}
export declare type AnchorButtonProps = {
    href: string;
    target?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
} & IBaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;
export declare type NativeButtonProps = {
    onClick: React.MouseEventHandler<HTMLElement>;
    htmlType?: ButtonHTMLType;
} & IBaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;
export declare type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
