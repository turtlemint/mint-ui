import * as React from "react";
import Select from "./index";
import { SelectedOption } from "./dropdown";

export default {
	title: "Select",
	component: Select
};

export const demo = () => {
	interface DataItem {
		text: string;
		value: string;
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
			<Select value={value} onChange={handleSelect} options={data} />
		</div>
	);
};

export const asyncList = () => {
	const [state, setState] = React.useState<any>();
	const dataConfig = {
		url: "https://api.publicapis.org/entries",
		params: {
			// fill the params here or later in app flow dynamically as you wish
			category: "business",
			https: true
		},
		dataKey: "entries",
		valueKey: "Link", // this will usually be id key
		displayKey: "API"
	};
	const handleSelect = (option: SelectedOption) => {
		setState(option);
	};
	return (
		<div style={{ paddingBottom: "100px" }}>
			<p>
				Just supply the data object configuration in specified format
				and rest is handled
			</p>
			<Select
				style={{ paddingBottom: "40px" }}
				name="async-select"
				value={state}
				data={dataConfig}
				onChange={handleSelect}
				placeholder="Select one..."
			/>
		</div>
	);
};
