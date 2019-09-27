import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./button";

const stories = storiesOf("Components", module);

stories.add("Button", () => <Button>Hello World</Button>, {
	info: { inline: true }
});
