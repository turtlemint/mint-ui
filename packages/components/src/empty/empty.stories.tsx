import * as React from "react";
import Empty from "./";
import SimpleImage from "./simple";

export default {
	title: "Empty",
	component: Empty
};

export const All = () => (
	<>
		<Empty description="Default description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
			corrupti.
		</Empty>
		<Empty image={<SimpleImage />} description="Simple description">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nisi.
		</Empty>
	</>
);
