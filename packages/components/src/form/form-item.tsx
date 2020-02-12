import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";
import { ChangeHandler } from "../__utils/type";
import { Rule, DisplayType } from ".";

export type labelCol = { span: number };

export interface FormItemProps {
	/** Name of the form control field */
	name?: string;
	/** label of the form control label element */
	label?: string;
	/** helpText to aid understanding of the form field */
	helpText?: string;
	/** validation rules for the form control field */
	rules?: Rule[];
	/** state of the form  (Used internally ) */
	state?: any;
	/** common handleChange event for form control field (Used internally )  */
	handleChange?: ChangeHandler<any>;
	/** error state of the form */
	errors?: any;
	/** handleError handler to be called on onBlur of the form controld fields */
	handleError?: (rules: Rule[], name: string, value: any) => void;
	/** layout propagated from Form component ( Used internally) */
	layout?: DisplayType;
	/** used to create an inline form label and checkbox type of field when form layout is vertical */
	inline?: boolean;
	/** disabled button state  */
	btnDisabled?: boolean;
	/** flex value for label */
	labelCol?: labelCol;
	/** flex value for form control field */
	fieldCol?: labelCol;
	children: any;
}

export const FormItem = ({
	name = "",
	label = "",
	helpText,
	rules,
	state = {},
	handleChange = () => { },
	errors = {},
	handleError = () => { },
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
			{layout !== "inline" ? (
				<Label
					inline={inline}
					layout={layout}
					error={errors[name]}
					labelCol={labelCol}
				>
					{label}
				</Label>
			) : null}

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
			margin-left: 20px;
		`};
`;
const Field = styled.div<{ fieldCol?: labelCol }>`
	flex: ${({ fieldCol }) => (fieldCol ? fieldCol.span : 4)};
`;
export const Label = styled.label<{
	error?: string;
	layout?: DisplayType;
	inline?: boolean;
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
