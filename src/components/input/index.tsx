import React from 'react';
import TextArea from './textarea';
import { StyledInput, StyledLabel, StyledError, HelpText, Wrapper } from './styles';

export interface InputProps {
    type?: string;
    placeholder?: string;
    label?: string;
    error?: string;
    helpText?: string;
    block?: boolean;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler
    onBlur?: React.FocusEventHandler
}

const Input = ({ type = 'text', placeholder, label, error, helpText, block, disabled, onChange, onBlur }: InputProps) => {
    const handleChange: React.ChangeEventHandler = e => {
        if (onChange) {
            onChange(e);
        }
    }
    return (
        <Wrapper block={block}>
            <StyledLabel error={error}>
                <label>{label}</label>
            </StyledLabel>
            <StyledInput type={type} placeholder={placeholder} error={error} disabled={disabled} onBlur={onBlur} onChange={handleChange} />
            {error ? (
                <StyledError>
                    <label>{error}</label>
                </StyledError>
            ) : null}
            {helpText ? (
                <HelpText>{helpText}</HelpText>
            ) : null}
        </Wrapper>
    )
}
Input.TextArea = TextArea;

export default Input;