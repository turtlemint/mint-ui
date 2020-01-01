import * as React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../app";
import Thead from "./table-head";
import TableBody from "./table-body";

export type sortOrderType = "ascends" | "descends";

export type ColumnType = {
	title: string;
	dataIndex: string;
	key: string;
	render?: (data?: any) => React.ReactNode;
	sorter?: (a: any, b: any, sortOrder: sortOrderType | undefined) => any;
	defaultSortOrder?: sortOrderType;
};
interface TableProps {
	dataSource: any;
	columns: ColumnType[];
}

export const Table = ({ dataSource, columns }: TableProps) => {
	const defaultCol = columns.filter(column => column.defaultSortOrder)[0];
	const [activeCol, setActiveCol] = React.useState<ColumnType>(defaultCol);

	React.useEffect(() => {
		handleSort(activeCol, activeCol.defaultSortOrder);
	}, []);
	const [data, setData] = React.useState(dataSource);

	const handleSort = (
		column: ColumnType,
		sortOrder: sortOrderType | undefined
	) => {
		const sortedData = data.sort((a: any, b: any) => {
			if (column && column.sorter) {
				return column.sorter(a, b, sortOrder);
			}
			return column;
		});
		setData([...sortedData]);
		setActiveCol(column);
	};

	return (
		<TableEl>
			<Thead
				columns={columns}
				activeCol={activeCol}
				handleSort={handleSort}
			/>
			<TableBody data={data} />
		</TableEl>
	);
};

const TableEl = styled.table`
	${GlobalStyles};
	border-collapse: separate;
	border-spacing: 0;
`;

export default Table;
