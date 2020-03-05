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
import AddCircleOutline from "../icons/AddCircleOutline";
import Cancel from "../icons/Cancel";
import Lock from "../icons/Lock";
import MintPro from "../icons/MintPro";
import Rating1 from "../icons/Rating1";
import Rating2 from "../icons/Rating2";
import Rating3 from "../icons/Rating3";
import Rating4 from "../icons/Rating4";
import Rating5 from "../icons/Rating5";
import RatingFilled1 from "../icons/RatingFilled1";
import RatingFilled2 from "../icons/RatingFilled2";
import RatingFilled3 from "../icons/RatingFilled3";
import RatingFilled4 from "../icons/RatingFilled4";
import RatingFilled5 from "../icons/RatingFilled5";
import Send from "../icons/Send";
import SentimentDissatisfied from "../icons/SentimentDissatisfied";
import SentimentSatisfied from "../icons/SentimentSatisfied";
import Call from "../icons/Call";
import Email from "../icons/Email";
import Search from "../icons/Search";
import Report from "../icons/Report";
import Attachment from "../icons/Attachment";
import CloudDownload from "../icons/CloudDownload";

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
	refresh: Refresh,
	add_circle_outline: AddCircleOutline,
	cancel: Cancel,
	lock: Lock,
	mint_pro: MintPro,
	rating_1: Rating1,
	rating_2: Rating2,
	rating_3: Rating3,
	rating_4: Rating4,
	rating_5: Rating5,
	rating_filled_1: RatingFilled1,
	rating_filled_2: RatingFilled2,
	rating_filled_3: RatingFilled3,
	rating_filled_4: RatingFilled4,
	rating_filled_5: RatingFilled5,
	send: Send,
	sentiment_dissatisfied: SentimentDissatisfied,
	sentiment_satisfied: SentimentSatisfied,
	call: Call,
	email: Email,
	search: Search,
	report: Report,
	attachment: Attachment,
	cloud_download: CloudDownload
};

interface IconProps {
	/** name of the prop */
	name: string;
	/** color of the prop */
	color?: string;
	/** style of the prop */
	style?: React.CSSProperties;
	/** size of the prop */
	size?: number;
}

export const Icon = ({ name, color, size = 24, style }: IconProps) => {
	const SVGIcon = IconDict[name] ? IconDict[name] : null;
	return SVGIcon ? (
		<SVGIcon fill={color} width={size} height={size} style={style} />
	) : null;
};

export default Icon;
