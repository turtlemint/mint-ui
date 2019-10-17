import * as React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import Input from "./";

export const TestInput = () => {
	const [value, setValue] = React.useState("");
	const handleChange = (val) => {
		setValue(val);
	};
	return (
		<Input
			type="text"
			placeholder="Test input"
			value={value}
			onChange={handleChange}
		/>
	);
};

afterEach(cleanup);

describe("Input tests", () => {
	test("renders correcty", () => {
		const { asFragment } = render(<TestInput />);
		expect(asFragment()).toMatchSnapshot();
	});
	test("Handles text change", () => {
		const { getByLabelText } = render(<TestInput />);
		const input = getByLabelText("tm-input");
		fireEvent.change(input, { target: { value: "New value" } });
		expect(input.value).toBe("New value");
	});
});
