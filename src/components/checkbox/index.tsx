import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { PALETTE } from '../_utils/colors';
import { ICONS } from '../_utils/icons';
import Icon from "components/icon";

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


const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: transparent;
  border: 2px solid ${PALETTE.BLACK};
  opacity: 0.64;
  border-radius: 3px;
  transition: all 150ms;
  ${props => props.checked && css`
    background: ${PALETTE.PRIMARY};
    opacity: 1;
    border: 2px solid transparent;
  `};
//   ${HiddenCheckbox}:focus + & {
//     box-shadow: 0 0 0 3px ${PALETTE.PRIMARY_LIGHT};
//   };
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;


interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    onChange?: (val: boolean) => void;
    children?: React.ReactNode,
    className?: string;
    style?: React.CSSProperties;
}

const Checkbox = ({
    checked = false,
    disabled = false,
    onChange = () => { },
    className = '',
    children,
    style
}: Omit<CheckboxProps, 'indeterminate' | 'defaultChecked'>) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        onChange(e.target.checked);
    }
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <label>
            <CheckboxContainer className={className} style={style}>
                <HiddenCheckbox checked={isChecked} onChange={handleChange} disabled={disabled} />
                <StyledCheckbox checked={isChecked}>
                    {isChecked ? <Icon
                        size={24}
                        icon={ICONS.CHECKMARK}
                    /> : null}
                </StyledCheckbox>
            </CheckboxContainer>
            <span style={{ marginLeft: 8 }}>{children}</span>
        </label>
    )
}

export default Checkbox;