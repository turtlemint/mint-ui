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
import OutlineSort from "../icons/OutlineSort";
import Settings from "../icons/Settings";
import Warning from "../icons/Warning";
import Sales from "../icons/Sales";
import { IDict } from "../__utils/type";
import Done from "../icons/Done";
import {
	Sort,
	SortDown,
	ArrowDropDown,
	ArrowDropUp,
	KeyboardArrowLeft
} from "../icons";
import ArrowBack from "../icons/ArrowBack";
import Bike from "../icons/Bike";
import Car from "../icons/Car";
import Health from "../icons/Health";
import Life from "../icons/Life";
import Truck from "../icons/Truck";
import MoreHoriz from "../icons/MoreHoriz";

const IconDict: IDict<any> = {
	"announcement": Announcement,
	"checkbox-outline": CheckboxOutline,
	"check-circle-outline": CheckboxCircleOutline,
	"close": Close,
	"error-outline": ErrorOutline,
	"info": Info,
	"keyboard-arrow-up": KeyboardArrowUp,
	"keyboard-arrow-down": KeyboardArrowDown,
	"keyboard-arrow-right": KeyboardArrowRight,
	"keyboard-arrow-left": KeyboardArrowLeft,
	"notification-important": NotificationImportant,
	"outline-done": OutlineDone,
	"outline-sort": OutlineSort,
	"settings": Settings,
	"warning": Warning,
	"done": Done,
	"sort": Sort,
	"sort-down": SortDown,
	"arrow-dropdown": ArrowDropDown,
	"arrow-dropup": ArrowDropUp,
	"arrow-back": ArrowBack,
	"bike": Bike,
	"car": Car,
	"health": Health,
	"life": Life,
	"truck": Truck,
	"sales": Sales,
	"more-horiz": MoreHoriz
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
