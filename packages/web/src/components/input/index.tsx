import * as React from "react";
import styled from "styled-components";
import * as Styles from "../../../../shared/src/components/input";
import { Omit } from "../../../../shared/src/utils/type";

const StyledWrapper = styled.div`
	${Styles.Wrapper};
`;
type LabelProps = Pick<Styles.InputProps, "error"> & {
	children: React.ReactNode;
};

const StyledLabel = styled.div<LabelProps>`
	${Styles.Label};
`;
const StyledInput = styled.input<
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
export const Input: React.FC<
	Styles.InputProps &
		Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">
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
	className,
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
// remove this later

export default Input;
