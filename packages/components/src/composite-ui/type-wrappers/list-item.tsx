import * as React from "react";
import { ListItem, ListItemProps } from "../../list/list-item";

type ListItemTypeProps = Partial<ListItemProps>;

export const LisItemTypeWrapper = (props: ListItemTypeProps) => (
	<ListItem {...props} />
);
