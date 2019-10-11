import { css } from "styled-components";
import { Colors } from "@turtlemint/core";
import { CommonTypeTuple } from "../__utils/type";

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

export const Wrapper = css<Pick<InputProps, "block">>`
	width: ${props => (props.block ? "100%" : "328px")};
	text-align: left;
`;

export const Input = css<
	Pick<InputProps, "error" | "disabled"> & Omit<InputProps, "onChange">
>`
	border: 0;
	border: 1px solid ${Colors.DISABLED};
	padding: 14px 48px 14px 16px;
	border-radius: 4px;
	color: ${Colors.GREY1};
	font-size: 16px;
	width: 100%;
	&:focus {
		border: 2px solid ${Colors.PRIMARY};
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

const Shared = css`
	color: ${Colors.GREY1};
	font-size: 14px;
	line-height: 1.43;
`;
type LabelProps = Pick<InputProps, "error">;

export const Label = css<LabelProps>`
	margin-bottom: 4px;
	label {
		${Shared};
		${props =>
			props.error &&
			css`
				color: ${Colors.DANGER};
			`};
	}
`;

export const Error = css`
	${Shared};
	margin-top: 4px;
	word-wrap: break-word;
	label {
		color: ${Colors.DANGER};
	}
`;

export const HelpText = css`
	${Shared};
	color: ${Colors.GREY2};
`;
