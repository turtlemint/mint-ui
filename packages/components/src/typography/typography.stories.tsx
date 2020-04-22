import * as React from "react";
import { Title, Text, Striked } from ".";

export default {
	title: "Typography",
	component: Title,
	parameters: {
		componentSubtitle: "Headings"
	}
};

export const Default = () => (
	<>
		<Title text="Heading 1" level={1} />
		<Title text="Heading 2" level={2} />
		<Title text="Heading 3" level={3} />
		<Title text="Heading 4" level={4} />
		<Title text="Heading 5" level={5} />
		<Title text="Heading 6" level={6} />
	</>
);
export const textStyles = () => (
	<>
		<Text
			textStyle="uppercase"
			textSpace={0.8}
			text="UPPERCASE Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
		/>
		<Text
			textStyle="lowercase"
			text="LOWERCASE porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
		/>
		<Text
			textStyle="capitalize"
			text="Capitalize Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
		/>
	</>
);
export const fontWeights = () => (
	<>
		<Text
			text="LIGHT Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
			size={20}
			weight="light"
		/>
		<Text
			text="MEDIUM Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
			size={18}
			weight="medium"
		/>
		<Text
			text="BOLD Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
			size={16}
			weight="bold"
		/>
	</>
);

export const textTypes = () => (
	<>
		<Text
			textType="warning"
			text="Warning Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
			weight="light"
		/>
		<Text
			textType="success"
			text="Success Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
			weight="light"
		/>
		<Text
			textType="info"
			text="Info Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"
			weight="medium"
		/>
		<Text
			textType="danger"
			text="Danger Neque porro quisquam est qui dolorem ipsum quia dolor sit amet"
			weight="bold"
		/>
		<Striked text="Striked Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur" />
		<Text
			ellipsis
			text="Ellipses Text  Neque porro quisquam est qui dolorem ipsum quia dolor sit est qui dolorem ipsum quia dolor sit amet est qui dolorem ipsum quia dolor sit amet"
			weight="light"
		/>
	</>
);
