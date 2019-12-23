import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Dropdown, { Option } from "./dropdown";
import Select from "./index";
import { DemoSelect } from "./select.stories";

export const data = [
	{
		value: 1,
		text: "Item 1"
	},
	{
		value: 2,
		text: "Item 2"
	}
];
afterEach(cleanup);

describe("Dropdown test suite", () => {
	test("Dropdown snapshot", () => {
		const { asFragment } = render(
			<Dropdown>
				{data.map(d => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</Dropdown>
		);
		expect(asFragment()).toMatchSnapshot();
	});
	test("Dropdown renders correctly", () => {
		const { getByTestId } = render(
			<Dropdown>
				{data.map(d => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</Dropdown>
		);
		expect(
			getByTestId("dropdown").getElementsByTagName("li")[0].textContent
		).toEqual("Item 1");
	});
	test("Item click works fine", () => {
		let selectedValue = null;
		const handleSelect = option => {
			selectedValue = option;
		};
		const { getByTestId } = render(
			<Dropdown onSelect={handleSelect}>
				{data.map(d => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</Dropdown>
		);
		fireEvent.click(getByTestId("dropdown").getElementsByTagName("li")[0]);
		expect(selectedValue.text).toBe("Item 1");
	});
});

describe("Select test suites", () => {
	test("Select label renders correctly", () => {
		const { getByTestId } = render(
			<Select onSelect={() => {}}>
				{data.map(d => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</Select>
		);
		expect(
			getByTestId("select-wrapper").getElementsByTagName("div")[0]
		).toBeInTheDocument();
	});
	test("Select snapshot", () => {
		const { asFragment } = render(
			<Select onSelect={() => {}}>
				{data.map(d => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</Select>
		);
		expect(asFragment()).toMatchSnapshot();
	});
	test("Select label opens the dropdown", () => {
		const { getByTestId } = render(
			<Select onSelect={() => {}}>
				{data.map(d => (
					<Option key={d.value} value={d.value}>
						{d.text}
					</Option>
				))}
			</Select>
		);
		fireEvent.click(
			getByTestId("select-wrapper").getElementsByTagName("div")[0]
		);
		expect(getByTestId("dropdown")).toBeInTheDocument();
	});

	test("Select dropdown item click sets the selected option's title to label", () => {
		let selectedItem = null;
		const handleSelect = item => {
			selectedItem = item;
		};
		const { getByTestId } = render(<DemoSelect onSelect={handleSelect} />);
		const selectLabel = getByTestId("select-wrapper").getElementsByTagName(
			"div"
		)[0];
		fireEvent.click(selectLabel);

		const liElement = getByTestId("select-wrapper")
			.getElementsByTagName("div")[1]
			.getElementsByTagName("li")[1];
		fireEvent.click(liElement);
		// console.log(selectLabel.getElementsByTagName("span")[0].textContent);
		// expect(getByTestId("select-wrapper").getElementsByTagName("div")[1]).not.toBeInTheDocument();
		expect(selectLabel.getElementsByTagName("span")[0].textContent).toEqual(
			selectedItem.text
		);
	});
});
