import React from "react";
import styled from "styled-components";
import { Button, Alert } from "react-native";
import {
	ButtonStyles,
	BaseButtonProps
} from "@turtlemint/shared/components/button";

export const StyledButton = styled(Button)`
	${ButtonStyles};
`;

const ButtonNative: React.FC<BaseButtonProps> = () => {
	return (
		<StyledButton
			title="Left button"
			onPress={() => Alert.alert("Left button pressed")}
		>
			{" "}
		</StyledButton>
	);
};

export default ButtonNative;
