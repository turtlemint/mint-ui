import * as React from "react";
import List from "./index";
import { storiesOf } from "@storybook/react";
import Icon from "../icon";
import ListItem from "./list-item";

const stringData = [
	"Racing car sprays burning fuel into crowd.",
	"Japanese princess to wed commoner.",
	"Australian walks 100km after outback crash.",
	"Man charged over missing wedding girl.",
	"Los Angeles battles huge wildfires."
];
const textList = [
	{
		key: 1,
		title: "List Item 1",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, excepturi?"
	},
	{
		key: 2,
		title: "List Item 2",
		text:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, excepturi?"
	}
];
const objectList: any = [
	{
		key: 1,
		title: "Insurance",
		avatar: {
			icon: "close"
		},
		actions: [
			<a
				href="https://google.com"
				target="_blank"
				rel="noopener noreferrer"
				key="list-loadmore-edit"
			>
				<Icon name="keyboard_arrow_right" />
			</a>
		]
	},
	{
		key: 2,
		title: "Mutual funds",
		avatar: {
			icon: "error_outline",
			color: "lime",
			style: {
				background: "black"
			}
		},
		actions: [
			<a
				href="https://google.com"
				target="_blank"
				rel="noopener noreferrer"
				key="list-loadmore-edit"
			>
				<Icon name="keyboard_arrow_right" />
			</a>
		]
	},
	{
		key: 3,
		title: "Gold",
		avatar: {
			icon: "settings",
			color: "green"
		},
		actions: [
			<a
				href="https://google.com"
				target="_blank"
				rel="noopener noreferrer"
				key="list-loadmore-edit"
			>
				<Icon name="keyboard_arrow_right" />
			</a>
		]
	},
	{
		key: 4,
		title: "Loans",
		avatar: {
			icon: "warning"
		},
		actions: [
			<a
				href="https://google.com"
				target="_blank"
				rel="noopener noreferrer"
				key="list-loadmore-edit"
			>
				<Icon name="keyboard_arrow_right" />
			</a>
		]
	},
	{
		key: 5,
		title: "Something else",
		avatar: {
			icon: "notification_important"
		},
		actions: [
			<a
				href="https://google.com"
				target="_blank"
				rel="noopener noreferrer"
				key="list-loadmore-edit"
			>
				<Icon name="keyboard_arrow_right" />
			</a>
		]
	}
];

storiesOf("List", module)
	.add("default", () => <List dataSource={stringData} bordered={true} />, {
		info: {
			propTables: [List, ListItem]
		}
	})
	.add("avatar & single action", () => {
		return <List dataSource={objectList} bordered={true} />;
	})
	.add(
		"custom list element",
		() => {
			return (
				<List
					dataSource={textList}
					renderItem={(item: any) => {
						return <ListItem key={item.key} {...item} />;
					}}
				/>
			);
		},
		{
			info: {
				propTables: [List, ListItem]
			}
		}
	)
	.add("size", () => {
		return (
			<>
				<h3>[Small Size]</h3>
				<List dataSource={textList} size="small" bordered={true} />
				<h3>[Default Size</h3>
				<List dataSource={textList} bordered={true} />
				<h3>[Large Size]</h3>
				<List dataSource={textList} size="large" bordered={true} />
			</>
		);
	})
	.add("loading...", () => {
		return <List dataSource={stringData} loading={true} />;
	})
	.add("mutiple actions", () => {
		const actionsList: any = [
			{
				key: 1,
				title: "Insurance",
				avatar: {
					icon: "close"
				},
				actions: [
					<a href="https://google.com" key="list-loadmore-edit">
						Edit
					</a>,
					<a href="https://google.com" key="list-loadmore-edit">
						More
					</a>
				]
			},
			{
				key: 2,
				title: "Mutual funds",
				avatar: {
					icon: "error_outline",
					color: "lime",
					style: {
						background: "black"
					}
				},
				actions: [
					<a href="https://google.com" key="list-loadmore-edit">
						Edit
					</a>,
					<a href="https://google.com" key="list-loadmore-edit">
						More
					</a>
				]
			},
			{
				key: 3,
				title: "Gold",
				avatar: {
					icon: "settings",
					color: "green"
				},
				actions: [
					<a href="https://google.com" key="list-loadmore-edit">
						Edit
					</a>,
					<a href="https://google.com" key="list-loadmore-edit">
						More
					</a>
				]
			},
			{
				key: 4,
				title: "Loans",
				avatar: {
					icon: "warning"
				},
				actions: [
					<a href="https://google.com" key="list-loadmore-edit">
						Edit
					</a>,
					<a href="https://google.com" key="list-loadmore-edit">
						More
					</a>
				]
			},
			{
				key: 5,
				title: "Something else",
				avatar: {
					icon: "notification_important"
				},
				actions: [
					<a href="https://google.com" key="list-loadmore-edit">
						Edit
					</a>,
					<a href="https://google.com" key="list-loadmore-edit">
						More
					</a>
				]
			}
		];
		return <List dataSource={actionsList} bordered={true} />;
	});
