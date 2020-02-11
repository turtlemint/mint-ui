import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";
import { ChangeHandler } from "../__utils/type";
import { Rule, DisplayType } from ".";

export interface FormItemProps {
	name: string;
	label: string;
	helpText?: string;
	rules?: Rule[];
	state?: any;
	handleChange?: ChangeHandler<any>;
	errors?: any;
	handleError?: (rules: Rule[], name: string, value: any) => void;
	display?: DisplayType;
	inline?: boolean;
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
	display = "horizontal",
	inline = false,
	children
}: FormItemProps) => {
	const handleBlur = (value: any) => {
		rules ? handleError(rules, name, value) : null;
	};
	return (
		<Wrapper display={display}>
			{label ? (
				<Label inline={inline} display={display} error={errors[name]}>
					{label}
				</Label>
			) : null}
			<Field display={display}>
				{React.cloneElement(children, {
					onChange: handleChange,
					onBlur: handleBlur,
					name,
					value: state[name] ?? children.props.value
				})}
				{helpText ? <HelpText>{helpText}</HelpText> : null}
				{errors[name] ? <ErrorText>{errors[name]}</ErrorText> : null}
			</Field>
		</Wrapper>
	);
};

const Wrapper = styled.div<{ display: DisplayType }>`
	margin-bottom: 20px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	${({ display }) =>
		display === "inline" &&
		css`
			display: inline-flex;
		`};
`;
const Field = styled.div<{ display: DisplayType }>`
	flex: 4;
`;
const Label = styled.label<{
	error: string;
	display: DisplayType;
	inline: boolean;
}>`
	flex: 1;
	color: ${COLORS.GREY1};
	${({ error }) =>
		error &&
		css`
			color: ${COLORS.DANGER};
		`};
	font-weight: 500;
	color: ${({ error }) => (error ? COLORS.DANGER : "initial")};
	${({ display }) =>
		display === "vertical" &&
		css`
			margin-right: 0px;
		`};
	${({ display }) =>
		display === "inline" &&
		css`
			margin: 0;
			margin-right: 10px;
		`};
	${({ display, inline }) =>
		display === "vertical" &&
		!inline &&
		css`
			min-width: 100%;
			margin-bottom: 10px;
		`};
`;

const ErrorText = styled.div<{ children: React.ReactNode }>`
	color: ${COLORS.DANGER};
	margin-top: 4px;
	word-wrap: break-word;
	min-width: 100%;
`;
export const HelpText = styled.p<{ children: React.ReactNode }>`
	color: ${COLORS.GREY3};
	min-width: 100%;
	font-size: 12px;
	margin: 4px 0;
`;

export default FormItem;
