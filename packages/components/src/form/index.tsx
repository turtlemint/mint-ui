import * as React from "react";
import FormItem from "./form-item";

// export const FormContext = React.createContext<any>(null);
interface FormProps {
	name: string;
	onSubmit: any;
	children: any;
}

export const Form = ({ name, onSubmit, children }: FormProps) => {
	const formRef: any = React.useRef(null);

	const [errors, setErrors] = React.useState<any>({});

	const handleError = (name: string, message: string) => {
		setErrors({ ...errors, [name]: message });
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const { elements } = formRef.current;
		let values: any = {};
		for (let i = 0; i < elements.length; i++) {
			if (elements[i].name) {
				values[elements[i].name] = elements[i].value;
			}
		}
		console.log(values);
		onSubmit ? onSubmit(values) : null;
	};

	return (
		<form name={name} ref={formRef} onSubmit={handleSubmit}>
			{React.Children.map(children, child => {
				if (child.type !== "button") {
					return React.cloneElement(child, {
						errors,
						handleError
					});
				}
				return child;
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
