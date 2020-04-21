import * as React from "react";
import { render } from "@testing-library/react";
import RadioGroup from "./index";

test("Radio group renders correctly", () => {
	const children = [
		{
			value: "item-1",
			text: "Item 1"
		},
		{
			value: "item-2",
			text: "Item 2"
		}
	];
	const { asFragment } = render(
		<RadioGroup value="item-4" radios={children} />
	);
	expect(asFragment()).toMatchSnapshot();
});
