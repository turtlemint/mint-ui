import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";

interface Rule {
	type?: string;
	required?: boolean;
	message: string;
}
export interface FormItemProps {
	name: string;
	label: string;
	helpText?: string;
	rules?: Rule[];
	errors?: any;
	handleError?: (name: string, message: string) => void;
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
const FormItem = ({
	name,
	label,
	helpText,
	rules,
	errors = {},
	handleError = () => {},
	children
}: FormItemProps) => {
	const handleBlur = (e: {
		target: HTMLInputElement | HTMLSelectElement;
	}) => {
		if (rules) {
			const { value } = e.target;

			if (!value) {
				const requiredItem = rules.filter(item => item.required)[0];
				handleError ? handleError(name, requiredItem.message) : null;
				return;
			}
			const typeRule = rules.filter(item => item.type)[0];
			if (typeRule) {
				const result = validateRuleType(typeRule.type as string, value);
				if (!result) {
					handleError(name, typeRule.message);
					return;
				}
			}

			handleError(name, "");
		}
	};

	return (
		<div>
			<Label error={errors[name]}>{label}</Label>
			{React.cloneElement(children, {
				onBlur: handleBlur,
				name
			})}
			{helpText ? <HelpText>{helpText}</HelpText> : null}
			{errors[name] ? <ErrorText>{errors[name]}</ErrorText> : null}
		</div>
	);
};

const Label = styled.label<{ error: undefined | string }>`
	margin-bottom: 4px;
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
