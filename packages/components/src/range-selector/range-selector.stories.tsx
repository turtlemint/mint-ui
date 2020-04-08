import * as React from "react";
import { RangeSelector } from "./index";
import COLORS from "../__utils/colors";

export default {
	title: "RangeSelector",
	component: RangeSelector,
	parameters: {
		componentSubtitle: "ThumbLabelFormatter"
	}
};

export const ThumbLabelFormatter = () => {
	const [value, setValue] = React.useState(7000000);
	const formatLabel = (value: string): string => {
		switch (value.length) {
			case 4:
				return value.substr(0, 1) + "K";
			case 5:
				return value.substr(0, 2) + "K";
			case 6:
				return value.substr(0, 1) + "lac";
			case 7:
				return value.substr(0, 2) + "lac";
			case 8:
				return value.substr(0, 1) + "Cr";
			case 9:
				return value.substr(0, 2) + "Cr";
			default:
				return value;
		}
	};
	return (
		<RangeSelector
			value={value}
			min={10000}
			step={10000}
			max={10000000}
			labelFormatter={formatLabel}
			onChange={(value: number) => setValue(value)}
		/>
	);
};

export const Step = () => {
	const [value, setValue] = React.useState(50);

	return (
		<div>
			<RangeSelector
				min={0}
				max={100}
				step={10}
				value={value}
				onChange={(value: number) => setValue(value)}
			/>
		</div>
	);
};

export const Disabled = () => (
	<RangeSelector disabled={true} value={7500} onChange={() => {}} />
);

export const WithoutLabel = () => {
	const [value, setValue] = React.useState(3000);

	return (
		<RangeSelector
			value={value}
			onChange={(value: number) => setValue(value)}
			showLabel={false}
		/>
	);
};

export const StartAndEndLabel = () => {
	const [value, setValue] = React.useState(750);
	return (
		<RangeSelector
			value={value}
			onChange={(value: number) => setValue(value)}
			startLabel="START: 0"
			endLabel="END: 10000"
		/>
	);
};

export const CustomTrackColor = () => {
	const [value, setValue] = React.useState(8000);
	return (
		<RangeSelector
			value={value}
			onChange={(value: number) => setValue(value)}
			trackFilledColor={COLORS.PICTON_BLUE}
		/>
	);
};
