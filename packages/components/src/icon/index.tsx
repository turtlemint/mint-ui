import * as React from "react";
import Announcement from "../icons/Announcement";
import CheckboxOutline from "../icons/CheckBoxOutline";
import CheckboxCircleOutline from "../icons/CheckCircleOutline";
import Close from "../icons/Close";
import ErrorOutline from "../icons/ErrorOutline";
import Info from "../icons/Info";
import KeyboardArrowUp from "../icons/KeyboardArrowUp";
import KeyboardArrowDown from "../icons/KeyboardArrowDown";
import KeyboardArrowRight from "../icons/KeyboardArrowRight";
import NotificationImportant from "../icons/NotificationImportant";
import OutlineDone from "../icons/OutlineDone";
import Settings from "../icons/Settings";
import Warning from "../icons/Warning";
import Sales from "../icons/Sales";
import { IDict } from "../__utils/type";
import FilledDoneCircle from "../icons/FilledDoneCircle";
import {
	Sort,
	ArrowDropDown,
	ArrowDropUp,
	KeyboardArrowLeft,
	FastForward
} from "../icons";
import ArrowBack from "../icons/ArrowBack";
import Bike from "../icons/Bike";
import Car from "../icons/Car";
import Health from "../icons/Health";
import Life from "../icons/Life";
import Truck from "../icons/Truck";
import MoreHoriz from "../icons/MoreHoriz";
import FastRewind from "../icons/FastRewind";
import Refresh from "../icons/Refresh";

const IconDict: IDict<any> = {
	announcement: Announcement,
	checkbox_outline: CheckboxOutline,
	check_circle_outline: CheckboxCircleOutline,
	close: Close,
	error_outline: ErrorOutline,
	info: Info,
	keyboard_arrow_up: KeyboardArrowUp,
	keyboard_arrow_down: KeyboardArrowDown,
	keyboard_arrow_right: KeyboardArrowRight,
	keyboard_arrow_left: KeyboardArrowLeft,
	notification_important: NotificationImportant,
	outline_done: OutlineDone,
	settings: Settings,
	warning: Warning,
	filled_done_circle: FilledDoneCircle,
	sort: Sort,
	arrow_dropdown: ArrowDropDown,
	arrow_dropup: ArrowDropUp,
	arrow_back: ArrowBack,
	bike: Bike,
	car: Car,
	health: Health,
	life: Life,
	truck: Truck,
	sales: Sales,
	more_horiz: MoreHoriz,
	fast_forward: FastForward,
	fast_rewind: FastRewind,
	refresh: Refresh
};

interface IconProps {
	name: string;
	color?: string;
	style?: React.CSSProperties;
	size?: number;
}

export const Icon = ({ name, color, size = 24, style }: IconProps) => {
	const SVGIcon = IconDict[name] ? IconDict[name] : null;
	return SVGIcon ? (
		<SVGIcon
			viewBox="0 0 24 24"
			fill={color}
			width={size}
			height={size}
			style={style}
		/>
	) : null;
};

export default Icon;
