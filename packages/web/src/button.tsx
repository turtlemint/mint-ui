import React from "react";
import ButtonStyles from "shared/src/button";
import styled from "styled-components";

const StyledButton = styled.button`
	${ButtonStyles};
`;

const Button = () => {
	return <StyledButton>Hello</StyledButton>;
};

export default Button;
