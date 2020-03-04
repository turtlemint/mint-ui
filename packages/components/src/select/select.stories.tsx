import * as React from "react";
import Select from "./index";
import { Option, SelectedOption } from "./dropdown";

export default {
	title: "Select",
	component: Select
};

export const demo = () => {
	interface DataItem {
		text?: string;
		value?: string;
	}

	const data: DataItem[] = [
		{
			text: "Select Value",
			value: ""
		},
		{
			value: "item1",
			text: "Item 1"
		},
		{
			value: "item2",
			text: "Item 2"
		}
	];
	const [value, setValue] = React.useState<any>(data[0]);

	const handleSelect = (option: SelectedOption) => {
		const dataItem = data.filter(item => item.value === option.value)[0];
		setValue(dataItem);
	};
	return (
		<div style={{ height: "150px" }}>
			<Select value={value} onChange={handleSelect}>
				{data.map((d: any) => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</Select>
		</div>
	);
};

export const basic = () => {
	const dataItems = ["Select Item", "Item 1", "Item 2", "Item 3", "Item 4"];
	const [value, setValue] = React.useState<any>(dataItems[0]);
	const handleSelect = (option: SelectedOption, name: string) => {
		console.log(name, option);
		const dataItem = dataItems.filter(item => item === option.value)[0];
		setValue(dataItem);
	};
	return (
		<div style={{ height: "150px" }}>
			<Select value={value} onChange={handleSelect}>
				{dataItems.map((d: any) => (
					<Option key={d} value={d}>
						{d}
					</Option>
				))}
			</Select>
		</div>
	);
};

export const disabled = () => {
	interface DataItem {
		text?: string;
		value?: string;
	}

	const data: DataItem[] = [
		{
			text: "Select Value",
			value: ""
		},
		{
			value: "item1",
			text: "Item 1"
		},
		{
			value: "item2",
			text: "Item 2"
		}
	];
	return (
		<div>
			<Select name="demo-select" disabled>
				{data.map((d: any) => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</Select>
		</div>
	);
};
