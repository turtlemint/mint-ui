import * as React from "react";
import RadioGroup from "./index";
import Row from "../grid/row";
import Col from "../grid/col";

export default {
	title: "RadioGroup",
	component: RadioGroup,
	parameters: {
		componentSubtitle: "outlined"
	}
};

export const outlined = () => (
	<>
		<Row>
			<Col>
				<RadioGroup
					value="item-4"
					onChange={(val: any) => {
						console.log(val);
					}}
				>
					<RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
					<RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
					<RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
					<RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
				</RadioGroup>
			</Col>
		</Row>
		<Row style={{ marginTop: "30px" }}>
			<Col>
				<RadioGroup
					value="item-1"
					onChange={(val: any) => {
						console.log(val);
					}}
				>
					<RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
					<RadioGroup.Button disabled={true} value="item-2">
						Item 2
					</RadioGroup.Button>
					<RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
					<RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
				</RadioGroup>
			</Col>
		</Row>
	</>
);

export const solid = () => (
	<>
		<Row>
			<Col>
				<RadioGroup
					buttonStyle="solid"
					value="item-4"
					onChange={(val: any) => {
						console.log(val);
					}}
				>
					<RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
					<RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
					<RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
					<RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
				</RadioGroup>
			</Col>
		</Row>
		<Row style={{ marginTop: "30px" }}>
			<Col>
				<RadioGroup
					buttonStyle="solid"
					value="item-4"
					onChange={(val: any) => {
						console.log(val);
					}}
				>
					<RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
					<RadioGroup.Button disabled value="item-2">
						Item 2
					</RadioGroup.Button>
					<RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
					<RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
				</RadioGroup>
			</Col>
		</Row>
	</>
);

export const size = () => (
	<>
		<Row>
			<Col>
				<RadioGroup
					size="large"
					value="item-4"
					onChange={(val: any) => {
						console.log(val);
					}}
				>
					<RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
					<RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
					<RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
					<RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
				</RadioGroup>
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
				>
					<RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
					<RadioGroup.Button disabled={true} value="item-2">
						Item 2
					</RadioGroup.Button>
					<RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
					<RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
				</RadioGroup>
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
				>
					<RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
					<RadioGroup.Button disabled={true} value="item-2">
						Item 2
					</RadioGroup.Button>
					<RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
					<RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
				</RadioGroup>
			</Col>
		</Row>
	</>
);

export const disabled = () => (
	<Row style={{ marginTop: "30px" }}>
		<Col>
			<RadioGroup
				size="default"
				value="item-1"
				onChange={(val: any) => {
					console.log(val);
				}}
				disabled={true}
			>
				<RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
				<RadioGroup.Button disabled={true} value="item-2">
					Item 2
				</RadioGroup.Button>
				<RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
				<RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
			</RadioGroup>
		</Col>
	</Row>
);
