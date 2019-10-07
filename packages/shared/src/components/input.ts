import { css } from "styled-components";
import { PALETTE } from "../utils/colors";
import { Omit, CommonTypeTuple } from "../utils/type";

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
	border: 1px solid ${PALETTE.DISABLED};
	padding: 14px 48px 14px 16px;
	border-radius: 4px;
	color: ${PALETTE.GREY1};
	font-size: 16px;
	width: 100%;
	&:focus {
		border: 2px solid ${PALETTE.PRIMARY};
	}
	::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: ${PALETTE.DISABLED};
	}
	::-moz-placeholder {
		/* Firefox 19+ */
		color: ${PALETTE.DISABLED};
	}
	:-ms-input-placeholder {
		/* IE 10+ */
		color: ${PALETTE.DISABLED};
	}
	:-moz-placeholder {
		/* Firefox 18- */
		color: ${PALETTE.DISABLED};
	}
	::placeholder: {
		color: ${PALETTE.DISABLED};
	}
	${props =>
		props.error &&
		css`
			border: 1px solid ${PALETTE.DANGER};
			&:focus {
				border: 1px solid ${PALETTE.DANGER};
			}
		`};
	${props =>
		props.disabled &&
		css`
			opacity: 0.64;
			cursor: no-drop;
			background-color: ${PALETTE.DISABLED};
			color: ${PALETTE.GREY3};
			::-webkit-input-placeholder {
				/* Chrome/Opera/Safari */
				color: ${PALETTE.GREY3};
			}
			::-moz-placeholder {
				/* Firefox 19+ */
				color: ${PALETTE.GREY3};
			}
			:-ms-input-placeholder {
				/* IE 10+ */
				color: ${PALETTE.GREY3};
			}
			:-moz-placeholder {
				/* Firefox 18- */
				color: ${PALETTE.GREY3};
			}
			::placeholder: {
				color: ${PALETTE.GREY3};
			}
		`};
`;

const Shared = css`
	color: ${PALETTE.GREY1};
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
				color: ${PALETTE.DANGER};
			`};
	}
`;

export const Error = css`
	${Shared};
	margin-top: 4px;
	word-wrap: break-word;
	label {
		color: ${PALETTE.DANGER};
	}
`;

export const HelpText = css`
	${Shared};
	color: ${PALETTE.GREY2};
`;
