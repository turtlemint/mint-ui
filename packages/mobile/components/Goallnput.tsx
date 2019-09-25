import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";

const GoalInput = () => {
	const [value, setValue] = useState(null);
	const handleChange = text => {
		setValue(text);
	};
	return (
		<TextInput
			placeholder="Some input"
			onChangeText={handleChange}
			value={value}
		/>
	);
};

export default GoalInput;
