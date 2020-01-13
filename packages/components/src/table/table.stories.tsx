import * as React from "react";
import { storiesOf } from "@storybook/react";
import Table, { sortOrderType, ColumnType } from "./index";

const stories = storiesOf("Table", module);

const dataSource: any = [];
for (let i = 0; i < 51; i++) {
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

stories.add("default", () => (
	<Table dataSource={dataSource} columns={columns} />
));
stories.add("onRow", () => (
	<Table
		dataSource={dataSource}
		columns={columns}
		onRow={(record: any, rowIndex: any) => {
			return {
				onClick: (
					event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
				) => {
					console.log(rowIndex, event, record);
				},
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				onDoubleClick: (event: unknown) => {}, // double click row
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				onContextMenu: (
					event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
				) => {
					alert(JSON.stringify(event));
					console.log(event);
				}, // right button click row
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				onMouseEnter: (
					event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
				) => {
					console.log(event, "mouse enter in action");
				}, // mouse enter row
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				onMouseLeave: (
					event: React.MouseEvent<HTMLTableRowElement, MouseEvent>
				) => {
					console.log(event, "mouse leave in action");
				} // mouse leave row
			};
		}}
	/>
));
