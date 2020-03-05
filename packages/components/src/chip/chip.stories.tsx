import * as React from "react";
import Chip from "./index";

export default {
	title: "Chip",
	component: Chip,
	parameters: {
		componentSubtitle: "default"
	}
};

export const Default = () => (
	<>
		<Chip text="November" style={{ marginRight: "15px" }} />
		<Chip text="October" done={true} style={{ marginRight: "15px" }} />
		<Chip text="This Quarter" style={{ marginRight: "15px" }} />
		<Chip text="Last Quarter" />
	</>
);
