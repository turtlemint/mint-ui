import * as React from "react";
import { ProgressBar } from "./index";

export default {
	title: "ProgressBar",
	component: ProgressBar
};

export const BarWithZeroProgress = () => (
	<ProgressBar title="Bar with zero progress" progress={0} />
);

export const BarWithHalfProgress = () => (
	<ProgressBar title="Bar with 50% progress" progress={50} />
);

export const BarWithFullProgress = () => (
	<ProgressBar title="Bar with 100% progress" progress={100} />
);

export const BarWithoutProgressPercent = () => (
	<ProgressBar
		title="Bar without progress percent"
		progress={50}
		showProgressPercent={false}
	/>
);
export const BarWithoutTitle = () => <ProgressBar progress={50} />;
