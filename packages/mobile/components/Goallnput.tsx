import React from "react-native";
import { useState } from "react";

const Goal = () => {
	const [value, setValue] = useState(null);
	const handleChange = () => {
		setValue("anythin");
	};
	return <input type="text" onChange={handleChange} value={value} />;
};

export default Goal;
