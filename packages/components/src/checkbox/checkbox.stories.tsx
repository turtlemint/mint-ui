import * as React from "react";
import { storiesOf } from "@storybook/react";
import Checkbox from "./index";

storiesOf("Checkbox", module)
	.add("Default", () => <Checkbox value={true} />)
	.add("Indeterminate", () => <Checkbox value={true} indeterminate={true} />)
	.add("Disabled", () => <Checkbox value={false} disabled />)
	.add("Functional", () => {
		const [value, setValue] = React.useState<boolean>(false);
		return (
			<Checkbox
				value={value}
				onChange={(val: boolean) => setValue(val)}
			/>
		);
	});
