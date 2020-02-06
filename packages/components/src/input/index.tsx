import * as React from "react";
import styled, { css } from "styled-components";
import { CommonTypeTuple, ChangeHandler, BlurHandler } from "../__utils/type";
import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

export interface InputProps {
	type?: string;
	name?: string;
	value?: CommonTypeTuple;
	placeholder?: string;
	label?: string;
	error?: string;
	helpText?: string;
	block?: boolean;
	disabled?: boolean;
	onChange?: ChangeHandler<string>;
	onBlur?: BlurHandler<string>;
}

type ReactInput = React.InputHTMLAttributes<HTMLInputElement>;
type InputArgs = InputProps & Omit<ReactInput, "onChange" | "onBlur">;

export const Input = ({
	type = "text",
	name = "",
	placeholder,
	error,
	block = false,
	disabled = false,
	onChange = () => {},
	onBlur = () => {},
	value,
	className = "",
	...rest
}: InputArgs) => {
	const handleChange = (e: any) => {
		onChange(e.target.value, e.target.name);
	};
	const handleBlur = (e: any) => {
		onBlur(e.target.value);
	};
	return (
		<StyledWrapper block={block}>
			<StyledInput
				name={name}
				type={type}
				placeholder={placeholder}
				error={error}
				disabled={disabled}
				onBlur={handleBlur}
				onChange={handleChange}
				value={value}
				className={className}
				aria-label="tm-input"
				{...rest}
			/>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div<{ block: boolean }>`
	${GlobalStyles};
	width: ${({ block }) => (block ? "100%" : "328px")};
	text-align: left;
`;
export const StyledInput = styled.input<InputProps>`
	box-sizing: border-box;
	border: 0;
	border: 1px solid ${COLORS.GREY4};
	padding: 12px 48px 12px 16px;
	border-radius: 4px;
	color: ${COLORS.GREY1};
	width: 100%;
	font-size: 14px;
	outline-color: ${COLORS.PRIMARY};
	outline-width: 2px;
	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: ${COLORS.DISABLED};
	}
	::-moz-placeholder {
		/* Firefox 19+ */
		color: ${COLORS.DISABLED};
	}
	:-ms-input-placeholder {
		/* IE 10+ */
		color: ${COLORS.DISABLED};
	}
	:-moz-placeholder {
		/* Firefox 18- */
		color: ${COLORS.DISABLED};
	}
	::placeholder: {
		color: ${COLORS.DISABLED};
	}
	${props =>
		props.error &&
		css`
			border-color: ${COLORS.DANGER};
			&:focus {
				outline-color: ${COLORS.DANGER};
			}
		`};
	${props =>
		props.disabled &&
		css`
			opacity: 0.64;
			cursor: no-drop;
			background-color: ${COLORS.DISABLED};
			color: ${COLORS.GREY3};
			::-webkit-input-placeholder {
				/* Chrome/Opera/Safari */
				color: ${COLORS.GREY3};
			}
			::-moz-placeholder {
				/* Firefox 19+ */
				color: ${COLORS.GREY3};
			}
			:-ms-input-placeholder {
				/* IE 10+ */
				color: ${COLORS.GREY3};
			}
			:-moz-placeholder {
				/* Firefox 18- */
				color: ${COLORS.GREY3};
			}
			::placeholder: {
				color: ${COLORS.GREY3};
			}
		`};
`;

export default Input;
