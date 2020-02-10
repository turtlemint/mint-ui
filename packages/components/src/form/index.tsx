import * as React from "react";
import FormItem from "./form-item";
import { _isObject, _isArray } from "../__utils/type-check";

interface FormProps {
	name: string;
	onSubmit: React.FormEventHandler;
	children: any;
}
export interface Rule {
	type?: string;
	required?: boolean;
	message: string;
	pattern?: RegExp;
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

const validateRegex = (pattern: RegExp, value: string) => {
	return pattern.test(value);
};

export const Form = ({ name, onSubmit = () => {}, children }: FormProps) => {
	const [state, setState] = React.useState<any>({});
	const [errors, setErrors] = React.useState<any>({});

	const ifEmpty = (value: any): boolean => {
		if (
			!value ||
			(_isObject(value) && !value.value) ||
			(_isArray(value) && !value.length)
		)
			return true;
		return false;
	};

	const handleError = (rules: Rule[], name: string, value: any) => {
		value = value.trim();
		if (rules) {
			const requiredRule = rules.filter(item => item.required)[0];
			if (requiredRule) {
				const result = requiredRule ? ifEmpty(value) : false;
				if (result) {
					setErrors({ ...errors, [name]: requiredRule.message });
					return;
				}
			}
			const typeRule = rules.filter(item => item.type)[0];
			if (typeRule) {
				const result = validateRuleType(typeRule.type as string, value);
				if (!result) {
					setErrors({ ...errors, [name]: typeRule.message });
					return;
				}
			}
			const patternRule = rules.filter(item => item.pattern)[0];
			if (patternRule) {
				const result = validateRegex(
					patternRule.pattern as RegExp,
					value
				);
				if (!result) {
					setErrors({ ...errors, [name]: patternRule.message });
					return;
				}
			}
			setErrors({ ...errors, [name]: "" });
		}
	};

	const handleChange = (value: any, name: string) => {
		setState({ ...state, [name]: value });
	};

	const checkError = () => {
		const result = Object.keys(errors).filter(field => errors[field]);
		return result.length ? true : false;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (checkError()) return;
		console.log(state);
		onSubmit(state);
	};
	const requiredFields: any = {};

	const checkAllEmpty = (): boolean => {
		let isEmpty = false;
		for (let key in requiredFields) {
			if (ifEmpty(state[key])) {
				isEmpty = true;
				break;
			}
		}
		return isEmpty;
	};
	return (
		<form name={name} onSubmit={handleSubmit}>
			{React.Children.map(children, child => {
				const { rules, name } = child.props;
				if (rules) {
					const requiredRule = rules.filter(
						(item: any) => item.required
					)[0];
					if (requiredRule) requiredFields[name] = true;
				}

				if (child.type === "button") {
					return React.cloneElement(child, {
						disabled: checkError() || checkAllEmpty()
					});
				} else {
					return React.cloneElement(child, {
						state,
						handleChange,
						errors,
						handleError
					});
				}
			})}
		</form>
	);
};

/**
    getFieldDecorator function implementatinon starts
*/
// interface Rule {
//     type?: string;
//     message?: string;
//     required?: boolean;
//     validator?: (rule: string, value: any, callback: any) => void;
//     whitespace?: boolean;
// }
// interface FieldOptions {
//     valuePropName?: string;
//     initialValue?: boolean;
//     rules: Rule[];
// }

// const getFieldDecorator = (name: string, options?: FieldOptions) => {
//     const { valuePropName, initialValue, rules } = options;
//     // compute isRequired from rules ReactNodeArray
//     //
//     return function decorateField(Component: any) {
//         return <Component name={name} required={isRequired} />
//     }
// }

/**
    validateFields function implementatinon starts
*/
// const validateFields = () => { };

/**
    validateFields function implementatinon starts
*/
// const resetFields = () => { };

/**
    getFieldsError function implementatinon starts
*/
// const getFieldsError = () => { };

/**
    getFieldError function implementatinon starts
*/
// const getFieldError = () => { };

/**
    isFieldTouched function implementatinon starts
*/
// const isFieldTouched = () => { };

// Form.create = createHOC;
Form.Item = FormItem;

export default Form;
