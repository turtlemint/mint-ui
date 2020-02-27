import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "./index";
import Row from "../grid/row";
import Col from "../grid/col";
import makeTable from "../table/prop-table";

const ButtonProps = [
	"btnType",
	"btnStyle",
	"disabled",
	"size",
	"title",
	"loading",
	"icon",
	"block"
];

const TableComponent = makeTable(ButtonProps);

storiesOf("Buttons", module)
	.addParameters({
		info: {
			TableComponent,
			propTables: [Button]
		}
	})
	.add("outlined", () => (
		<>
			<Row>
				<Col sm={3} md={3} lg={3}>
					<Button title="Default outlined" size="large" block />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button title="Disabled outlined" disabled size="large" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Primary outlined"
						btnStyle="primary"
						size="large"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Danger outlined"
						btnStyle="danger"
						size="large"
					/>
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button title="Default outlined" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button title="Disabled outlined" disabled></Button>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnStyle="primary" title="Primary outlined" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnStyle="danger" title="Danger outlined" />
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button size="small" title="Default outlined" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button disabled size="small" title="Disabled outlined" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnStyle="primary"
						size="small"
						title="Primary outlined"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnStyle="danger"
						size="small"
						title="Danger outlined"
					/>
				</Col>
			</Row>
		</>
	))
	.add("solid", () => (
		<>
			<Row>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnType="solid"
						size="large"
						title="Default solid"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnType="solid"
						disabled
						size="large"
						title="Disabled solid"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnType="solid"
						btnStyle="primary"
						size="large"
						title="Primary solid"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnType="solid"
						btnStyle="danger"
						size="large"
						title="Danger solid"
					/>
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button btnType="solid" title="Default solid" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnType="solid" disabled title="Disabled solid" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnType="solid"
						btnStyle="primary"
						title="Primary solid"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnType="solid"
						btnStyle="danger"
						title="Danger solid"
					/>
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnType="solid"
						size="small"
						title="Default solid"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnType="solid"
						disabled
						size="small"
						title="Disabled solid"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnType="solid"
						btnStyle="primary"
						size="small"
						title="Primary solid"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						btnType="solid"
						btnStyle="danger"
						size="small"
						title="Danger solid"
					/>
				</Col>
			</Row>
		</>
	))
	.add("link", () => (
		<>
			<Row>
				<Col sm={3} md={3} lg={3}>
					<Button title="Default link" btnType="link" size="large" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Disabled link"
						btnType="link"
						disabled
						size="large"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Primary link"
						btnType="link"
						btnStyle="primary"
						size="large"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Danger link"
						btnType="link"
						btnStyle="danger"
						size="large"
					/>
				</Col>
			</Row>
			<Row>
				<Col sm={3} md={3} lg={3}>
					<Button title="Default link" btnType="link" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button title="Disabled link" btnType="link" disabled />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Primary link"
						btnType="link"
						btnStyle="primary"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Danger link"
						btnType="link"
						btnStyle="danger"
					/>
				</Col>
			</Row>
			<Row>
				<Col sm={3} md={3} lg={3}>
					<Button title="Default link" btnType="link" size="small" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Disabled link"
						btnType="link"
						disabled
						size="small"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Primary link"
						btnType="link"
						btnStyle="primary"
						size="small"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Danger link"
						btnType="link"
						btnStyle="danger"
						size="small"
					/>
				</Col>
			</Row>
			<Row>
				<Col sm={3} md={3} lg={3}>
					<Button btnType="link" btnStyle="default" icon="warning" />
				</Col>
				<Col sm={3} md={3} lg={3}></Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnType="link" btnStyle="primary" icon="warning" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnType="link" btnStyle="danger" icon="warning" />
				</Col>
			</Row>
		</>
	))
	.add("icons/outlined", () => (
		<>
			<Row>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Text with icon"
						size="large"
						icon="warning"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button size="large" icon="warning" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Text with icon"
						size="large"
						btnStyle="primary"
						icon="warning"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button size="large" btnStyle="primary" icon="warning" />
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button icon="warning" title="Text with icon" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button icon="warning" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Text with icon"
						btnStyle="primary"
						icon="warning"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnStyle="primary" icon="warning" />
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button
						size="small"
						icon="warning"
						title="Text with icon"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button size="small" icon="warning" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						size="small"
						btnStyle="primary"
						icon="warning"
						title="Text with icon"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button size="small" btnStyle="primary" icon="warning" />
				</Col>
			</Row>
		</>
	))
	.add("icons/solid", () => (
		<>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Text with icon"
						size="large"
						btnType="solid"
						icon="warning"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button size="large" btnType="solid" icon="warning" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						size="large"
						btnType="solid"
						btnStyle="primary"
						icon="warning"
						title="Text with icon"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						size="large"
						btnType="solid"
						btnStyle="primary"
						icon="warning"
					/>
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Text with icon"
						btnType="solid"
						icon="warning"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnType="solid" icon="warning" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Text with icon"
						btnType="solid"
						btnStyle="primary"
						icon="warning"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnType="solid" btnStyle="primary" icon="warning" />
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button
						title="Text with icon"
						size="small"
						btnType="solid"
						icon="warning"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button size="small" btnType="solid" icon="warning" />
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						size="small"
						btnType="solid"
						btnStyle="primary"
						icon="warning"
						title="Text with icon"
					/>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button
						size="small"
						btnType="solid"
						btnStyle="primary"
						icon="warning"
					/>
				</Col>
			</Row>
		</>
	))
	.add("submit button", () => (
		<form
			onSubmit={e => {
				e.preventDefault();
				alert("submit event called");
			}}
		>
			<Button
				title="Submit"
				htmlType="submit"
				btnType="solid"
				btnStyle="primary"
			/>
		</form>
	));
