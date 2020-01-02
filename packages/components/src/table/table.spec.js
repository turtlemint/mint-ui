import * as React from "react";
import { render } from "@testing-library/react";
import Table from "./index";

test("table renders correctly", () => {
	const dataSource = [
		{
			key: "1",
			name: "Mike",
			age: 32,
			address: "10 Downing Street"
		},
		{
			key: "2",
			name: "John",
			age: 42,
			address: "20 D Wall street"
		}
	];
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
			defaultSortOrder: "ascends",
			sorter: (a, b, sortOrder) => {
				var nameA = a.name.toUpperCase(); // ignore upper and lowercase
				var nameB = b.name.toUpperCase(); // ignore upper and lowercase
				if (!sortOrder || sortOrder === "ascends") {
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
			sorter: (a, b, sortOrder) => {
				if (!sortOrder || sortOrder === "ascends") {
					return a.age - b.age;
				}
				return b.age - a.age;
			}
		},
		{
			title: "Address",
			dataIndex: "address",
			key: "address",
			sorter: (a, b, sortOrder) => {
				var nameA = a.address.toUpperCase(); // ignore upper and lowercase
				var nameB = b.address.toUpperCase(); // ignore upper and lowercase
				if (!sortOrder || sortOrder === "ascends") {
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

	const { asFragment } = render(
		<Table dataSource={dataSource} columns={columns} />
	);

	expect(asFragment()).toMatchSnapshot();
});
