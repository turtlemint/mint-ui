import * as React from "react";
import Announcement from "../icons/Announcement";
import CheckboxOutline from "../icons/CheckBoxOutline";
import CheckboxCircleOutline from "../icons/CheckCircleOutline";
import Close from "../icons/Close";
import ErrorOutline from "../icons/ErrorOutline";
import Info from "../icons/Info";
import KeyboardArrowDown from "../icons/KeyboardArrowDown";
import KeyboardArrowRight from "../icons/KeyboardArrowRight";
import NotificationImportant from "../icons/NotificationImportant";
import OutlineDone from "../icons/OutlineDone";
import OutlineSort from "../icons/OutlineSort";
import Settings from "../icons/Settings";
import Warning from "../icons/Warning";
import { IDict } from "../__utils/type";

const IconDict: IDict<any> = {
	announcement: Announcement,
	"checkbox-outline": CheckboxOutline,
	"check-circle-outline": CheckboxCircleOutline,
	close: Close,
	"error-outline": ErrorOutline,
	info: Info,
	"keyboard-arrow-down": KeyboardArrowDown,
	"keyboard-arrow-right": KeyboardArrowRight,
	"notification-important": NotificationImportant,
	"outline-done": OutlineDone,
	"outline-sort": OutlineSort,
	settings: Settings,
	warning: Warning
};

interface IconProps {
	name: string;
	color?: string;
	style?: React.CSSProperties;
	size?: number;
	viewBox?: string;
}

export const Icon = ({
	name,
	color,
	size = 18,
	viewBox = "0 0 24 24",
	style
}: IconProps) => {
	const SVGIcon = IconDict[name] ? IconDict[name] : null;
	return SVGIcon ? (
		<SVGIcon
			viewBox={viewBox}
			fill={color}
			width={size}
			height={size}
			style={style}
		/>
	) : null;
};

export default Icon;