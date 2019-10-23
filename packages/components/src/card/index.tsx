import * as React from "react";
import styled from "styled-components";
import { Colors } from "@turtlemint/core";
import "../app.css";

interface CardProps {
	children: React.ReactNode | React.ReactNode[];
}

const StyledCard = styled.div`
	box-shadow: rgba(102, 143, 211, 0.33) 0px 1px 10px 0px;
	border-radius: 4px;
	align-items: center;
	animation: 500ms ease 0ms;
`;
const StyledBody = styled.div`
	display: flex;
	padding: 20px 20px 20px;
	color: ${Colors.GREY1};
`;

const Body = ({ children }: CardProps) => {
	return <StyledBody>{children}</StyledBody>;
};

const Card = ({ children }: CardProps) => {
	return <StyledCard>{children}</StyledCard>;
};
const StyledHeader = styled.div`
	display: flex;
	padding: 20px 20px 20px;
	border-bottom: 1px solid ${Colors.BACKGROUND_GREY};
`;
const Header = ({ children }: CardProps) => (
	<StyledHeader>{children}</StyledHeader>
);
const StyledFooter = styled.div`
	display: flex;
	padding: 20px 20px 20px;
	border-bottom: 1px solid ${Colors.DISABLED};
`;
const Footer = ({ children }: CardProps) => (
	<StyledFooter>{children}</StyledFooter>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
