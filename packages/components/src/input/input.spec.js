import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { TestInput } from "./input.stories";

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
