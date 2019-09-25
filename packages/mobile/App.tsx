import React from "react";
import { StyleSheet, View } from "react-native";
import GoalInput from "./components/Goallnput";

export default function App() {
	return (
		<View style={styles.container}>
			<GoalInput />
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
