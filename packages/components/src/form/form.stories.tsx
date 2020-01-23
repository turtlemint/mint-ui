import * as React from "react";
import Form from "./index";
import { storiesOf } from "@storybook/react";
const stories = storiesOf("Form", module);

const BasicForm = ({ form }: any) => {
	const {
		getFieldDecorator,
		getFieldsError,
		getFieldError,
		isFieldTouched
	} = form;
	console.log(
		getFieldDecorator,
		getFieldsError,
		getFieldError,
		isFieldTouched
	);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(e);
	};

	return <Form onSubmit={handleSubmit} />;
};

const WrappedBasicForm = Form.create({ name: "basic" })(BasicForm);

stories.add("basic", () => WrappedBasicForm);

// export const Basic = () => <WrappedBasicForm />
