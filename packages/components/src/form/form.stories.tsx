import * as React from "react";
import Form from "./index";
import { storiesOf } from "@storybook/react";
import Input from "../input";
import Select from "../select";
import { Option, SelectedOption } from "../select/dropdown";
import TypeAhead from "../typeahead";
import { ChangeHandler } from "../__utils/type";
import axios from "axios";

const stories = storiesOf("Form", module);

const selectData = [
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
		// Typeahead
		const [data, setData] = React.useState([]);
		const [open, setOpen] = React.useState(false);
		const [fetching, setFetching] = React.useState(false);

		const fetchUser = async () => {
			setFetching(true);
			setOpen(false);
			const response = await axios.get(
				"https://randomuser.me/api/?results=15"
			);
			const data = response.data.results.map((user: any) => ({
				text: `${user.name.first} ${user.name.last}`,
				value: user.login.username
			}));
			setData(data);
			setOpen(true);
			setFetching(false);
		};
		const handleSelect: ChangeHandler<SelectedOption> = (option, name) => {
			console.log(name, option);
			setOpen(false);
		};

		return (
			<>
				<Form name="basic" onSubmit={handleSubmit}>
					<Form.Item
						label="First name"
						name="firstName"
						rules={[
							{
								required: true,
								message: "First name is required"
							}
						]}
					>
						<Input type="text" placeholder="First name" />
					</Form.Item>
					<Form.Item name="lastName" label="Last name">
						<Input type="text" placeholder="Last name" />
					</Form.Item>
					<Form.Item
						name="email"
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
						name="state"
						label="State"
						rules={[
							{
								required: true,
								message: "State is required"
							}
						]}
					>
						<Select value={selectData[0]}>
							{selectData.map((d: any) => (
								<Option key={d.value} value={d.value}>
									{d.text}
								</Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item
						name="city"
						label="City"
						rules={[
							{
								required: true,
								message: "City is required"
							}
						]}
					>
						<TypeAhead
							name="some-typeahead"
							value={selectData[0]}
							loading={fetching}
							fetchFunc={fetchUser}
							onChange={handleSelect}
							open={open}
							placeholder="Select user..."
						>
							{data.map((d: any) => (
								<Option key={d.value} value={d.value}>
									{d.text}
								</Option>
							))}
						</TypeAhead>
					</Form.Item>
					<button type="submit">Submit</button>
				</Form>
			</>
		);
	},
	{
		info: {
			propTables: [Form]
		}
	}
);
