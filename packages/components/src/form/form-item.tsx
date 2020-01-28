import * as React from "react";
import { FormContext } from ".";

interface Rule {
	type?: string;
	required?: boolean;
	message: string;
}
export interface FormItemProps {
	label: string;
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
const FormItem = ({ label, rules, children }: FormItemProps) => {
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
			}
			const typeRule = rules.filter(item => item.type)[0];
			if (typeRule) {
				const result = validateRuleType(typeRule.type as string, value);
				if (!result) {
					errors[e.target.name] = typeRule.message;
					setErrors({ ...errors });
				}
			}
		}
	};

	return (
		<div>
			<label style={{ color: errors[fieldName] ? "red" : "" }}>
				{label}
			</label>
			{React.cloneElement(children, {
				value: state[children.props.name],
				onChange,
				onBlur: handleBlur
			})}
		</div>
	);
};

export default FormItem;
