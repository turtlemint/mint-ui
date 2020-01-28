import * as React from "react";
import FormItem from "./form-item";

export const FormContext = React.createContext<any>(null);
interface FormProps {
	name: string;
	initialState?: any;
	onSubmit: any;
	children: React.ReactNode | React.ReactNodeArray;
}

export const Form = ({ name, initialState, onSubmit, children }: FormProps) => {
	const [state, setState] = React.useState<any>(
		initialState ? initialState : {}
	);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(state);
	};
	const changeHandler = (value: any, name: string) => {
		setState({ ...state, [name]: value });
	};

	return (
		<FormContext.Provider
			value={{
				state,
				changeHandler
			}}
		>
			<form name={name} onSubmit={handleSubmit}>
				{children}
			</form>
		</FormContext.Provider>
	);
};

/**
    createHOC function implementatinon starts
*/
// const createHOC = (formAttrs: any) => {
//     const { name } = formAttrs;
//     return function (FormComponent: any) {
//         return (
//             <FormComponent
//                 name={name}
//                 form={{
//                     validateFields,
//                     resetFields,
//                     getFieldsError,
//                     getFieldError,
//                     isFieldTouched
//                 }}
//             />
//         );
//     };
// };

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
