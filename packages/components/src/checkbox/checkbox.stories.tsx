import * as React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./index";

const stories = storiesOf("Checkbox", module);

stories.add("Default", () => (
	<Checkbox checked={true} />
));

stories.add("Indeterminate", () => (
	<Checkbox
		checked={true}
		indeterminate={true}
	/>
));
stories.add("Disabled", () => (
	<Checkbox checked={false} disabled />
));
