import * as React from "react";
import { DatePicker } from "./index";

export default {
	title: "DatePicker",
	component: DatePicker
};

export const TestDatePicker = () => {
	return (
		<div style={{ height: "250px" }}>
			<DatePicker />
		</div>
	);
};
