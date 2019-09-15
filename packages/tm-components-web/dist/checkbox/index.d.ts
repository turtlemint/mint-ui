import React from 'react';
interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    onChange?: (val: boolean) => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    color?: string;
    outlineColor?: string;
    size?: number;
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
