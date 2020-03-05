import * as React from "react";
import { CompositeUI, renderComponent } from "./index";
import { IDict } from "../__utils/type";

import { ListItem } from "../list/list-item";

export default {
	title: "CompositeUI",
	component: CompositeUI
};

export const basic = () => {
	const Wrapper = (props: any) => <div>{props.children}</div>;

	const TypeMap: IDict<(Component: any) => any> = {
		list_item: renderComponent(ListItem),
		wrapper: renderComponent(Wrapper)
	};
	const config = {
		type: "help_center",
		children: [
			{
				type: "header"
			},
			{
				type: "section_title"
			},
			{
				type: "list",
				children: [
					{
						type: "list_item",
						props: {
							avatar: {
								icon: "warning",
								color: "blue"
							},
							title: "Insurance"
						}
					},
					{
						type: "list_item",
						props: {
							avatar: {
								icon: "close"
							},
							title: "Mutual Funds"
						}
					},
					{
						type: "list_item",
						props: {
							avatar: {
								icon: "settings",
								color: "grey"
							},
							title: "Gold"
						}
					},
					{
						type: "list_item",
						props: {
							avatar: {
								icon: "notification_important",
								color: "red"
							},
							title: "Loans"
						}
					},
					{
						type: "list_item",
						props: {
							avatar: {
								icon: "info"
							},
							title: "Something Else"
						}
					}
				]
			}
		]
	};

	return <CompositeUI config={config} typeMap={TypeMap} />;
};
