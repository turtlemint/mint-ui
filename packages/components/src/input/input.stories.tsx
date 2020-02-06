import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./index";
import makeTable from "../table/prop-table";

const InputProps = [
	"type",
	"name",
	"placeholder",
	"label",
	"error",
	"helpText",
	"block",
	"disabled",
	"onChange",
	"onBlur",
	"value",
	"className"
];

const TableComponent = makeTable(InputProps);

const stories = storiesOf("Input", module).addParameters({
	info: {
		TableComponent,
		propTables: [Input]
	}
});

stories.add("empty input", () => (
	<Input type="text" placeholder="Enter text" value="" />
));

stories.add("text", () => (
	<Input type="text" placeholder="Enter text" value="some value" />
));

stories.add("password", () => (
	<Input type="password" placeholder="Enter password" value="Test value" />
));

stories.add("number", () => <Input type="number" value={10} />);

stories.add("label", () => <Input value="" type="text" label="Normal label" />);

stories.add("input with error", () => (
	<Input value="" type="text" error="Oops! something went wrong" />
));

const InputDemo = () => {
	const [value, setValue] = React.useState<string>("");
	const handleChange = (val: any) => {
		setValue(val);
	};
	return (
		<>
			<Input
				value={value}
				onChange={handleChange}
				placeholder="Enter something..."
			/>
			<div style={{ margin: "10px" }}>{value}</div>
		</>
	);
};
stories.add("functional demo", () => <InputDemo />);
