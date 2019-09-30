import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./button";

const stories = storiesOf("Buttons", module);
stories.add(
	"Button Primary",
	() => (
		<Button
			onClick={() => {
				alert("fired");
			}}
		>
			Primary Button
		</Button>
	),
	{
		info: { inline: true }
	}
);
stories.add(
	"Button Outlined",
	() => (
		<Button
			btnType="outlined"
			onClick={() => {
				alert("fired");
			}}
		>
			Outlined button
		</Button>
	),
	{
		info: { inline: true }
	}
);
