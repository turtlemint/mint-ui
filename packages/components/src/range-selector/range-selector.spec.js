import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import RangeSelector from "./";

export const TestRangeSelector = () => {
	
	return (
		<RangeSelector />
	);
};

afterEach(cleanup);

describe("RangeSelector tests", () => {
	test("renders correcty", () => {
		const { asFragment } = render(<TestRangeSelector />);
		expect(asFragment()).toMatchSnapshot();
	});
	
});
