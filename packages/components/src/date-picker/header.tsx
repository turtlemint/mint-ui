import * as React from "react";
import moment from "moment";

import { IHeaderProps, IMonth, IMonthProps } from "./interfaces";

// List of valid Months within min-max date range
const getMonths = ({ date, minDate, maxDate }: IMonthProps): Array<IMonth> => {
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

export const Header = (props: IHeaderProps): JSX.Element => {
	let { minDate, maxDate, ...rest } = props;

	const date = moment(props.date);
	const years = [];

	// Populating years between min-max dates
	for (let y = minDate.year(); y <= maxDate.year(); y++) {
		years.push(y);
	}

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
				{getMonths({ date, minDate, maxDate }).map(option => (
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

export default Header;
