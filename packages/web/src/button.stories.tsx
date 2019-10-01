import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./button";
import { action } from "@storybook/addon-actions";

// Storybook Markdown support - https://github.com/storybookjs/storybook/issues/6434
// import ButtonReadme from "./README.md";

export const actions = {
	onOutlineClick: action("onOutlineClick"),
	onPrimaryClick: action("onPrimaryClick")
};
const stories = storiesOf("Buttons", module);
stories.add("Button", () => <Button btnType="primary">Primary Button</Button>, {
	notes: { Introduction: "Notes", "Design notes": "adad" }
});
stories.add("Outlined", () => (
	<Button
		btnType="outlined"
		onClick={() => {
			console.log("fired");
		}}
		{...actions}
	>
		Outlined button
	</Button>
));
stories.add("Disabled", () => (
	<Button btnType="outlined" disabled {...actions}>
		Button Outlined Disabled
	</Button>
));
