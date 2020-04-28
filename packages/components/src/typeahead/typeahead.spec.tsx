import * as React from "react";
import { render } from "@testing-library/react";
import TypeAhead from "./index";

const Component = () => {
	const dataConfig = {
		url: "https://api.publicapis.org/entries",
		params: {
			// fill the params here or later in app flow dynamically as you wish
			category: "business",
			https: true
		},
		dataKey: "entries",
		valueKey: "Link", // this will usually be id key
		displayKey: "API",
		searchKey: ""
	};
	return (
		<div style={{ height: "150px", width: "300px" }}>
			<TypeAhead
				name="default-typeahead"
				onChange={() => {}}
				data={dataConfig}
			/>
		</div>
	);
};
describe("Typeahead tests", () => {
	test("renders correctly", () => {
		const { asFragment } = render(<Component />);
		expect(asFragment()).toMatchSnapshot();
	});
});
