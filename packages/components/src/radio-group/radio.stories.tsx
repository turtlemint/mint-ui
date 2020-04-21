import * as React from "react";
import RadioGroup from "./index";
import Row from "../grid/row";
import Col from "../grid/col";

export default {
	title: "RadioGroup",
	component: RadioGroup,
	parameters: {
		componentSubtitle: "solid"
	}
};

export const solid = () => {
	const items = [
		{
			value: "item-1",
			text: "Item 1"
		},
		{
			value: "item-2",
			text: "Item 2"
		}
	];
	return (
		<RadioGroup
			buttonStyle="solid"
			onChange={(val: any) => {
				console.log(val);
			}}
			radios={items}
		/>
	);
};
export const outlined = () => {
	const radios = [
		{
			value: "item-1",
			text: "Item 1"
		},
		{
			value: "item-2",
			text: "Item 2"
		}
	];
	return (
		<>
			<Row>
				<Col>
					<RadioGroup
						value="item-2"
						buttonStyle="outline"
						onChange={(val: any) => {
							console.log(val);
						}}
						radios={radios}
					/>
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col>
					<RadioGroup
						value="item-1"
						onChange={(val: any) => {
							console.log(val);
						}}
						radios={radios}
					/>
				</Col>
			</Row>
		</>
	);
};

export const size = () => {
	const radios = [
		{
			value: "item-1",
			text: "Item 1"
		},
		{
			value: "item-2",
			text: "Item 2"
		}
	];
	return (
		<>
			<Row>
				<Col>
					<RadioGroup
						size="large"
						value="item-4"
						onChange={(val: any) => {
							console.log(val);
						}}
						radios={radios}
					/>
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col>
					<RadioGroup
						size="default"
						value="item-1"
						onChange={(val: any) => {
							console.log(val);
						}}
						radios={radios}
					/>
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col>
					<RadioGroup
						size="small"
						value="item-1"
						onChange={(val: any) => {
							console.log(val);
						}}
						radios={radios}
					/>
				</Col>
			</Row>
		</>
	);
};

export const disabled = () => {
	const radios = [
		{
			value: "item-1",
			text: "Item 1"
		},
		{
			value: "item-2",
			text: "Item 2"
		}
	];
	return (
		<Row style={{ marginTop: "30px" }}>
			<Col>
				<RadioGroup
					size="default"
					value="item-1"
					onChange={(val: any) => {
						console.log(val);
					}}
					disabled={true}
					radios={radios}
				/>
			</Col>
		</Row>
	);
};

export const radio = () => {
	const radios = [
		{
			value: "item-1",
			text: "Item 1"
		},
		{
			value: "item-2",
			text: "Item 2"
		}
	];
	return (
		<Row>
			<Col>
				<RadioGroup
					buttonStyle="radio"
					size="default"
					value="item-1"
					layout="vertical"
					onChange={(val: any) => {
						console.log(val);
					}}
					radios={radios}
				/>
			</Col>
		</Row>
	);
};
