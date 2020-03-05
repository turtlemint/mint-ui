import * as React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";

import Button from "./index";

afterEach(cleanup);
describe("Button", () => {
	test("renders button", () => {
		const { asFragment } = render(<Button>Test</Button>);
		expect(asFragment()).toMatchSnapshot();
	});
	test("captures button click", () => {
		const handleClick = jest.fn();

		const { getByTestId } = render(
			<Button data-testid="capture-click" onClick={handleClick}>
				Capture click
			</Button>
		);
		const node = getByTestId("capture-click");
		fireEvent.click(node);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});

afterEach(cleanup);
