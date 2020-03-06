import * as React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../app";
import Thead from "./table-head";
import TableBody from "./table-body";
import Pagination, { PaginationCallbackProps } from "../pagination";
import LoadingMask from "../loading/loading-mask";
import Col from "../grid/col";
import Row from "../grid/row";

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
	/**Data record array to be displayed */
	dataSource: any[];
	/** Columns of table */
	columns: any[];
	/** callback to be executed when any row is clicked */
	onRow?: (record: any, rowIndex: string) => OnRowReturn;
	/** Config of pagination. You can ref pagination document
	 * at https://mint-ui.netlify.com/?path=/story/pagination--basic
	 * hide it by setting it to false
	 */
	pagination?: Pagination | boolean;
	/**	Loading status of table */
	loading?: boolean;
	/** Callback executed when pagination, sorting or filters are changed */
	onChange?: (
		pagination: any,
		sorter: any,
		filters?: any,
		extra?: any
	) => void;
}

export interface ActiveSort {
	column: ColumnType;
	order: sortOrderType;
}
export const Table = ({
	dataSource = [],
	columns,
	onRow,
	pagination,
	loading,
	onChange
}: TableProps) => {
	const [data, setData] = React.useState(dataSource);
	const defaultCol = columns.filter(column => column.defaultSortOrder)[0];
	const [activeSort, setActiveSort] = React.useState<ActiveSort>({
		column: defaultCol,
		order: "ascends"
	});
	const [activePagination, setActivePagination] = React.useState<
		PaginationCallbackProps
	>(
		pagination && typeof pagination !== "boolean"
			? {
					currentPage: pagination.currentPage,
					pageSize: pagination.pageSize
			  }
			: { currentPage: 1, pageSize: 10 }
	);
	React.useEffect(() => {
		setData(dataSource);
	}, [dataSource]);

	React.useEffect(() => {
		onChange ? onChange(activePagination, activeSort) : null;
	}, [activePagination, activeSort]);

	React.useEffect(() => {
		handleSort(activeSort.column, activeSort.column.defaultSortOrder);
	}, []);

	const handleSort = (
		column: ColumnType,
		sortOrder: sortOrderType = "ascends"
	) => {
		const sortedData = data.sort((a: any, b: any) => {
			if (column && column.sorter) {
				return column.sorter(a, b, sortOrder);
			}
			return column;
		});
		setData([...sortedData]);
		setActiveSort({ column, order: sortOrder });
	};

	return (
		<>
			<TableEl>
				{loading ? <LoadingMask /> : null}
				<Thead
					columns={columns}
					activeSort={activeSort}
					handleSort={handleSort}
				/>
				<TableBody
					data={data}
					onRow={onRow}
					pageSize={activePagination.pageSize}
					currentPage={activePagination.currentPage}
					isAjax={pagination ? true : false}
				/>
			</TableEl>
			{data.length ? (
				<Row style={{ marginTop: "20px" }}>
					<Col>
						{!pagination ? null : (
							<Pagination
								total={
									typeof pagination !== "boolean"
										? pagination.total
										: dataSource.length
								}
								current={activePagination.currentPage}
								pageSize={activePagination.pageSize}
								onChange={(
									paginationObj: PaginationCallbackProps
								) => {
									setActivePagination(paginationObj);
								}}
								style={{
									display: "flex",
									justifyContent: "flex-end"
								}}
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
