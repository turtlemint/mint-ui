// import * as React from "react";
import moment from "moment";

export interface IRenderHeaderProps {
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

export interface IHeaderProps extends IRenderHeaderProps {
	date?: Date;
	minDate: moment.Moment;
	maxDate: moment.Moment;
}

export interface IMonthProps {
	date: moment.Moment;
	minDate: moment.Moment;
	maxDate: moment.Moment;
}

export interface IMonth {
	month: string;
	value: number;
}
