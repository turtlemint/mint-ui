import * as React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Checkbox from "./index";

afterEach(cleanup);

const CheckboxState = () => {
	const [checked, setChecked] = React.useState(false);
	const handleChange = val => {
		setChecked(val);
	};
	return <Checkbox checked={checked} onChange={handleChange} />;
};

describe("Checkbox", () => {
	const { getByLabelText, asFragment } = render(<CheckboxState />);
	test("changes checkbox state", () => {
		const checkbox = getByLabelText("tm-checkbox");
		fireEvent.click(checkbox, { checked: true });
		expect(checkbox.checked).toBeTruthy();
	});
	test("renders checkbox", () => {
		expect(asFragment()).toMatchSnapshot();
	});
});
