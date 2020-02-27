import * as React from "react";
import { storiesOf } from "@storybook/react";
import Empty from "./";
import SimpleImage from "./simple";

storiesOf("Empty", module)
	.add("default", () => {
		return (
			<Empty description="Default description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Assumenda, corrupti.
			</Empty>
		);
	})
	.add("simple", () => {
		return (
			<Empty image={<SimpleImage />} description="Simple description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
				nisi.
			</Empty>
		);
	});
