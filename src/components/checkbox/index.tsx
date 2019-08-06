import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { PALETTE } from '../utils/colors';
import { CheckboxIcon } from './checkbox';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    onChange?: (val: boolean) => void;
    children?: React.ReactNode,
    className?: string;
    style?: React.CSSProperties;
    color?: string;
    outlineColor?: string;
    size?: number
}

const Checkbox: React.FC<CheckboxProps> = ({
    checked = false,
    disabled = false,
    onChange = (val: boolean): void => { },
    className = '',
    children,
    style,
    indeterminate = false,
    color = PALETTE.PRIMARY,
    outlineColor = PALETTE.BLACK,
    size = 24
}: CheckboxProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    }
    const inputEl = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (inputEl.current) {
            inputEl.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);
    return (
        <label>
            <CheckboxContainer className={className} style={style}>
                <HiddenCheckbox checked={checked} onChange={handleChange} disabled={disabled} ref={inputEl} />
                <CheckboxIcon
                    size={size}
                    color={color}
                    outlineColor={outlineColor}
                    checked={checked}
                    indeterminate={indeterminate}
                />
            </CheckboxContainer>
            {
                children !== undefined && <span style={{ marginLeft: 8 }}>{children}</span>
            }
        </label>
    )
}

export default Checkbox;