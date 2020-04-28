import * as React from "react";
import Collapse, { Panel, Header } from "./index";
import Icon from "../icon";
import COLORS from "../__utils/colors";
import Button from "../button";

export default {
	title: "Collapse",
	component: Collapse,
	subcomponents: { Panel, Header },
	parameters: {
		componentSubtitle: "Basic"
	}
};
export const Basic = () => {
	const PanelContent = ({ panelNo }: { panelNo: number }) => (
		<div>Panel content {panelNo}</div>
	);
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
					content: <PanelContent panelNo={1} />
				},
				{
					panelKey: 2,
					header: {
						text: "Panel Header 2"
					},
					content: <PanelContent panelNo={2} />
				},
				{
					panelKey: 3,
					header: {
						text: "Panel Header 3"
					},
					disabled: true,
					content: <PanelContent panelNo={3} />
				}
			]}
		/>
	);
};

export const Extra = () => {
	const [value, setValue] = React.useState(1);
	const [done, setDone] = React.useState<number[]>([]);
	const PanelContent = () => (
		<div>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Recusandae aspernatur accusantium impedit dolor maxime enim
				dignissimos, incidunt necessitatibus non aut.
			</p>
			<Button
				title="Continue"
				btnType="solid"
				btnStyle="primary"
				onClick={() => {
					if (!done.includes(value)) {
						done.push(value);
						setDone([...done]);
					}
					setValue(2);
				}}
			/>
		</div>
	);
	const PanelContent2 = () => (
		<div>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Recusandae aspernatur accusantium impedit dolor maxime enim
				dignissimos, incidunt necessitatibus non aut.
			</p>
			<Button
				title="Continue"
				btnType="solid"
				btnStyle="primary"
				onClick={() => {
					if (!done.includes(value)) {
						done.push(value);
						setDone([...done]);
					}
					setValue(3);
				}}
			/>
		</div>
	);
	const PanelContent3 = () => (
		<div>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Recusandae aspernatur accusantium impedit dolor maxime enim
				dignissimos, incidunt necessitatibus non aut.
			</p>
			<Button
				title="Continue"
				btnType="solid"
				btnStyle="primary"
				onClick={() => {
					done.push(value);
					setDone([...done]);
					alert("Alright! we are done here!");
				}}
			/>
		</div>
	);

	const renderExtra = (panelKey: number) => {
		if (done.includes(panelKey)) {
			return <Icon name="filled_done_circle" color={COLORS.PRIMARY} />;
		}
		return null;
	};
	return (
		<Collapse
			activeKey={value}
			onChange={(val: number) => {
				setValue(val);
			}}
			panels={[
				{
					panelKey: 1,
					content: <PanelContent />,
					header: {
						text: "Panel Header 1",
						extra: renderExtra(1)
					}
				},
				{
					panelKey: 2,
					content: <PanelContent2 />,
					header: {
						text: "Panel Header 2",
						extra: renderExtra(2)
					}
				},
				{
					panelKey: 3,
					content: <PanelContent3 />,
					header: {
						text: "Panel header 3"
					}
				}
			]}
		/>
	);
};
