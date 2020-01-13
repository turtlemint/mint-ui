import * as React from "react";
import styled from "styled-components";
import COLORS from "../__utils/colors";
import { OnRowReturn } from "./index";

interface TableBodyProps {
	data: any;
	onRow?: (record: any, rowIndex: string) => OnRowReturn;
	pageSize: number;
	currentPage: number;
	isAjax: boolean;
}

const TableBody = ({
	data,
	onRow,
	pageSize,
	currentPage,
	isAjax
}: TableBodyProps) => {
	let dataSlice = data;
	if (!isAjax) {
		const offset = (currentPage - 1) * pageSize;
		const end = offset + pageSize;
		dataSlice = data.slice(offset, end);
	}
	return (
		<tbody>
			{dataSlice.map((item: any) => (
				<tr
					key={item.key}
					onClick={(
						event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
					) => {
						const result = onRow ? onRow(item, item.key) : null;
						result
							? result.onClick
								? result.onClick(event)
								: null
							: null;
					}}
					onContextMenu={(
						event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
					) => {
						const result = onRow ? onRow(item, item.key) : null;
						result
							? result.onContextMenu
								? result.onContextMenu(event)
								: null
							: null;
					}}
					onMouseEnter={(
						event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
					) => {
						const result = onRow ? onRow(item, item.key) : null;
						result
							? result.onMouseEnter
								? result.onMouseEnter(event)
								: null
							: null;
					}}
					onMouseLeave={(
						event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
					) => {
						const result = onRow ? onRow(item, item.key) : null;
						result
							? result.onMouseLeave
								? result.onMouseLeave(event)
								: null
							: null;
					}}
					style={{ cursor: onRow ? "pointer" : "initial" }}
				>
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
