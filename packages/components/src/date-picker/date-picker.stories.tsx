import * as React from "react";
import moment from "moment";
import { DatePicker } from "./index";

export default {
	title: "DatePicker",
	component: DatePicker
};

export const Default = () => {
	let [date, updateDate] = React.useState(moment());
	return (
		<div style={{ height: "250px" }}>
			<DatePicker date={date} onChange={updateDate} />
		</div>
	);
};

export const MinMax = () => {
	let [date, updateDate] = React.useState(moment());
	return (
		<div style={{ height: "250px" }}>
			<DatePicker
				date={date}
				onChange={updateDate}
				minDate={moment().subtract(1, "year")}
				maxDate={moment().add(1, "years")}
			/>
		</div>
	);
};

export const disabled = () => {
	return (
		<div style={{ height: "250px" }}>
			<DatePicker date={moment()} disabled={true} />
		</div>
	);
};

export const CustomHeaderStyle = () => {
	return (
		<div style={{ height: "250px" }}>
			<DatePicker
				date={moment()}
				headerStyles={{
					backgroundColor: "#475577",
					color: "#475577"
				}}
			/>
		</div>
	);
};
