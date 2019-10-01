import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import { cleanup, fireEvent, render } from "@testing-library/react";

import Button from "./button";

describe("Button", () => {
	test("renders correctly", () => {
		const tree = renderer.create(<Button>Test</Button>).toJSON();
		expect(tree).toMatchSnapshot();
	});
	test("captures click", done => {
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
