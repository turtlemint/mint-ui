import * as React from "react";
import moment from "moment";
import { DatePicker } from "./index";

export default {
	title: "DatePicker",
	component: DatePicker
};

export const TestDatePicker = () => {
	return (
		<div style={{ height: "250px" }}>
			<DatePicker
				date={moment()}
				onChange={date => {
					date;
				}}
				maxDate={moment().add(5, "days")}
			/>
		</div>
	);
};
