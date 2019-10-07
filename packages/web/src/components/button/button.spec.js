import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "jest-styled-components";

import Button from "./button";

describe("Button", () => {
	test("renders button", () => {
		const { asFragment } = render(<Button>Test</Button>);
		expect(asFragment()).toMatchSnapshot();
	});
	test("captures button click", done => {
		function handleClick() {
			done();
		}
		const { getByTestId } = render(
			<Button data-testid="capture-click" onClick={handleClick}>
				Capture click
			</Button>
		);
		const node = getByTestId("capture-click");
		fireEvent.click(node);
	});
});

afterEach(cleanup);
