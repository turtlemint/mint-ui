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
	disabled?: boolean;
	onChange?: (date: moment.Moment) => void;
	headerStyles?: React.CSSProperties;
	navigationStyles?: React.CSSProperties;
}

const CalendarInput = React.forwardRef(
	({ value, onClick, disable }: any, ref: any) => {
		return (
			<div ref={ref}>
				<Input
					type="text"
					placeholder="Enter text"
					value={value}
					onClick={onClick}
					disabled={disable}
					size="small"
					block={true}
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
	minDate = moment().subtract(10, "years"),
	maxDate = moment().add(10, "years"),
	onChange,
	disabled,
	headerStyles,
	navigationStyles
}: DatePicker) => {
	const handleDateChange = (date: any) => {
		onChange && onChange(moment(date));
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
						headerStyles={headerStyles}
						navigationStyles={navigationStyles}
					/>
				)}
				selected={date.toDate()}
				onChange={date => handleDateChange(date)}
				minDate={minDate.toDate()}
				maxDate={maxDate.toDate()}
				customInput={<CalendarInput disable={disabled} />}
			/>
		</DatePickerWrapper>
	);
};

DatePicker.defaultProps = {
	date: moment(),
	minDate: moment().subtract(10, "years"),
	maxDate: moment().add(10, "years"),
	disabled: false
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
	position: absolute;
	right: 10px;
	top: 10px;
	background: none;
	border: none;
`;

export default DatePicker;
