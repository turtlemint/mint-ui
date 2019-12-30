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
		key: "name"
	},
	{
		title: "Age",
		dataIndex: "age",
		key: "age"
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address"
	}
];

stories.add("default", () => (
	<Table dataSource={dataSource} columns={columns} />
));
