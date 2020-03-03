import * as React from "react";
import Checkbox from "./index";

export default {
	title: "Checkbox",
	component: Checkbox,
	parameters: {
		componentSubtitle: "all states"
	}
};

export const allStates = () => (
	<>
		<Checkbox value={false} />
		<Checkbox value={true} />
		<Checkbox value={true} indeterminate={true} />
		<Checkbox value={false} disabled />
	</>
);

export const demo = () => {
	const [value, setValue] = React.useState<boolean>(false);
	return (
		<Checkbox value={value} onChange={(val: boolean) => setValue(val)} />
	);
};
