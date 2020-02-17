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
	"loading",
	"icon",
	"className",
	"block"
];

const TableComponent = makeTable(ButtonProps);

const stories = storiesOf("Buttons", module).addParameters({
	info: {
		TableComponent,
		propTables: [Button]
	}
});

stories.add("outlined", () => (
	<>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button title="Default outlined" size="lg" block />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button title="Disabled outlined" disabled size="lg" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button title="Primary outlined" btnStyle="primary" size="lg" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button title="Danger outlined" btnStyle="danger" size="lg" />
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
				<Button size="sm" title="Default outlined" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button disabled size="sm" title="Disabled outlined" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnStyle="primary" size="sm" title="Primary outlined" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnStyle="danger" size="sm" title="Danger outlined" />
			</Col>
		</Row>
	</>
));

stories.add("solid", () => (
	<>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" size="lg" title="Default solid" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					btnType="solid"
					disabled
					size="lg"
					title="Disabled solid"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					btnType="solid"
					btnStyle="primary"
					size="lg"
					title="Primary solid"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					btnType="solid"
					btnStyle="danger"
					size="lg"
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
				<Button btnType="solid" size="sm" title="Default solid" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					btnType="solid"
					disabled
					size="sm"
					title="Disabled solid"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					btnType="solid"
					btnStyle="primary"
					size="sm"
					title="Primary solid"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					btnType="solid"
					btnStyle="danger"
					size="sm"
					title="Danger solid"
				/>
			</Col>
		</Row>
	</>
));

stories.add("link", () => (
	<>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button title="Default link" btnType="link" size="lg" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					title="Disabled link"
					btnType="link"
					disabled
					size="lg"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					title="Primary link"
					btnType="link"
					btnStyle="primary"
					size="lg"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					title="Danger link"
					btnType="link"
					btnStyle="danger"
					size="lg"
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
				<Button title="Danger link" btnType="link" btnStyle="danger" />
			</Col>
		</Row>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button title="Default link" btnType="link" size="sm" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					title="Disabled link"
					btnType="link"
					disabled
					size="sm"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					title="Primary link"
					btnType="link"
					btnStyle="primary"
					size="sm"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					title="Danger link"
					btnType="link"
					btnStyle="danger"
					size="sm"
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
));

stories.add("icons/outlined", () => (
	<>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button title="Text with icon" size="lg" icon="warning" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" icon="warning" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					title="Text with icon"
					size="lg"
					btnStyle="primary"
					icon="warning"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" btnStyle="primary" icon="warning" />
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
				<Button size="sm" icon="warning" title="Text with icon" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" icon="warning" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					size="sm"
					btnStyle="primary"
					icon="warning"
					title="Text with icon"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" btnStyle="primary" icon="warning" />
			</Col>
		</Row>
	</>
));

stories.add("icons/solid", () => (
	<>
		<Row style={{ marginTop: "30px" }}>
			<Col sm={3} md={3} lg={3}>
				<Button
					title="Text with icon"
					size="lg"
					btnType="solid"
					icon="warning"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" btnType="solid" icon="warning" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					size="lg"
					btnType="solid"
					btnStyle="primary"
					icon="warning"
					title="Text with icon"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					size="lg"
					btnType="solid"
					btnStyle="primary"
					icon="warning"
				/>
			</Col>
		</Row>
		<Row style={{ marginTop: "30px" }}>
			<Col sm={3} md={3} lg={3}>
				<Button title="Text with icon" btnType="solid" icon="warning" />
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
					size="sm"
					btnType="solid"
					icon="warning"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" btnType="solid" icon="warning" />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					size="sm"
					btnType="solid"
					btnStyle="primary"
					icon="warning"
					title="Text with icon"
				/>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button
					size="sm"
					btnType="solid"
					btnStyle="primary"
					icon="warning"
				/>
			</Col>
		</Row>
	</>
));

stories.add("submit button", () => (
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
