import * as React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./index";
import { StoryWrapper } from "../storybook.setup";

const stories = storiesOf("Checkbox", module);

const NormalCheckbox = () => {
	const [checked, setChecked] = React.useState(true);
	const handleChange = (val: boolean) => {
		setChecked(val);
	};
	return <Checkbox checked={checked} onChange={handleChange} />;
};
const IndeterminateCheckboxDemo = () => {
	const [checked, setChecked] = React.useState(true);
	const handleChange = (val: boolean) => {
		setChecked(val);
	};
	return (
		<Checkbox
			checked={checked}
			indeterminate={true}
			onChange={handleChange}
		/>
	);
};

stories.add("Default", () => (
	<StoryWrapper>
		<NormalCheckbox />
	</StoryWrapper>
));

stories.add("Indeterminate", () => (
	<StoryWrapper>
		<IndeterminateCheckboxDemo />
	</StoryWrapper>
));
stories.add("Disabled", () => (
	<StoryWrapper>
		<Checkbox checked={false} disabled />
	</StoryWrapper>
));
