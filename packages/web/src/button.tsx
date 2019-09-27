import * as React from "react";
import styled from "styled-components";
import ButtonStyles from "shared/src/button";

const StyledButton = styled.button`
	${ButtonStyles};
`;

const Button = ({ children }: { children: React.ReactNode }) => {
	return <StyledButton>{children}</StyledButton>;
};

export default Button;
