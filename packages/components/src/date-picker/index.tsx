import * as React from "react";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IRenderHeaderProps } from "./interfaces";
import Header from "./header";
// import styled from "styled-components";
// import COLORS from "../__utils/colors";
// import { GlobalStyles } from "../app";

export interface IDatePicker {
	date: moment.Moment;
	minDate: moment.Moment;
	maxDate: moment.Moment;
	// onChange: (date: moment.Moment) => void;
}

export const DatePicker = ({
	date = moment(),
	minDate = moment().subtract(10, "years"),
	maxDate = moment().add(10, "years")
}: // onChange
IDatePicker) => {
	// const [startDate, setStartDate] = React.useState(new Date());

	const handleDateChange = (date: any) => {
		console.log(date);
	};

	return (
		<ReactDatePicker
			renderCustomHeader={(props: IRenderHeaderProps) => (
				<Header
					date={props.date}
					changeYear={props.changeYear}
					changeMonth={props.changeMonth}
					decreaseMonth={props.decreaseMonth}
					increaseMonth={props.increaseMonth}
					prevMonthButtonDisabled={props.prevMonthButtonDisabled}
					nextMonthButtonDisabled={props.nextMonthButtonDisabled}
					minDate={minDate}
					maxDate={maxDate}
				/>
			)}
			selected={date.toDate()}
			onChange={date => handleDateChange(date)}
		/>
	);
};

export default DatePicker;
