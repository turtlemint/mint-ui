import * as React from "react";
import styled from "styled-components";
import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

type ColumnType = {
	title: string;
	dataIndex: string;
	key: string;
	render?: (data?: any) => React.ReactNode;
};
interface TableProps {
	dataSource: any;
	columns: ColumnType[];
}

export const Table = ({ dataSource, columns }: TableProps) => {
	return (
		<TableEl>
			<thead>
				<tr>
					{columns.map(column => (
						<Th key={column.key}>{column.title}</Th>
					))}
				</tr>
			</thead>
			<tbody>
				{dataSource.map((item: any) => (
					<tr key={item.key}>
						{Object.keys(item)
							.filter(item => item !== "key")
							.map(columnName => (
								<Td key={columnName}>{item[columnName]}</Td>
							))}
					</tr>
				))}
			</tbody>
		</TableEl>
	);
};

const TableEl = styled.table`
	${GlobalStyles};
	border-collapse: separate;
	border-spacing: 0;
`;

const Th = styled.th`
	text-align: left;
	padding: 16px 16px;
	overflow-wrap: break-word;
	font-weight: 500;
	background: ${COLORS.BACKGROUND_GREY};
	border-bottom: 1px solid #e8e8e8;
	transition: background 0.3s ease;
	&:first-child {
		border-top-left-radius: 4px;
	}
`;
const Td = styled.td`
	padding: 16px 16px;
	overflow-wrap: break-word;
	border: 0;
	text-align: left;
`;

export default Table;
