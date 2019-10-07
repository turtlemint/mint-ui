import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { TestInput } from "./input.stories";

afterEach(cleanup);

describe("Input tests", () => {
	const { asFragment, getByLabelText } = render(<TestInput />);

	test("renders correcty", () => {
		expect(asFragment()).toMatchSnapshot();
	});

	test("Handles text change", () => {
		const input = getByLabelText("tm-input");
		fireEvent.change(input, { target: { value: "New value" } });
		expect(input.value).toBe("New value");
	});
});
