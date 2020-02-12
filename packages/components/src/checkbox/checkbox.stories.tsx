import * as React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./index";

const stories = storiesOf("Checkbox", module);

stories.add("Default", () => <Checkbox value={true} />);

stories.add("Indeterminate", () => (
	<Checkbox value={true} indeterminate={true} />
));
stories.add("Disabled", () => <Checkbox value={false} disabled />);
stories.add("Functional", () => {
	const [value, setValue] = React.useState<boolean>(false);
	return (
		<Checkbox value={value} onChange={(val: boolean) => setValue(val)} />
	);
});
