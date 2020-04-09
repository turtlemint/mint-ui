import * as React from "react";
import moment from "moment";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import styled from "styled-components";

// import COLORS from "../__utils/colors";
// import { GlobalStyles } from "../app";

export interface IDatePicker {
	date: moment.Moment;
	minDate: moment.Moment;
	maxDate: moment.Moment;
	// onChange: (date: moment.Moment) => void;
}

interface IRenderHeaderProps {
	date?: Date;
	changeYear: (year: number) => void;
	changeMonth: (month: number) => void;
	decreaseMonth: () => void;
	increaseMonth: () => void;
	prevMonthButtonDisabled?: boolean;
	nextMonthButtonDisabled?: boolean;
	decreaseYear?: () => void;
	increaseYear?: () => void;
	prevYearButtonDisabled?: boolean;
	nextYearButtonDisabled?: boolean;
}

interface IHeaderProps extends IRenderHeaderProps {
	date?: Date;
	minDate: moment.Moment;
	maxDate: moment.Moment;
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

const Header = (props: IHeaderProps) => {
	let { minDate, maxDate, ...rest } = props;

	const date = moment(props.date);
	const years = [];

	// Populating years between min-max dates
	for (let y = minDate.year(); y <= maxDate.year(); y++) {
		years.push(y);
	}

	// List of valid Months within min-max date range
	const getMonths = (): Array<{ month: string; value: number }> => {
		// All months by default
		let months = moment.months().map((month: string, index: number) => ({
			month,
			value: index + 1
		}));
		let minMonthNumber = 1;
		let maxMonthNumber = 12;

		if (minDate.isBefore(date, "year") && date.isBefore(maxDate, "year")) {
			return months;
		}

		// All dates of same year
		if (date.isSame(minDate, "year") && date.isSame(maxDate, "year")) {
			minMonthNumber = minDate.month();
			maxMonthNumber = maxDate.month();
		}

		// Less than Max year and equal to Min year
		if (minDate.isSame(date, "year") && date.isBefore(maxDate, "year")) {
			minMonthNumber = minDate.month();
			maxMonthNumber = date.endOf("year").month();
		}

		// Greater then Min year and equal to Max year
		if (minDate.isBefore(date, "year") && date.isSame(maxDate, "year")) {
			minMonthNumber = date.startOf("year").month();
			maxMonthNumber = maxDate.month();
		}

		return months.filter(month => {
			return (
				minMonthNumber <= month.value - 1 &&
				month.value - 1 <= maxMonthNumber
			);
		});
	};

	// Callbacks in case we need to add something more in future
	const changeYear = (year: number) => {
		rest.changeYear(year);
	};

	const changeMonth = (month: number) => {
		rest.changeMonth(month);
	};

	return (
		<div
			style={{
				margin: 10,
				display: "flex",
				justifyContent: "center"
			}}
		>
			<button
				onClick={rest.decreaseMonth}
				disabled={rest.prevMonthButtonDisabled}
			>
				{"<"}
			</button>
			<select
				value={date.year()}
				onChange={({ target: { value } }: { target: { value: any } }) =>
					changeYear(value)
				}
			>
				{years.map(option => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>

			<select
				value={date.month()}
				onChange={({ target: { value } }: { target: { value: any } }) =>
					changeMonth(value)
				}
			>
				{getMonths().map(option => (
					<option key={option.value} value={option.value}>
						{option.month}
					</option>
				))}
			</select>

			<button
				onClick={rest.increaseMonth}
				disabled={rest.nextMonthButtonDisabled}
			>
				{">"}
			</button>
		</div>
	);
};

export default DatePicker;
