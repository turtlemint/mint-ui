import * as React from "react";
import styled from "styled-components";
import COLORS from "../__utils/colors";

interface TableBodyProps {
	data: any;
}

const TableBody = ({ data }: TableBodyProps) => {
	return (
		<tbody>
			{data.map((item: any) => (
				<tr key={item.key}>
					{Object.keys(item)
						.filter(item => item !== "key")
						.map(columnName => (
							<Td key={columnName}>{item[columnName]}</Td>
						))}
				</tr>
			))}
		</tbody>
	);
};

const Td = styled.td`
	padding: 16px 16px;
	overflow-wrap: break-word;
	border: 0;
	text-align: left;
	border-bottom: 1px solid ${COLORS.GREY4};
`;
export default TableBody;
