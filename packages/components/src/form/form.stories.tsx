import * as React from "react";
import Form from "./index";
import { storiesOf } from "@storybook/react";
import Input from "../input";
import Select from "../select";
import { Option } from "../select/dropdown";

const stories = storiesOf("Form", module);

const data = [
	{
		text: "Select Value",
		value: ""
	},
	{
		text: "Item 1",
		value: "item1"
	},
	{
		text: "Item 2",
		value: "item2"
	}
];
const initialState = {
	firstName: "Kushal",
	lastName: "",
	city: data[0]
};

stories.add(
	"basic",
	() => {
		// const {
		//     getFieldDecorator,
		//     getFieldsError,
		//     getFieldError,
		//     isFieldTouched
		// } = form;
		// console.log(
		//     getFieldDecorator,
		//     getFieldsError,
		//     getFieldError,
		//     isFieldTouched
		// );
		const handleSubmit = (state: any) => {
			console.log("state", state);
		};

		return (
			<Form
				name="basic"
				onSubmit={handleSubmit}
				initialState={initialState}
			>
				<Form.Item
					label="First name"
					rules={[
						{
							required: true,
							message: "First name is required"
						}
					]}
				>
					<Input
						type="text"
						name="firstName"
						placeholder="First name"
					/>
				</Form.Item>
				<Form.Item label="Last name">
					<Input
						type="text"
						name="lastName"
						placeholder="Last name"
					/>
				</Form.Item>
				<Form.Item
					label="Email"
					rules={[
						{
							required: true,
							message: "Email is required"
						},
						{
							type: "email",
							message: "Email is not valid"
						}
					]}
				>
					<Input type="text" name="email" placeholder="Email" />
				</Form.Item>
				<Form.Item
					label="City"
					rules={[
						{
							required: true,
							message: "City is required"
						}
					]}
				>
					<Select name="city">
						{data.map((d: any) => (
							<Option key={d.value} value={d.value}>
								{d.text}
							</Option>
						))}
					</Select>
				</Form.Item>
				<button type="submit">Submit</button>
			</Form>
		);
	},
	{
		info: {
			propTables: [Form]
		}
	}
);
