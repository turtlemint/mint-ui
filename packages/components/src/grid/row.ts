import styled from "styled-components";
import { GlobalStyles } from "../app";

interface RowProps {
	children: React.ReactNode;
}
const Row = styled.div<RowProps>`
	${GlobalStyles};
	margin-left: -15px;
	margin-right: -15px;
	&:before,
	&:after {
		display: table;
		content: " ";
	}
	&:after {
		clear: both;
	}
`;
export default Row;
