import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";
import { ChangeHandler } from "../__utils/type";
import { Rule } from ".";

export interface FormItemProps {
	name: string;
	label: string;
	helpText?: string;
	rules?: Rule[];
	state?: any;
	handleChange?: ChangeHandler<any>;
	errors?: any;
	handleError?: (rules: Rule[], name: string, value: any) => void;
	children: any;
}

const FormItem = ({
	name,
	label,
	helpText,
	rules,
	state = {},
	handleChange = () => {},
	errors = {},
	handleError = () => {},
	children
}: FormItemProps) => {
	const handleBlur = (value: any) => {
		rules ? handleError(rules, name, value) : null;
	};
	return (
		<div style={{ marginBottom: "20px" }}>
			<Label error={errors[name]}>{label}</Label>
			{React.cloneElement(children, {
				onChange: handleChange,
				onBlur: handleBlur,
				name,
				value: state[name]
					? state[name]
					: children.props.value
					? children.props.value
					: null || ""
			})}
			{helpText ? <HelpText>{helpText}</HelpText> : null}
			{errors[name] ? <ErrorText>{errors[name]}</ErrorText> : null}
		</div>
	);
};

const Label = styled.label<{ error: undefined | string }>`
	margin-bottom: 7px;
	display: flex;
	color: ${COLORS.GREY1};
	${({ error }) =>
		error &&
		css`
			color: ${COLORS.DANGER};
		`};
	font-weight: 500;
	color: ${({ error }) => (error ? COLORS.DANGER : "initial")};
`;

const ErrorText = styled.div<{ children: React.ReactNode }>`
	color: ${COLORS.DANGER};
	margin-top: 4px;
	word-wrap: break-word;
`;
export const HelpText = styled.p<{ children: React.ReactNode }>`
	color: ${COLORS.GREY2};
`;

export default FormItem;
