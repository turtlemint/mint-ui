import * as React from "react";
import { ListItem } from "../../../list/list-item";

export const ListItemIconHOC = (icon: any) => {
	return function ListItemIcon({ title, ...rest }: any) {
		return <ListItem title={title} icon={icon} {...rest} />;
	};
};
