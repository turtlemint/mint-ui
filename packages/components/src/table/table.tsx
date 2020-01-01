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

	React.useEffect(() => {
		handleSort(
			defaultCol.sorter ? defaultCol.sorter : function() {},
			defaultCol.defaultSortOrder
		);
	}, []);
	const [data, setData] = React.useState(dataSource);

	const handleSort = (
		sorter: (a: any, b: any, sortOrder: sortOrderType | undefined) => any,
		sortOrder: sortOrderType | undefined
	) => {
		const sortedData = data.sort((a: any, b: any) =>
			sorter(a, b, sortOrder)
		);
		setData([...sortedData]);
	};

	return (
		<TableEl>
			<Thead columns={columns} handleSort={handleSort} />
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
