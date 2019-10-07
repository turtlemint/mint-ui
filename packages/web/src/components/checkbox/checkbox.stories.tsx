import * as React from "react";
import { storiesOf } from "@storybook/react";
import Row from "@turtlemint/tm-components-shared/src/components/row";
import Col from "@turtlemint/tm-components-shared/src/components/col";
import Checkbox from "./index";

const stories = storiesOf("Checkbox", module);

const NormalCheckbox = () => {
	const [checked, setChecked] = React.useState(true);
	const handleChange = (val: boolean) => {
		setChecked(val);
	};
	return <Checkbox checked={checked} onChange={handleChange} />;
};
const IndeterminateCheckboxDemo = () => {
	const [checked, setChecked] = React.useState(true);
	const handleChange = (val: boolean) => {
		setChecked(val);
	};
	return (
		<Checkbox
			checked={checked}
			indeterminate={true}
			onChange={handleChange}
		/>
	);
};

stories.add("Normal", () => (
	<Row
		style={{
			padding: "0 30px"
		}}
	>
		<Col sm={3} md={3} lg={3}>
			<NormalCheckbox />
		</Col>
	</Row>
));

stories.add("Indeterminate", () => (
	<Row
		style={{
			padding: "0 30px"
		}}
	>
		<Col sm={3} md={3} lg={3}>
			<IndeterminateCheckboxDemo />
		</Col>
	</Row>
));
stories.add("Disabled", () => (
	<Row
		style={{
			padding: "0 30px"
		}}
	>
		<Col sm={3} md={3} lg={3}>
			<Checkbox checked={false} disabled />
		</Col>
	</Row>
));
