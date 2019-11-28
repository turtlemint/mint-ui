import * as React from "react";
import styled from "styled-components";

const Wrapper = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	li:last-child: {
		border-bottom: 0;
	}
`;

export interface ListProps {
	children: any;
}

export const List = ({ children }: ListProps) => {
	return <Wrapper>{children}</Wrapper>;
};

export default List;
