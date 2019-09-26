import React from "react";
import { StyleSheet, View } from "react-native";
import GoalInput from "./components/Goallnput";
import ButtonNative from "./components/button";

export default function App() {
	return (
		<View style={styles.container}>
			<GoalInput />
			<ButtonNative />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
