import { ListTypeWrapper } from "./list";
import { LisItemTypeWrapper } from "./list-item";
import { Wrapper } from "./wrapper";
import { renderComponent } from "..";
import { IDict } from "../../__utils/type";

// Search on how to type any part of it fully since it return an exact signature
export const TypeMap: IDict<(Component: any) => any> = {
	list: renderComponent(ListTypeWrapper),
	list_item: renderComponent(LisItemTypeWrapper),
	wrapper: renderComponent(Wrapper)
};
