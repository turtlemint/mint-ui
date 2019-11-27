import * as React from "react";
import { ListItem, ListItemProps } from "../list/list-item";
import List from "../list";

const Wrapper = ({ children }: any) => {
	return <div>{children}</div>;
};

interface RenderComponentProps {
	type: string;
	children: React.ReactNode;
}
const renderComponent = ({ type, children, ...rest }: RenderComponentProps) => {
	switch (type) {
		case "list":
			return <List>{children}</List>;
		case "list_item":
			const {
				icon,
				title,
				subtitle,
				expandRight,
				url
			} = rest as ListItemProps;
			return (
				<ListItem
					icon={icon}
					title={title}
					subtitle={subtitle}
					expandRight={expandRight}
					url={url}
				/>
			);
		default:
			return <Wrapper>{children}</Wrapper>;
	}
};

const buildUI = (config: any) => {
	const { type, children } = config;
	if (children && children.length) {
		let len = children.length;
		const results = [];
		for (let i = 0; i < len; i++) {
			const result = buildUI(children[i]);
			results.push(result);
		}
		const Wrapper = renderComponent({ type, children: results });
		return Wrapper;
	} else {
		return renderComponent(config);
	}
};

interface CompositeUIProps {
	config: any;
}
export const CompositeUI = ({ config }: CompositeUIProps) => {
	return <div>{buildUI(config)}</div>;
};

export default CompositeUI;
