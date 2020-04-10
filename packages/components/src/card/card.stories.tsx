import * as React from "react";
import Card from "./index";
import styled from "styled-components";
import COLORS from "../__utils/colors";

const GreyBackground = styled.div`
	background: ${COLORS.BACKGROUND_GREY};
	padding: 20px;
`;
const Para = styled.p`
	margin: 0;
`;
export default {
	title: "Card",
	component: Card,
	parameters: {
		componentSubtitle: "Basic"
	}
};

/**
 * By default the `Card` will take full width of the grid column put in. To control the width use style prop.
 */
export const Basic = () => (
	<Card style={{ width: 300 }}>
		<Para>Card content</Para>
		<Para>Card content</Para>
		<Para>Card content</Para>
	</Card>
);

export const CustomActions = () => (
	<Card
		title="Custom Actions card"
		extra={<a href="#">More</a>}
		style={{ width: 300 }}
	>
		<Para>Card content</Para>
		<Para>Card content</Para>
		<Para>Card content</Para>
	</Card>
);

export const Size = () => (
	<>
		<Card title="Default size card" style={{ width: 300 }}>
			<Para>Card content</Para>
			<Para>Card content</Para>
			<Para>Card content</Para>
		</Card>
		<div style={{ marginTop: "20px" }}></div>
		<Card size="small" title="Small size card" style={{ width: 300 }}>
			<Para>Card content</Para>
			<Para>Card content</Para>
			<Para>Card content</Para>
		</Card>
	</>
);

export const BoxShadow = () => (
	<Card
		size="small"
		boxShadow={true}
		title="Hoverable Card"
		style={{ width: 300 }}
	>
		<Para>Card content</Para>
		<Para>Card content</Para>
		<Para>Card content</Para>
	</Card>
);

export const BorderlessCard = () => (
	<GreyBackground>
		<Card
			size="small"
			bordered={false}
			title="Borderless Card"
			style={{ width: 300 }}
		>
			<Para>Card content</Para>
			<Para>Card content</Para>
			<Para>Card content</Para>
		</Card>
	</GreyBackground>
);

export const HeaderBackground = () => (
	<Card
		title="Card header background"
		headerBackground={COLORS.BACKGROUND_GREY}
		style={{ width: 300 }}
	>
		<Para>Card content</Para>
		<Para>Card content</Para>
		<Para>Card content</Para>
	</Card>
);
