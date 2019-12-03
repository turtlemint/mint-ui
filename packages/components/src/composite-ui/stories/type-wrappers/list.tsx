import * as React from "react";
import List, { ListProps } from "../../../list";

type ListTypeWrapperProps = Partial<ListProps>;
export const ListTypeWrapper: React.FC<any> = (props: ListTypeWrapperProps) => (
	<List {...props}>{props.children}</List>
);
