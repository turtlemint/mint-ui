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
		<Checkbox value={true} style={{ marginRight: "15px" }}>
			Male
		</Checkbox>
		<Checkbox value={false} style={{ marginRight: "15px" }}>
			Female
		</Checkbox>
		<Checkbox
			value={true}
			indeterminate={true}
			style={{ marginRight: "15px" }}
		>
			Select all
		</Checkbox>
		<Checkbox value={false} disabled>
			Disabled
		</Checkbox>
	</>
);

export const demo = () => {
	const [value, setValue] = React.useState<boolean>(false);
	return (
		<Checkbox value={value} onChange={(val: boolean) => setValue(val)}>
			I declare that I have read the Benefit Illustration associated with
			my application and that the information provided by me is true. I
			accept that if this information is found to be false, it may impact
			claims. I authorize Turtlemint (Invictus Insurance Broking Pvt.
			Ltd.) to represent me at insurance companies for my insurance needs.
		</Checkbox>
	);
};
