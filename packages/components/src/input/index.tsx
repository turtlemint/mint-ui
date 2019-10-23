import * as React from "react";
import styled, { css } from "styled-components";
import { Colors } from "@turtlemint/core";
import { Omit, CommonTypeTuple } from "../__utils/type";
import { SIZE } from "../__utils/size";

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

export const WrapperStyles = css<Pick<InputProps, "block">>`
	width: ${props => (props.block ? "100%" : "328px")};
	text-align: left;
	box-sizing: border-box;
`;

export const InputStyles = css<
	Pick<InputProps, "error" | "disabled"> & Omit<InputProps, "onChange">
>`
	box-sizing: border-box;
	border: 0;
	border: 1px solid ${Colors.GREY3};
	outline: none;
	padding: 12px 48px 12px 16px;
	border-radius: 4px;
	color: ${Colors.GREY1};
	font-size: ${SIZE.INPUT_FONT_SIZE};
	width: 100%;
	&:focus {
		border: 1px solid ${Colors.PRIMARY};
	}
	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: ${Colors.DISABLED};
	}
	::-moz-placeholder {
		/* Firefox 19+ */
		color: ${Colors.DISABLED};
	}
	:-ms-input-placeholder {
		/* IE 10+ */
		color: ${Colors.DISABLED};
	}
	:-moz-placeholder {
		/* Firefox 18- */
		color: ${Colors.DISABLED};
	}
	::placeholder: {
		color: ${Colors.DISABLED};
	}
	${props =>
		props.error &&
		css`
			border: 1px solid ${Colors.DANGER};
			&:focus {
				border: 1px solid ${Colors.DANGER};
			}
		`};
	${props =>
		props.disabled &&
		css`
			opacity: 0.64;
			cursor: no-drop;
			background-color: ${Colors.DISABLED};
			color: ${Colors.GREY3};
			::-webkit-input-placeholder {
				/* Chrome/Opera/Safari */
				color: ${Colors.GREY3};
			}
			::-moz-placeholder {
				/* Firefox 19+ */
				color: ${Colors.GREY3};
			}
			:-ms-input-placeholder {
				/* IE 10+ */
				color: ${Colors.GREY3};
			}
			:-moz-placeholder {
				/* Firefox 18- */
				color: ${Colors.GREY3};
			}
			::placeholder: {
				color: ${Colors.GREY3};
			}
		`};
`;

const SharedStyles = css`
	color: ${Colors.GREY1};
	font-size: ${SIZE.BASE_FONT_SIZE};
	line-height: 1.43;
`;

export const LabelStyles = css<Pick<InputProps, "error">>`
	margin-bottom: 4px;
	label {
		${SharedStyles};
		${props =>
			props.error &&
			css`
				color: ${Colors.DANGER};
			`};
	}
`;

export const Error = css`
	${SharedStyles};
	margin-top: 4px;
	word-wrap: break-word;
	label {
		color: ${Colors.DANGER};
	}
`;

export const HelpText = css`
	${SharedStyles};
	color: ${Colors.GREY2};
`;

const StyledWrapper = styled.div`
	${WrapperStyles};
`;
type LabelProps = Pick<InputProps, "error"> & {
	children: React.ReactNode;
};

const StyledLabel = styled.div<LabelProps>`
	${LabelStyles};
`;
export const StyledInput = styled.input<
	Pick<InputProps, "error" | "disabled"> & Omit<InputProps, "onChange">
>`
	${InputStyles};
`;
const StyledError = styled.div<{ children: React.ReactNode }>`
	${Error};
`;
const StyledHelpText = styled.p<{ children: React.ReactNode }>`
	${HelpText};
`;

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
}: InputProps & React.InputHTMLAttributes<HTMLInputElement>) => {
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
