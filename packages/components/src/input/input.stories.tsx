import * as React from "react";
import { Input } from "./index";

export default {
	title: "Input",
	component: Input
};

export const emptyInput = () => (
	<Input type="text" placeholder="Enter text" value="" />
);

export const text = () => (
	<Input type="text" placeholder="Enter text" value="some value" />
);

export const password = () => (
	<Input type="password" placeholder="Enter password" value="Test value" />
);
export const number = () => <Input type="number" value={10} />;

export const inputWithError = () => (
	<Input value="" type="text" error="Oops! something went wrong" />
);

export const disabled = () => (
	<Input disabled={true} placeholder="Enter value" />
);

export const demo = () => {
	const [value, setValue] = React.useState<string>("");
	const handleChange = (val: any) => {
		setValue(val);
	};
	return (
		<>
			<Input
				value={value}
				onChange={handleChange}
				placeholder="Enter something..."
			/>
			<div style={{ margin: "10px" }}>{value}</div>
		</>
	);
};
