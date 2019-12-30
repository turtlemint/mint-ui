import * as React from "react";
import styled from "styled-components";
import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";
import Icon from "../icon";
// import { tuple } from "../__utils/type";

// const sortDirectionsTuple = tuple("ascends", "descends");
// type sortDirections = typeof sortDirectionsTuple[number];

type ColumnType = {
	title: string;
	dataIndex: string;
	key: string;
	render?: (data?: any) => React.ReactNode;
	sorter?: (a: any, b: any, sortOrder: "ascends" | "descends") => any;
	sortDirections?: any;
};
interface TableProps {
	dataSource: any;
	columns: ColumnType[];
}

export const Table = ({ dataSource, columns }: TableProps) => {
	const [data, setData] = React.useState(dataSource);
	const handleSort = (
		sorter: (a: any, b: any, sortOrder: "ascends" | "descends") => any,
		sortOrder: "ascends" | "descends"
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
						const [sortOrder, setSortOrder] = React.useState<any>(
							column.sortDirections
								? column.sortDirections[0]
								: "ascends"
						);
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
									{column.sorter ? (
										<Icon
											name="sort"
											size={18}
											style={{ marginRight: "15px" }}
										/>
									) : null}
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
