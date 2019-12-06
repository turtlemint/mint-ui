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
import { IDict } from "../__utils/Type";

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
	width?: number;
	height?: number;
}

export const Icon = ({
	name,
	color,
	width = 18,
	height = 18,
	style
}: IconProps) => {
	const SVGIcon = IconDict[name] ? IconDict[name] : null;
	return SVGIcon ? (
		<SVGIcon
			viewBox={`0 0 24 24`}
			fill={color}
			width={width}
			height={height}
			style={style}
		/>
	) : null;
};

export default Icon;
