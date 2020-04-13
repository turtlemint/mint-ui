import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import ProgressBar from "./";

export const TestProgressBar = () => {
	
	return (
		<ProgressBar
			title="Life profile"
			progress={50}
			showProgressPercent={true}
		/>
	);
};

afterEach(cleanup);

describe("ProgressBar tests", () => {
	test("renders correcty", () => {
		const { asFragment } = render(<TestProgressBar />);
		expect(asFragment()).toMatchSnapshot();
	});
	
});
