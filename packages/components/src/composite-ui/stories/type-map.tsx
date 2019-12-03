import { ListTypeWrapper } from "./type-wrappers/list";
import { Wrapper } from "./type-wrappers/wrapper";
import { renderComponent } from "..";
import { IDict } from "../../__utils/type";
import { ListItem } from "../../list/list-item";

// Search on how to type any part of it fully since it return an exact signature
export const TypeMap: IDict<(Component: any) => any> = {
	list: renderComponent(ListTypeWrapper),
	list_item: renderComponent(ListItem),
	wrapper: renderComponent(Wrapper)
};
