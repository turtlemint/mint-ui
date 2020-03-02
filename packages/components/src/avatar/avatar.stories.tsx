import * as React from "react";
import Avatar from "./index";
import Warning from "../icons/Warning";
import COLORS from "../__utils/colors";

export default {
	title: "Avatar",
	subtitle: "Size",
	component: Avatar
};
export const Size = () => (
	<>
		<Avatar size={128} icon="sort" />
		<Avatar size={64} icon="sort" />
		<Avatar size={40} icon="sort" />
		<Avatar size={24} icon="sort" />
	</>
);
export const Shape = () => (
	<>
		<Avatar shape="circle" size={48} icon="sort" />
		<Avatar shape="square" size={48} icon="sort" />
	</>
);

export const IconColors = () => (
	<>
		<Avatar
			size={48}
			icon="close"
			color="lime"
			style={{ background: "black" }}
		/>
		<Avatar
			size={48}
			icon="notification_important"
			color="lime"
			style={{ background: "black" }}
		/>
		<Avatar
			size={48}
			icon="error_outline"
			color="lime"
			style={{ background: "black" }}
		/>
		<Avatar
			size={48}
			icon="outline_done"
			color="lime"
			style={{ background: "black" }}
		/>
		<Avatar
			size={48}
			icon="sort"
			color="lime"
			style={{ background: "black" }}
		/>
	</>
);

export const IconAsComponent = () => (
	<>
		<Avatar
			shape="circle"
			size={48}
			icon={<Warning width={24} height={24} fill={COLORS.GREY1} />}
		/>
		<Avatar
			size={48}
			style={{ backgroundColor: COLORS.PICTON_BLUE }}
			icon={<Warning width={24} height={24} fill={COLORS.WHITE} />}
		/>
		<Avatar
			size={48}
			icon="announcement"
			color="lime"
			style={{ background: "black" }}
		/>
		<Avatar
			size={48}
			icon="info"
			color="lime"
			style={{ background: "black" }}
		/>
		<Avatar
			size={48}
			icon="keyboard_arrow_down"
			color="lime"
			style={{ background: "black" }}
		/>
		<Avatar
			size={48}
			icon="keyboard_arrow_up"
			color="lime"
			style={{ background: "black" }}
		/>
		<Avatar
			size={48}
			icon="settings"
			color="lime"
			style={{ background: "black" }}
		/>
		<Avatar
			size={48}
			icon="warning"
			color="lime"
			style={{ background: "black" }}
		/>
	</>
);
