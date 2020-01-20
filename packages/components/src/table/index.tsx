import * as React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../app";
import Thead from "./table-head";
import TableBody from "./table-body";
import Pagination from "../pagination";
import LoadingMask from "../loading/loading-mask";
import Col from "../grid/col";
import Row from "../grid/row";
// import useDeepCompare from "../hooks/use-deep-compare";

export type sortOrderType = "ascends" | "descends";
export interface OnRowReturn {
	onClick?: (
		event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
	) => void;
	onContextMenu?: (
		event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
	) => void;
	onMouseEnter?: (
		event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
	) => void;
	onMouseLeave?: (
		event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
	) => void;
}
export type ColumnType = {
	title: string;
	dataIndex: string;
	key: string;
	render?: (data?: any) => React.ReactNode;
	sorter?: (a: any, b: any, sortOrder: sortOrderType | undefined) => any;
	defaultSortOrder?: sortOrderType;
};

interface Pagination {
	total: number;
	currentPage: number;
	pageSize: number;
}
interface TableProps {
	dataSource: any;
	columns: any[];
	onRow?: (record: any, rowIndex: string) => OnRowReturn;
	pagination?: Pagination | boolean;
	loading?: boolean;
	onChange?: (pagination: any) => void;
}

export const Table = ({
	dataSource,
	columns,
	onRow,
	pagination,
	loading,
	onChange
}: TableProps) => {
	const [data, setData] = React.useState(dataSource);
	const defaultCol = columns.filter(column => column.defaultSortOrder)[0];
	const [activeCol, setActiveCol] = React.useState<ColumnType>(defaultCol);
	const [currentPage, setCurrentPage] = React.useState<number>(
		pagination && typeof pagination !== "boolean"
			? pagination.currentPage
			: 1
	);
	const [pageSize] = React.useState<number>(
		pagination && typeof pagination !== "boolean" ? pagination.pageSize : 10
	);
	React.useEffect(() => {
		setData(dataSource);
	}, [dataSource]);

	React.useEffect(() => {
		const pagination = { currentPage, pageSize };
		onChange ? onChange(pagination) : null;
	}, [currentPage, pageSize]);

	React.useEffect(() => {
		handleSort(activeCol, activeCol.defaultSortOrder);
	}, []);

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
		<>
			<TableEl>
				{loading ? <LoadingMask /> : null}
				<Thead
					columns={columns}
					activeCol={activeCol}
					handleSort={handleSort}
				/>
				<TableBody
					data={data}
					onRow={onRow}
					pageSize={pageSize}
					currentPage={currentPage}
					isAjax={pagination ? true : false}
				/>
			</TableEl>
			{data.length ? (
				<Row style={{ marginTop: "20px" }}>
					<Col>
						{typeof pagination === "boolean" &&
						pagination === false ? null : (
							<Pagination
								style={{
									display: "flex",
									justifyContent: "flex-end"
								}}
								total={
									pagination &&
									typeof pagination !== "boolean"
										? pagination.total
										: dataSource.length
								}
								current={
									pagination &&
									typeof pagination !== "boolean"
										? pagination.currentPage
										: currentPage
								}
								onChange={(page: number) =>
									setCurrentPage(page)
								}
							/>
						)}
					</Col>
				</Row>
			) : null}
		</>
	);
};

const TableEl = styled.table`
	${GlobalStyles};
	border-collapse: separate;
	border-spacing: 0;
	width: 100%;
	position: relative;
`;

export default Table;
