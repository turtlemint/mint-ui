import * as React from "react";
import { storiesOf } from "@storybook/react";
import Chip from "./index";

const stories = storiesOf("Chip", module);

stories.add(
	"default",
	() => (
		<>
			<Chip text="November" style={{ marginRight: "15px" }} />
			<Chip text="October" done={true} style={{ marginRight: "15px" }} />
			<Chip text="This Quarter" style={{ marginRight: "15px" }} />
			<Chip text="Last Quarter" />
		</>
	),
	{
		info: {
			propTables: [Chip]
		}
	}
);
