import * as React from "react";
import Collapse from "./index";
import Icon from "../icon";
import COLORS from "../__utils/colors";

const { Panel } = Collapse;

export default {
	title: "Collapse",
	component: Collapse,
	subcomponents: { Panel },
	parameters: {
		componentSubtitle: "Basic"
	}
};
export const Basic = () => {
	const PanelContent = () => <div>Panel content</div>;
	const [value, setValue] = React.useState(2);
	return (
		<Collapse
			activeKey={value}
			onChange={(val: number) => setValue(val)}
			panels={[
				{
					panelKey: 1,
					header: {
						text: "Panel Header 1"
					},
					content: <PanelContent />
				},
				{
					panelKey: 2,
					header: {
						text: "Panel Header 2"
					},
					content: <PanelContent />
				},
				{
					panelKey: 3,
					header: {
						text: "Panel Header 3"
					},
					disabled: true,
					content: PanelContent
				}
			]}
		/>
	);
};

export const Extra = () => {
	const [value, setValue] = React.useState(1);
	const PanelContent = () => <div>Panel content</div>;
	return (
		<Collapse
			activeKey={value}
			onChange={(val: number) => setValue(val)}
			panels={[
				{
					panelKey: 1,
					content: <PanelContent />,
					header: {
						text: "Panel Header 1",
						extra: <Icon name="settings" color={COLORS.GREY1} />
					}
				},
				{
					panelKey: 2,
					content: <PanelContent />,
					header: {
						text: "Panel Header 2",
						extra: <Icon name="settings" color={COLORS.GREY1} />
					}
				},
				{
					panelKey: 3,
					content: <PanelContent />,
					header: {
						text: "Panel header 3"
					}
				}
			]}
			expandIconPosition="right"
		/>
	);
};
