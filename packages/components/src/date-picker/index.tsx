import * as React from "react";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import { IRenderHeaderProps } from "./interfaces";
import Header from "./header";
import styled from "styled-components";
import { GlobalStyles } from "../app";
import Input from "../input";
import Icon from "../icon";

import "react-datepicker/dist/react-datepicker.css";
import "./css/datepicker.css";

export interface DatePicker {
	date: moment.Moment;
	minDate?: moment.Moment;
	maxDate?: moment.Moment;
	onChange: (date: moment.Moment) => void;
}

const ExampleCustomInput = React.forwardRef(
	({ value, onClick }: any, ref: any) => {
		return (
			<div ref={ref}>
				<Input
					type="text"
					placeholder="Enter text"
					value={value}
					onClick={onClick}
				/>
				<CalendarIconWrapper>
					<Icon name="calendar" {...CalendarIconProps} />
				</CalendarIconWrapper>
			</div>
		);
	}
);

export const DatePicker = ({
	date = moment(),
	minDate = moment().subtract(1, "years"),
	maxDate = moment().add(1, "years"),
	onChange
}: DatePicker) => {
	const handleDateChange = (date: any) => {
		onChange(moment(date));
	};

	return (
		<DatePickerWrapper>
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
				minDate={minDate.toDate()}
				maxDate={maxDate.toDate()}
				customInput={<ExampleCustomInput />}
			/>
		</DatePickerWrapper>
	);
};

const DatePickerWrapper = styled.div`
	${GlobalStyles},
`;

const CalendarIconProps = {
	style: {
		msTransform: "rotate(360deg)",
		WebkitTransform: "rotate(360deg)",
		transform: "rotate(360deg)"
	},
	size: 17
};

const CalendarIconWrapper = styled.div`
	cursor: pointer;
	position: absolute;
	right: 10px;
	top: 14px;
	background: #fff;
	border: none;
`;

export default DatePicker;
