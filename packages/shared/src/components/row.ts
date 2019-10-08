import styled from "styled-components";

interface RowProps {
	children: React.ReactNode;
}
const Row = styled.div<RowProps>`
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
// remove this later
export default Row;
