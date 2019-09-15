import React from 'react';
import { Omit, CommonTypeTuple } from '../__utils/type';
export interface InputProps {
    type?: string;
    value: CommonTypeTuple;
    placeholder?: string;
    label?: string;
    error?: string;
    helpText?: string;
    block?: boolean;
    disabled?: boolean;
    onChange?: (val: string) => void;
    onBlur?: React.FocusEventHandler;
}
declare const Input: React.FC<InputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>>;
export default Input;
