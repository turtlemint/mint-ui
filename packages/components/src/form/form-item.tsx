import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";
import { ChangeHandler } from "../__utils/type";
import { Rule, DisplayType } from ".";

export type labelCol = { span: number };

export interface FormItemProps {
	name?: string;
	label?: string;
	helpText?: string;
	rules?: Rule[];
	state?: any;
	handleChange?: ChangeHandler<any>;
	errors?: any;
	handleError?: (rules: Rule[], name: string, value: any) => void;
	layout?: DisplayType;
	inline?: boolean;
	btnDisabled?: boolean;
	labelCol?: labelCol;
	fieldCol?: labelCol;
	children: any;
}

const FormItem = ({
	name = "",
	label = "",
	helpText,
	rules,
	state = {},
	handleChange = () => {},
	errors = {},
	handleError = () => {},
	layout = "horizontal",
	inline = false,
	btnDisabled = false,
	labelCol,
	fieldCol,
	children
}: FormItemProps) => {
	const handleBlur = (value: any) => {
		rules ? handleError(rules, name, value) : null;
	};
	return (
		<Wrapper layout={layout}>
			<Label
				inline={inline}
				layout={layout}
				error={errors[name]}
				labelCol={labelCol}
			>
				{label}
			</Label>

			<Field fieldCol={fieldCol}>
				{React.cloneElement(children, {
					onChange: handleChange,
					onBlur: handleBlur,
					name,
					value: state[name] ?? children.props.value,
					disabled:
						children.props.htmlType === "submit"
							? btnDisabled
							: false
				})}
				{helpText ? <HelpText>{helpText}</HelpText> : null}
				{errors[name] ? <ErrorText>{errors[name]}</ErrorText> : null}
			</Field>
		</Wrapper>
	);
};

const Wrapper = styled.div<{ layout: DisplayType }>`
	margin-bottom: 20px;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: flex-start;
	${({ layout }) =>
		layout === "inline" &&
		css`
			display: inline-flex;
		`};
`;
const Field = styled.div<{ fieldCol?: labelCol }>`
	flex: ${({ fieldCol }) => (fieldCol ? fieldCol.span : 4)};
`;
const Label = styled.label<{
	error: string;
	layout: DisplayType;
	inline: boolean;
	labelCol?: labelCol;
}>`
	flex: ${({ labelCol }) => (labelCol ? labelCol.span : 1)};
	color: ${COLORS.GREY1};
	${({ error }) =>
		error &&
		css`
			color: ${COLORS.DANGER};
		`};
	font-weight: 500;
	color: ${({ error }) => (error ? COLORS.DANGER : "initial")};
	${({ layout }) =>
		layout === "vertical" &&
		css`
			margin-right: 0px;
		`};
	${({ layout }) =>
		layout === "inline" &&
		css`
			margin: 0;
			margin-right: 10px;
		`};
	${({ layout, inline }) =>
		layout === "vertical" &&
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
