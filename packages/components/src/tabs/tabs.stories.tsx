import * as React from "react";
import Tabs from "./index";
import Row from "../grid/row";
import Col from "../grid/col";

export default {
	title: "Tabs",
	component: Tabs,
	parameters: {
		componentSubtitle: "basic"
	}
};

export const basic = () => {
	const { TabPane } = Tabs;
	const handleChange = (key: string) => {
		console.log(key);
	};
	return (
		<Tabs defaultActiveKey="a" onChange={handleChange}>
			<TabPane tabKey="a" tab="Tab A">
				Content of Tab A
			</TabPane>
			<TabPane disabled={true} tabKey="b" tab="Tab B">
				Content of Tab B
			</TabPane>
			<TabPane tabKey="c" tab="Tab C">
				Content of Tab C
			</TabPane>
		</Tabs>
	);
};

export const tabSize = () => {
	const { TabPane } = Tabs;
	const handleChange = (key: string) => {
		console.log(key);
	};
	return (
		<Row>
			<Col>
				[Small size]
				<Tabs defaultActiveKey="a" size="small" onChange={handleChange}>
					<TabPane tabKey="a" tab="Tab A">
						Content of Tab A
					</TabPane>
					<TabPane tabKey="b" tab="Tab B">
						Content of Tab B
					</TabPane>
					<TabPane tabKey="c" tab="Tab C">
						Content of Tab C
					</TabPane>
				</Tabs>
			</Col>
			<Col style={{ marginTop: "80px" }}>
				[Default size]
				<Tabs
					defaultActiveKey="a"
					size="default"
					onChange={handleChange}
				>
					<TabPane tabKey="a" tab="Tab A">
						Content of Tab A
					</TabPane>
					<TabPane tabKey="b" tab="Tab B">
						Content of Tab B
					</TabPane>
					<TabPane tabKey="c" tab="Tab C">
						Content of Tab C
					</TabPane>
				</Tabs>
			</Col>
			<Col style={{ marginTop: "80px" }}>
				[Large size]
				<Tabs defaultActiveKey="a" size="large" onChange={handleChange}>
					<TabPane tabKey="a" tab="Tab A">
						Content of Tab A
					</TabPane>
					<TabPane tabKey="b" tab="Tab B">
						Content of Tab B
					</TabPane>
					<TabPane tabKey="c" tab="Tab C">
						Content of Tab C
					</TabPane>
				</Tabs>
			</Col>
		</Row>
	);
};
