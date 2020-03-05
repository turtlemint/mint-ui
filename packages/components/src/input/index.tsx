import * as React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { CommonTypeTuple, ChangeHandler, BlurHandler } from "../__utils/type";
import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

export interface InputProps {
	/** htmlType of the input */
	type?: string;
	/** passed by form item */
	name?: string;
	/** initial value of the input */
	value?: CommonTypeTuple;
	placeholder?: string;
	/** passed by form item */
	error?: string;
	/** full width of the input */
	block?: boolean;
	disabled?: boolean;
	/** callback for onChange of the input */
	onChange?: ChangeHandler<string>;
	/** callback for onBlur of the input */
	onBlur?: BlurHandler<string>;
	size?: "large" | "small" | "default";
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
	size,
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
				size={size}
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
	outline-color: ${COLORS.PRIMARY_LIGHT};
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
	${({ size }) =>
		size === "small" &&
		css`
			padding-top: 8px;
			padding-bottom: 8px;
		`}
	${({ size }) =>
		size === "large" &&
		css`
			padding-top: 14px;
			padding-bottom: 14px;
		`}
`;

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	placeholder: PropTypes.string,
	error: PropTypes.string,
	block: PropTypes.bool,
	disabled: PropTypes.bool,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	value: PropTypes.string,
	className: PropTypes.string,
	size: PropTypes.oneOf(["large", "small", "default"])
};

Input.defaultProps = {
	type: "text",
	block: false,
	disabled: false
};

export default Input;
