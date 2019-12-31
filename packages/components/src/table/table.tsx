import * as React from "react";
import styled from "styled-components";
import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";
import Icon from "../icon";

export type sortOrderType = "ascends" | "descends";

export type ColumnType = {
	title: string;
	dataIndex: string;
	key: string;
	render?: (data?: any) => React.ReactNode;
	sorter?: (a: any, b: any, sortOrder: sortOrderType | undefined) => any;
	sortDirections?: sortOrderType[] | undefined;
	defaultSortOrder?: sortOrderType;
};
interface TableProps {
	dataSource: any;
	columns: ColumnType[];
}

export const Table = ({ dataSource, columns }: TableProps) => {
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
			<thead>
				<tr>
					{columns.map(column => {
						const [sortOrder, setSortOrder] = React.useState<
							sortOrderType | undefined
						>(column.defaultSortOrder);
						const getSortIcon = (
							sorter: boolean,
							sortOrder: sortOrderType | undefined
						) => {
							if (sorter) {
								switch (sortOrder) {
									case "ascends":
										return (
											<span
												style={{ marginRight: "15px" }}
											>
												A
											</span>
										);

									case "descends":
										return (
											<span
												style={{ marginRight: "15px" }}
											>
												D
											</span>
										);
									default:
										return (
											<Icon
												name="sort"
												size={18}
												style={{ marginRight: "15px" }}
											/>
										);
								}
							}
							return null;
						};
						return (
							<Th
								key={column.key}
								sorter={column.sorter ? true : false}
								onClick={() => {
									handleSort(
										column.sorter
											? column.sorter
											: function() {},
										sortOrder
									);
									if (sortOrder === "ascends") {
										setSortOrder("descends");
									} else {
										setSortOrder("ascends");
									}
								}}
							>
								<FlexWrap>
									{getSortIcon(
										column.sorter ? true : false,
										sortOrder
									)}
									<span>{column.title}</span>
								</FlexWrap>
							</Th>
						);
					})}
				</tr>
			</thead>
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
		</TableEl>
	);
};

const TableEl = styled.table`
	${GlobalStyles};
	border-collapse: separate;
	border-spacing: 0;
`;
const FlexWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const Th = styled.th<{ sorter: boolean }>`
	text-align: left;
	padding: 16px 16px;
	overflow-wrap: break-word;
	font-weight: 500;
	background: ${COLORS.BACKGROUND_GREY};
	border-bottom: 1px solid ${COLORS.GREY4};
	transition: background 0.3s ease;
	&:first-child {
		border-top-left-radius: 4px;
	}
	cursor: ${({ sorter }) => (sorter ? "pointer" : "none")};
`;

const Td = styled.td`
	padding: 16px 16px;
	overflow-wrap: break-word;
	border: 0;
	text-align: left;
	border-bottom: 1px solid ${COLORS.GREY4};
`;

export default Table;
