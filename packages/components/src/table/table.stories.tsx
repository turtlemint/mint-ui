import * as React from "react";
import Table, { sortOrderType, ColumnType } from "./index";

export default {
	title: "Table",
	component: Table,
	parameters: {
		componentSubtitle: "basic"
	}
};

const dataSource: any = [];
for (let i = 0; i < 250; i++) {
	dataSource.push({
		key: i,
		name: `Name: ${i}`,
		age: i,
		address: `Lane ${i}, Lokhandwala, Andheri West`
	});
}
const columns: ColumnType[] = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		defaultSortOrder: "ascends",
		sorter: (a: any, b: any, sortOrder: sortOrderType | undefined) => {
			var nameA = a.name.toUpperCase(); // ignore upper and lowercase
			var nameB = b.name.toUpperCase(); // ignore upper and lowercase
			if (sortOrder === "ascends") {
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			}
			if (nameA < nameB) {
				return 1;
			}
			if (nameA > nameB) {
				return -1;
			}
			return 0;
		}
	},
	{
		title: "Age",
		dataIndex: "age",
		key: "age",
		sorter: (a: any, b: any, sortOrder: sortOrderType | undefined) => {
			if (sortOrder === "ascends") {
				return a.age - b.age;
			}
			return b.age - a.age;
		}
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address",
		sorter: (a: any, b: any, sortOrder: sortOrderType | undefined) => {
			var nameA = a.address.toUpperCase(); // ignore upper and lowercase
			var nameB = b.address.toUpperCase(); // ignore upper and lowercase
			if (sortOrder === "ascends") {
				if (nameA < nameB) {
					return -1;
				}
				if (nameA > nameB) {
					return 1;
				}
				return 0;
			}
			if (nameA < nameB) {
				return 1;
			}
			if (nameA > nameB) {
				return -1;
			}
			return 0;
		}
	}
];
export const basic = () => {
	const dataSource: any = [];
	for (let i = 0; i < 250; i++) {
		dataSource.push({
			key: i,
			name: `Name: ${i}`,
			age: i,
			address: `Lane ${i}, Lokhandwala, Andheri West`
		});
	}

	const columns: ColumnType[] = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			defaultSortOrder: "ascends",
			sorter: (a: any, b: any, sortOrder: sortOrderType | undefined) => {
				var nameA = a.name.toUpperCase(); // ignore upper and lowercase
				var nameB = b.name.toUpperCase(); // ignore upper and lowercase
				if (sortOrder === "ascends") {
					if (nameA < nameB) {
						return -1;
					}
					if (nameA > nameB) {
						return 1;
					}
					return 0;
				}
				if (nameA < nameB) {
					return 1;
				}
				if (nameA > nameB) {
					return -1;
				}
				return 0;
			}
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
			sorter: (a: any, b: any, sortOrder: sortOrderType | undefined) => {
				if (sortOrder === "ascends") {
					return a.age - b.age;
				}
				return b.age - a.age;
			}
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
			sorter: (a: any, b: any, sortOrder: sortOrderType | undefined) => {
				var nameA = a.address.toUpperCase(); // ignore upper and lowercase
				var nameB = b.address.toUpperCase(); // ignore upper and lowercase
				if (sortOrder === "ascends") {
					if (nameA < nameB) {
						return -1;
					}
					if (nameA > nameB) {
						return 1;
					}
					return 0;
				}
				if (nameA < nameB) {
					return 1;
				}
				if (nameA > nameB) {
					return -1;
				}
				return 0;
			}
		}
	];

	return <Table dataSource={dataSource} columns={columns} />;
};

export const ajax = () => {
	interface PaginationProps {
		currentPage: number;
	}

	const [tableData, setTableData] = React.useState([]);
	const [loading, setLoading] = React.useState(false);
	const [currentPage, setCurrentPage] = React.useState(1);
	const pageSize: number = 10;

	const getData = async (currentPage: number) => {
		setLoading(true);
		const result = (await fetch("https://swapi.co/api/people")).json();
		console.log("currentPage", currentPage, result);
		// Mock pagination
		const offset = (currentPage - 1) * pageSize;
		const end = offset + 10;
		const dataSlice = dataSource.slice(offset, end);
		setLoading(false);
		setTableData(dataSlice);
	};

	const handleTableChange = (pagination: PaginationProps) => {
		const { currentPage } = pagination;
		getData(currentPage);
		setCurrentPage(currentPage);
	};

	return (
		<Table
			dataSource={tableData}
			columns={columns}
			loading={loading}
			pagination={{ total: dataSource.length, pageSize, currentPage }}
			onChange={handleTableChange}
		/>
	);
};

export const onRowClick = () => {
	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			onRow={(record: any, rowIndex: any) => {
				return {
					onClick: (
						event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
					) => {
						console.log(rowIndex, event, record);
					}
				};
			}}
		/>
	);
};
