import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Select from "./index";
import { SelectedOption } from "./dropdown";

afterEach(cleanup);

const BasicSelectComp = () => {
	const data: SelectedOption[] = [
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
	const [state, setState] = React.useState<any>();
	const handleSelect = (option: SelectedOption) => {
		setState(option);
	};
	return <Select value={state} onChange={handleSelect} options={data} />;
};
const AsynSelectComp = () => {
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
		<Select
			style={{ paddingBottom: "40px" }}
			name="async-select"
			value={state}
			data={dataConfig}
			onChange={handleSelect}
			placeholder="Select one..."
		/>
	);
};
describe("Select test suites", () => {
	test("Select basic snapshot", () => {
		const { asFragment } = render(<BasicSelectComp />);
		expect(asFragment()).toMatchSnapshot();
	});

	test("Select async snapshot", () => {
		const { asFragment } = render(<AsynSelectComp />);
		expect(asFragment()).toMatchSnapshot();
	});
});
