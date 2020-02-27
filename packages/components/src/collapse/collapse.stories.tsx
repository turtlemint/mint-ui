import * as React from "react";
import { storiesOf } from "@storybook/react";
import Collapse, { Panel } from "./index";
import Icon from "../icon";

storiesOf("Collapse", module)
	.add("simple collapse", () => (
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
	))
	.add("accordion", () => (
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
	))
	.add("custom panel", () => (
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
				extra={<Icon name="settings" />}
			>
				Some content
			</Panel>
			<Panel
				panelKey={2}
				header="Panel Header 2"
				extra={<Icon name="settings" />}
			>
				Some content
			</Panel>
			<Panel panelKey={3} header="Panel Header 3" disabled>
				Some content
			</Panel>
		</Collapse>
	));
