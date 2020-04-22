import React from "react";
import { render } from "@testing-library/react";
import Collapse from "./index";

const Component = () => {
	const [value, setValue] = React.useState(1);
	const PanelContent = () => <div>Panel content</div>;
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
test("collapse renders correctly", () => {
	const { asFragment } = render(<Component />);
	expect(asFragment()).toMatchSnapshot();
});
