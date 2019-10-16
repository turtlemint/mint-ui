import * as React from "react";
import styled from "styled-components";
import * as Styles from "./input.styles";
import { Omit, CommonTypeTuple } from "../__utils/type";

const StyledWrapper = styled.div`
	${Styles.Wrapper};
`;
type LabelProps = Pick<Styles.InputProps, "error"> & {
	children: React.ReactNode;
};

const StyledLabel = styled.div<LabelProps>`
	${Styles.Label};
`;
export const StyledInput = styled.input<
	Pick<Styles.InputProps, "error" | "disabled"> &
		Omit<Styles.InputProps, "onChange">
>`
	${Styles.Input};
`;
const StyledError = styled.div<{ children: React.ReactNode }>`
	${Styles.Error};
`;
const StyledHelpText = styled.p<{ children: React.ReactNode }>`
	${Styles.HelpText};
`;

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
export const Input: React.FC<
	InputProps & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">
> = ({
	type = "text",
	placeholder,
	label,
	error,
	helpText,
	block = false,
	disabled = false,
	onChange,
	onBlur,
	value,
	className = "",
	...rest
}: Styles.InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e.target.value);
		}
	};
	return (
		<StyledWrapper block={block}>
			<StyledLabel error={error}>
				<label>{label}</label>
			</StyledLabel>
			<StyledInput
				type={type}
				placeholder={placeholder}
				error={error}
				disabled={disabled}
				onBlur={onBlur}
				onChange={handleChange}
				value={value}
				className={className}
				aria-label="tm-input"
				{...rest}
			/>
			{error ? (
				<StyledError>
					<label>{error}</label>
				</StyledError>
			) : null}
			{helpText ? <StyledHelpText>{helpText}</StyledHelpText> : null}
		</StyledWrapper>
	);
};

export default Input;
