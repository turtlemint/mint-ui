import React from "react";
import { render } from "@testing-library/react";
import Row from "./row";
import Col from "./col";

const Demo = () => (
	<Row>
		<Col sm={4}>Some value</Col>
		<Col sm={4}>Another value</Col>
		<Col sm={4}>Third value</Col>
	</Row>
);
test("Row Col renders correctly", () => {
	const { asFragment } = render(<Demo />);
	expect(asFragment()).toMatchSnapshot();
});
