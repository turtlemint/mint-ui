import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./index";
import Row from "../grid/row";
import Col from "../grid/col";

const stories = storiesOf("Input", module);

export const TestInput = () => {
	const [value, setValue] = React.useState("");
	const handleChange = (val: string) => {
		setValue(val);
	};
	return (
		<Input
			type="text"
			placeholder="Test input"
			value={value}
			onChange={handleChange}
		/>
	);
};
stories.add("Input", () => (
	<Row
		style={{
			padding: "0 30px"
		}}
	>
		<Col sm={6} md={6} lg={4}>
			<TestInput />
		</Col>
	</Row>
));
