import * as React from "react";
import { storiesOf } from "@storybook/react";
import Table from "./table";

const stories = storiesOf("Table", module);

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
		address: "10 Downing Street"
	}
];

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		sortDirections: ["ascends", "descends"],
		sorter: (a: any, b: any, sortOrder: "ascends" | "descends") => {
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
		sorter: (a: any, b: any, sortOrder: "ascends" | "descends") => {
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
		sorter: (a: any, b: any, sortOrder: "ascends" | "descends") => {
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
