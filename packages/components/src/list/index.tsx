import * as React from "react";
import styled from "styled-components";
import COLORS from "../__utils/colors";
import ListItem from "./list-item";
import { tuple } from "../__utils/type";
import Empty from "../empty";
import Simple from "../empty/simple";
import { GlobalStyles } from "../app";

const Wrapper = styled.ul<{ bordered?: boolean }>`
	${GlobalStyles};
	list-style: none;
	margin: 0;
	padding: 0;
	border: ${({ bordered }) => (bordered ? `1px solid ${COLORS.GREY4}` : 0)};
`;

export const ListContext = React.createContext<any>({});
const SizeValues = tuple("small", "default", "large");
export type SizeType = typeof SizeValues[number];

export interface ListProps {
	size?: SizeType;
	bordered?: boolean;
	loading?: boolean;
	dataSource: any[];
	renderItem?: (item: any, index: any) => any;
}

export const List = ({
	size,
	bordered = false,
	loading = false,
	dataSource = [],
	renderItem
}: ListProps) => (
	<ListContext.Provider value={{ bordered, size }}>
		<Wrapper bordered={bordered}>
			{loading ? (
				<Empty description="Loading..." image={<Simple />}></Empty>
			) : (
				dataSource.map((source: any, index: any) => {
					return renderItem ? (
						renderItem(source, index)
					) : typeof source === "string" ? (
						<ListItem key={index} title={source} />
					) : (
						<ListItem {...source} />
					);
				})
			)}
		</Wrapper>
	</ListContext.Provider>
);

List.Item = ListItem;
export default List;
