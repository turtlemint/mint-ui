import * as React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./";
import { Option, SelectedOption } from "./dropdown";

const stories = storiesOf("Select", module);

interface DataItem {
	text?: string;
	value?: string;
}

export const data: DataItem[] = [
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

stories.add("full functional demo", () => {
	const [value, setValue] = React.useState<any>(data[0]);

	const handleSelect = (option: SelectedOption) => {
		const dataItem = data.filter(item => item.value === option.value)[0];
		setValue(dataItem);
	};
	return (
		<Select name="demo-select" value={value} onChange={handleSelect}>
			{data.map((d: any) => (
				<Option key={d.value} value={d.value}>
					{d.text}
				</Option>
			))}
		</Select>
	);
});

stories.add("default", () => {
	const dataItems = ["Select Item", "Item 1", "Item 2", "Item 3", "Item 4"];
	const [value, setValue] = React.useState<any>(dataItems[0]);
	const handleSelect = (option: SelectedOption) => {
		const dataItem = dataItems.filter(item => item === option.value)[0];
		setValue(dataItem);
	};
	return (
		<Select name="basic-select" value={value} onChange={handleSelect}>
			{dataItems.map((d: any) => (
				<Option key={d} value={d}>
					{d}
				</Option>
			))}
		</Select>
	);
});
