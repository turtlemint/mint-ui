import * as React from "react";
import styled, { css } from "styled-components";
import { FormContext } from ".";
import COLORS from "../__utils/colors";

interface Rule {
	type?: string;
	required?: boolean;
	message: string;
}
export interface FormItemProps {
	label: string;
	helpText?: string;
	rules?: Rule[];
	children: any;
}

const REGEX = {
	EMAIL: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
};

const validateRuleType = (type: string, value: string) => {
	switch (type) {
		case "email":
			return new RegExp(REGEX.EMAIL).test(value);
		default:
			return true;
	}
};
const FormItem = ({ label, helpText, rules, children }: FormItemProps) => {
	const {
		state,
		changeHandler: onChange,
		errors,
		setErrors
	} = React.useContext(FormContext);

	const [fieldName, setFieldName] = React.useState<string>("");

	const handleBlur = (e: {
		target: HTMLInputElement | HTMLSelectElement;
	}) => {
		if (rules) {
			const value = e.target.value;
			setFieldName(e.target.name);
			if (!value) {
				const requiredItem = rules.filter(item => item.required)[0];
				errors[e.target.name] = requiredItem.message;
				setErrors({ ...errors });
				return;
			}
			const typeRule = rules.filter(item => item.type)[0];
			if (typeRule) {
				const result = validateRuleType(typeRule.type as string, value);
				if (!result) {
					errors[e.target.name] = typeRule.message;
					setErrors({ ...errors });
					return;
				}
			}
			errors[e.target.name] = "";
			setErrors({ ...errors });
		}
	};

	return (
		<div>
			<Label error={errors[fieldName]}>{label}</Label>
			{React.cloneElement(children, {
				value: state[children.props.name],
				onChange,
				onBlur: handleBlur,
				error: errors[fieldName]
			})}
			{helpText ? <HelpText>{helpText}</HelpText> : null}
			{errors[fieldName] ? (
				<ErrorText>{errors[fieldName]}</ErrorText>
			) : null}
		</div>
	);
};

const Label = styled.label<{ error: undefined | string }>`
	margin-bottom: 4px;
	display: flex;
	label {
		color: ${COLORS.GREY1};
		${({ error }) =>
			error &&
			css`
				color: ${COLORS.DANGER};
			`};
	}
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
