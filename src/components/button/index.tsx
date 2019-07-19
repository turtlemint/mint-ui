import React from 'react';
import { Omit, tuple } from '../_utils/type';
import { StyledButton, StyledLink } from './styles';
import Icon from '../icon';

const ButtonTypes = tuple('outlined', 'primary', 'danger', 'link');
export type ButtonType = (typeof ButtonTypes)[number];
const ButtonSizes = tuple('sm', 'md');
export type ButtonSize = (typeof ButtonSizes)[number];
const ButtonHTMLTypes = tuple('submit', 'button', 'reset');
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

export interface IBaseButtonProps {
    btnType?: ButtonType;
    disabled?: boolean;
    size?: ButtonSize;
    block?: boolean;
    loading?: boolean | { delay?: number };
    icon?: string;
    className?: string;
    prefixCls?: string;
    children: React.ReactNode;
};

export type AnchorButtonProps = {
    href: string,
    target?: string,
    onClick?: React.MouseEventHandler<HTMLElement>
} & IBaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type NativeButtonProps = {
    onClick: React.MouseEventHandler<HTMLElement>,
    htmlType?: ButtonHTMLType
} & IBaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button: React.FC = ({
    btnType = 'primary',
    size = 'md',
    disabled = false,
    block = false,
    icon = '',
    loading = false,
    className = '',
    prefixCls = 'tm-button',
    onClick = function () { },
    href = '#',
    target = 'blank',
    htmlType = 'button',
    children = <></>,
    ...rest
}: ButtonProps) => {

    const handleClick: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = e => {
        if (btnType === 'link') {
            e.preventDefault();
        }
        onClick(e);
    }
    return (
        <>
            {
                loading ? (
                    <StyledButton
                        btnType={btnType}
                        size={size}
                        block={block}
                        disabled={disabled}>
                        Loading...
                    </StyledButton>
                ) : (
                        <>
                            {
                                btnType === 'link' ? (
                                    <StyledLink
                                        href={href}
                                        target={target}
                                        disabled={disabled}
                                        {...rest}>
                                        {children}
                                    </StyledLink>
                                ) : (
                                        <StyledButton
                                            onClick={handleClick}
                                            btnType={btnType}
                                            size={size}
                                            block={block}
                                            disabled={disabled}
                                            type={htmlType}
                                            className={`${prefixCls}-${className}`}
                                            {...rest}
                                        >
                                            {icon ? <Icon className='mr5' icon={icon} /> : null}
                                            <span style={{
                                                'verticalAlign': 'middle'
                                            }}>
                                                {children}
                                            </span>
                                        </StyledButton>
                                    )
                            }
                        </>

                    )
            }
        </>

    );
};

export default Button;