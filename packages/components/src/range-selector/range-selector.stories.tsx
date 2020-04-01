import * as React from "react";
import { RangeSelector } from "./index";

export default {
	title: "RangeSelector",
	component: RangeSelector
};

export const BasicRangeSelector = () => <RangeSelector />;

export const RangeSelectorChangeFunctionality = () => {
	let [value, setValue] = React.useState<any>(50);

	const props = {
		min: 0,
		max: 100,
		step: 10,
		value: value,
		onChange: setValue
	};

	return (
		<div>
			<RangeSelector {...props} />
		</div>
	);
};
