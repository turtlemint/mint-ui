import * as React from "react";
import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { Button } from "./index";
import Row from "../grid/row";
import Col from "../grid/col";
import { StoryWrapper } from "../storybook.setup";
import Close from "../icons/close";
// Storybook Markdown support - https://github.com/storybookjs/storybook/issues/6434
// import ButtonReadme from "./button.README.md";

const stories = storiesOf("Buttons", module);
stories.add(
	"outlined",
	() => (
		<StoryWrapper>
			<Row>
				<Col sm={3} md={3} lg={3}>
					<Button size="lg">Default outlined</Button>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button disabled size="lg">
						Disabled outlined
					</Button>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnStyle="primary" size="lg">
						Primary outlined
					</Button>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnStyle="danger" size="lg">
						Danger outlined
					</Button>
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button>Default outlined</Button>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button disabled>
						Disabled outlined
					</Button>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnStyle="primary">
						Primary outlined
					</Button>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnStyle="danger">
						Danger outlined
					</Button>
				</Col>
			</Row>
			<Row style={{ marginTop: "30px" }}>
				<Col sm={3} md={3} lg={3}>
					<Button size="sm">Default outlined</Button>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button disabled size="sm">
						Disabled outlined
					</Button>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnStyle="primary" size="sm">
						Primary outlined
					</Button>
				</Col>
				<Col sm={3} md={3} lg={3}>
					<Button btnStyle="danger" size="sm">
						Danger outlined
					</Button>
				</Col>
			</Row>
		</StoryWrapper>
	),
	{
		notes: { Introduction: "Notes", "Design notes": "Lorem ipsum" }
	}
);

stories.add("solid", () => (
	<StoryWrapper>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" size="lg">Default solid</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" disabled size="lg">Disabled solid</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" btnStyle="primary" size="lg">Primary solid</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" btnStyle="danger" size="lg">Danger solid</Button>
			</Col>
		</Row>
		<Row style={{ marginTop: "30px" }}>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid">Default solid</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" disabled>Disabled solid</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" btnStyle="primary">Primary solid</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" btnStyle="danger">Danger solid</Button>
			</Col>
		</Row>
		<Row style={{ marginTop: "30px" }}>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" size="sm">Default solid</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" disabled size="sm">Disabled solid</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" btnStyle="primary" size="sm">Primary solid</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" btnStyle="danger" size="sm">Danger solid</Button>
			</Col>
		</Row>

	</StoryWrapper>
));

stories.add("link", () => (
	<StoryWrapper>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" size="lg">Default link</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" disabled size="lg">Disabled link</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" btnStyle="primary" size="lg">Primary link</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" btnStyle="danger" size="lg">Danger link</Button>
			</Col>
		</Row>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link">Default link</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" disabled>Disabled link</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" btnStyle="primary">Primary link</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" btnStyle="danger">Danger link</Button>
			</Col>
		</Row>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" size="sm">Default link</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" disabled size="sm">Disabled link</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" btnStyle="primary" size="sm">Primary link</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" btnStyle="danger" size="sm">Danger link</Button>
			</Col>
		</Row>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" btnStyle="default" icon={Close} />
			</Col>
			<Col sm={3} md={3} lg={3}></Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" btnStyle="primary" icon={Close} />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="link" btnStyle="danger" icon={Close} />
			</Col>
		</Row>
	</StoryWrapper>
));

stories.add("icons/outlined", () => (
	<StoryWrapper>
		<Row>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" icon={Close} />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" btnStyle="primary" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" btnStyle="primary" icon={Close} />
			</Col>
		</Row>
		<Row style={{ marginTop: "30px" }}>
			<Col sm={3} md={3} lg={3}>
				<Button icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button icon={Close} />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnStyle="primary" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnStyle="primary" icon={Close} />
			</Col>
		</Row>
		<Row style={{ marginTop: "30px" }}>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" icon={Close} />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" btnStyle="primary" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" btnStyle="primary" icon={Close} />
			</Col>
		</Row>
	</StoryWrapper>
));

stories.add("icons/solid", () => (
	<StoryWrapper>
		<Row style={{ marginTop: "30px" }}>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" btnType="solid" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" btnType="solid" icon={Close} />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" btnType="solid" btnStyle="primary" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="lg" btnType="solid" btnStyle="primary" icon={Close} />
			</Col>
		</Row>
		<Row style={{ marginTop: "30px" }}>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" icon={Close} />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" btnStyle="primary" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button btnType="solid" btnStyle="primary" icon={Close} />
			</Col>
		</Row>
		<Row style={{ marginTop: "30px" }}>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" btnType="solid" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" btnType="solid" icon={Close} />
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" btnType="solid" btnStyle="primary" icon={Close}>Text with icon</Button>
			</Col>
			<Col sm={3} md={3} lg={3}>
				<Button size="sm" btnType="solid" btnStyle="primary" icon={Close} />
			</Col>
		</Row>
	</StoryWrapper>
));

