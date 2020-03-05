import * as React from "react";
import Form, { DisplayType } from "./index";
import Input from "../input";
import Select from "../select";
import { Option, SelectedOption } from "../select/dropdown";
import TypeAhead from "../typeahead";
import { ChangeHandler } from "../__utils/type";
import axios from "axios";
import Checkbox from "../checkbox";
import RadioGroup from "../radio-group";
import Button from "../button";
import { labelCol, Label } from "./form-item";
import Row from "../grid/row";
import Col from "../grid/col";
import COLORS from "../__utils/colors";

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
const formItemLayout: { labelCol: labelCol; fieldCol: labelCol } = {
	labelCol: { span: 1 },
	fieldCol: { span: 4 }
};

export default {
	title: "Form",
	component: Form,
	parameters: {
		componentSubtitle: "basic"
	},
	includeStories: ["basic", "layout"]
};

export const basic = () => {
	const handleSubmit = (state: any) => {
		console.log("state", state);
	};
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
		<Form name="basic" onSubmit={handleSubmit}>
			<Form.Item
				label="First name"
				name="firstName"
				rules={[
					{
						required: true,
						message: "First name is required"
					},
					{
						len: 10,
						message: "Length should be exact 10"
					}
				]}
				helpText="First name has a rule of 10 exact characters for some secret reason"
				{...formItemLayout}
			>
				<Input type="text" placeholder="First name" />
			</Form.Item>
			<Form.Item
				name="lastName"
				label="Last name"
				rules={[
					{
						min: 1,
						max: 15,
						message: "Min and Max length should be between 1 and 15"
					}
				]}
				helpText="Last name should be lie between 1 and 15 characters"
				{...formItemLayout}
			>
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
						message: "Email is not valid",
						pattern: new RegExp(
							/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?: [\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
						)
					}
				]}
				{...formItemLayout}
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
					},
					{
						enum: ["Item 1", "Punjab"],
						message: "The value does not exist in enum"
					}
				]}
				{...formItemLayout}
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
				{...formItemLayout}
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
			<Form.Item
				name="maritalStatus"
				label="Are you married?"
				inline={true}
				rules={[
					{
						required: true,
						message: "Marital Status is required"
					}
				]}
			>
				<Checkbox value={true} />
			</Form.Item>
			<Form.Item
				name="radioGroup"
				label="Select options"
				rules={[
					{
						required: true,
						message: "Selection is required"
					}
				]}
				{...formItemLayout}
			>
				<RadioGroup>
					<RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
					<RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
					<RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
					<RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
				</RadioGroup>
			</Form.Item>
			<Form.Item labelCol={{ span: 1 }}>
				<Button
					size="small"
					btnType="solid"
					btnStyle="primary"
					htmlType="submit"
					title="Submit"
				/>
			</Form.Item>
		</Form>
	);
};

export const layout = () => {
	const [layout, setLayout] = React.useState<DisplayType>("horizontal");
	const handleSubmit = (state: any) => {
		console.log("state", state);
	};
	return (
		<>
			<Row style={{ marginBottom: "30px" }}>
				<Col>
					<Label style={{ marginRight: "10px" }}>Form Layout:</Label>
					<Button
						title="Horizontal"
						size="small"
						style={{ marginRight: "10px" }}
						onClick={() => setLayout("horizontal")}
					/>
					<Button
						title="Vertical"
						size="small"
						style={{ marginRight: "10px" }}
						onClick={() => setLayout("vertical")}
					/>
					<Button
						title="Inline"
						size="small"
						onClick={() => setLayout("inline")}
					/>
				</Col>
			</Row>
			<div
				style={{
					border: `1px dotted ${COLORS.GREY4}`,
					margin: "30px 0"
				}}
			></div>
			<Form name="basic" layout={layout} onSubmit={handleSubmit}>
				<Form.Item
					label="Name"
					name="name"
					rules={[
						{
							required: true,
							message: "First name is required"
						},
						{
							len: 10,
							message: "Length should be exact 10"
						}
					]}
					{...formItemLayout}
				>
					<Input type="text" placeholder="First name" />
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
							message: "Email is not valid",
							pattern: new RegExp(
								/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?: [\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
							)
						}
					]}
					{...formItemLayout}
				>
					<Input type="text" name="email" placeholder="Email" />
				</Form.Item>

				<Form.Item labelCol={{ span: 1 }}>
					<Button
						title="Submit"
						btnType="solid"
						btnStyle="primary"
						htmlType="submit"
					/>
				</Form.Item>
			</Form>
		</>
	);
};
