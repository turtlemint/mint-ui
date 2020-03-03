import * as React from "react";
import Collapse, { Panel } from "./index";
import Icon from "../icon";
import COLORS from "../__utils/colors";

export default {
	title: "Collapse",
	component: Collapse,
	parameters: {
		componentSubtitle: "Basic"
	}
};
export const Basic = () => (
	<Collapse
		activeKey={2}
		onChange={(key: string | number) => {
			console.log("key", key);
		}}
	>
		<Panel panelKey={1} header="Panel Header 1">
			Some content
		</Panel>
		<Panel panelKey={2} header="Panel Header 2">
			Some content
		</Panel>
		<Panel panelKey={3} header="Panel Header 3" disabled>
			Some content
		</Panel>
	</Collapse>
);

export const Accordion = () => (
	<Collapse
		accordion={true}
		activeKey={2}
		onChange={(key: string | number) => {
			console.log(key);
		}}
	>
		<Panel panelKey={1} header="Panel Header 1">
			Some content
		</Panel>
		<Panel panelKey={2} header="Panel Header 2">
			Some content
		</Panel>
		<Panel panelKey={3} header="Panel Header 3" disabled>
			Some content
		</Panel>
	</Collapse>
);

export const CustomPanel = () => (
	<Collapse
		accordion={true}
		expandIconPosition="right"
		activeKey={2}
		onChange={(key: string | number) => {
			console.log(key);
		}}
	>
		<Panel
			panelKey={1}
			header="Panel Header 1"
			extra={<Icon name="settings" color={COLORS.GREY1} />}
		>
			Some content
		</Panel>
		<Panel
			panelKey={2}
			header="Panel Header 2"
			extra={<Icon name="settings" color={COLORS.GREY1} />}
		>
			Some content
		</Panel>
		<Panel panelKey={3} header="Panel Header 3" disabled>
			Some content
		</Panel>
	</Collapse>
);
