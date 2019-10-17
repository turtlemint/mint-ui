import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./index";
import Row from "../grid/row";
import Col from "../grid/col";

const stories = storiesOf("Input", module);

stories.add("empty input", () => (
	<Row
		style={{
			padding: "0 30px"
		}}
	>
		<Col sm={6} md={6} lg={4}>
			<Input
				type="text"
				placeholder="Enter text"
				value=""
			/>
		</Col>
	</Row>
));

stories.add("text", () => (
	<Row
		style={{
			padding: "0 30px"
		}}
	>
		<Col sm={6} md={6} lg={4}>
			<Input
				type="text"
				placeholder="Enter text"
				value="some value"
			/>
		</Col>
	</Row>
));

stories.add("password", () => (
	<Row style={{
		padding: "0 30px"
	}}>
		<Col sm={6} md={6} lg={4}>
			<Input
				type="password"
				placeholder="Enter password"
				value="Test value"
			/>
		</Col>
	</Row>
));

stories.add("number", () => (
	<Row style={{
		padding: "0 30px"
	}}>
		<Col sm={6} md={6} lg={4}>
			<Input
				type="number"
				value={10}
			/>
		</Col>
	</Row>
));
