import * as React from "react";

interface FormProps {
	onSubmit: React.FormEventHandler;
}

const Form = ({ onSubmit }: FormProps) => {
	return (
		<form action="" onSubmit={onSubmit}>
			<input type="text" />
		</form>
	);
};

const createHOC = (formAttrs: any) => {
	const { name } = formAttrs;
	return function(FormComponent: any) {
		return (
			<FormComponent
				name={name}
				form={{
					getFieldDecorator: () => {
						console.log("getFieldDecorator");
					},
					getFieldsError: () => {
						console.log("getFieldsError");
					},
					getFieldError: () => {
						console.log("getFieldsError");
					},
					isFieldTouched: () => {
						console.log("isFieldTouched");
					}
				}}
			/>
		);
	};
};

Form.create = createHOC;

export default Form;
