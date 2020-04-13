import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import DatePicker from "./";

export const TestDatePicker = () => {
	
	return (
		<DatePicker />
	);
};

afterEach(cleanup);

describe("DatePicker tests", () => {
	test("renders correcty", () => {
		const { asFragment } = render(<TestDatePicker />);
		expect(asFragment()).toMatchSnapshot();
	});
	
});
