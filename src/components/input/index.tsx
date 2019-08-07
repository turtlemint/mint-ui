import React from 'react';
// import TextArea from './textarea';
import { StyledInput, StyledLabel, StyledError, HelpText, Wrapper } from './styles';

export interface InputProps {
    type?: string;
    placeholder?: string;
    label?: string;
    error?: string;
    helpText?: string;
    block?: boolean;
    disabled?: boolean;
    onChange?: (val: string) => void
    onBlur?: React.FocusEventHandler;
}

const Input: React.FC<InputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
    type = 'text',
    placeholder,
    label,
    error,
    helpText,
    block = false,
    disabled = false,
    onChange,
    onBlur,
    ...rest }: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    }
    return (
        <Wrapper block={block}>
            <StyledLabel error={error}>
                <label>{label}</label>
            </StyledLabel>
            <StyledInput type={type} placeholder={placeholder} error={error} disabled={disabled} onBlur={onBlur} onChange={handleChange} {...rest} />
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
// Input.TextArea = TextArea;

export default Input;