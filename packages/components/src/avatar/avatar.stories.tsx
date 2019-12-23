import * as React from "react";
import { storiesOf } from "@storybook/react";
import Avatar from "./index";
import Warning from "../icons/Warning";
import COLORS from "../__utils/colors";

const stories = storiesOf("Avatar", module);

stories.add(
	"size",
	() => (
		<>
			<Avatar size={128} icon="outline-sort" />
			<Avatar size={64} icon="outline-sort" />
			<Avatar size={40} icon="outline-sort" />
			<Avatar size={24} icon="outline-sort" />
		</>
	),
	{
		info: {
			propTables: [Avatar]
		}
	}
);
stories.add(
	"shape",
	() => (
		<>
			<Avatar shape="circle" size={48} icon="outline-sort" />
			<Avatar shape="square" size={48} icon="outline-sort" />
		</>
	),
	{
		info: {
			propTables: [Avatar]
		}
	}
);

stories.add(
	"custom avatars",
	() => (
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
		</>
	),
	{
		info: {
			propTables: [Avatar]
		}
	}
);
