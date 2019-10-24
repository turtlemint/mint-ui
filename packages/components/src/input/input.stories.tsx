import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Input } from "./index";

import { StoryWrapper } from "../storybook.setup";

const stories = storiesOf("Input", module);

stories.add("empty input", () => (
	<StoryWrapper>
		<Input
			type="text"
			placeholder="Enter text"
			value=""
		/>
	</StoryWrapper>
));

stories.add("text", () => (
	<StoryWrapper>
		<Input
			type="text"
			placeholder="Enter text"
			value="some value"
		/>
	</StoryWrapper>
));

stories.add("password", () => (
	<StoryWrapper>
		<Input
			type="password"
			placeholder="Enter password"
			value="Test value"
		/>
	</StoryWrapper>
));

stories.add("number", () => (
	<StoryWrapper>
		<Input
			type="number"
			value={10}
		/>
	</StoryWrapper>
));

const InputDemo = () => {
	const [value, setValue] = React.useState("");
	const handleChange = (val: string) => {
		setValue(val);
	}
	return (
		<>
			<Input value={value} onChange={handleChange} placeholder="Enter something..." />
			<div style={{ margin: "10px" }}>{value}</div>
		</>
	)
}
stories.add("functional demo", () => (
	<StoryWrapper>
		<InputDemo />
	</StoryWrapper>
));
