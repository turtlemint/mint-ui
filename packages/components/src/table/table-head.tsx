import * as React from "react";
import styled from "styled-components";
import { ColumnType, sortOrderType } from "./table";
import COLORS from "../__utils/colors";
import Icon from "../icon";

interface TheadProps {
	columns: ColumnType[];
	handleSort: (
		sorter: (a: any, b: any, sortOrder: sortOrderType | undefined) => any,
		sortOrder: sortOrderType | undefined
	) => void;
}

const Thead = ({ columns, handleSort }: TheadProps) => {
	return (
		<thead>
			<tr>
				{columns.map(column => {
					const [sortOrder, setSortOrder] = React.useState<
						sortOrderType | undefined
					>(column.defaultSortOrder);

					const getSortIcon = (
						sortOrder: sortOrderType | undefined
					) => {
						return (
							<IconWrapper>
								<Icon
									name="arrow-dropdown"
									size={21}
									color={
										sortOrder && sortOrder === "descends"
											? COLORS.PRIMARY_LIGHT
											: COLORS.GREY4
									}
								/>
								<Icon
									name="arrow-dropup"
									size={21}
									color={
										sortOrder && sortOrder === "ascends"
											? COLORS.PRIMARY_LIGHT
											: COLORS.GREY4
									}
								/>
							</IconWrapper>
						);
					};

					return (
						<Th
							key={column.key}
							sorter={column.sorter ? true : false}
							onClick={() => {
								if (!sortOrder || sortOrder === "descends") {
									setSortOrder("ascends");
									handleSort(
										column.sorter
											? column.sorter
											: function() {},
										"ascends"
									);
								} else {
									setSortOrder("descends");
									handleSort(
										column.sorter
											? column.sorter
											: function() {},
										"descends"
									);
								}
							}}
						>
							<FlexWrap>
								<span>{column.title}</span>
								{column.sorter ? getSortIcon(sortOrder) : null}
							</FlexWrap>
						</Th>
					);
				})}
			</tr>
		</thead>
	);
};

const IconWrapper = styled.span`
	display: inline-flex;
    justify-content: center;
    align-items center;
    margin-left: 15px;
    position: relative;
    svg{
        position: absolute;
    }
    svg:first-child{
        top: 4px;
    }
    svg:last-child{
       bottom: 4px;
    }
`;

const Th = styled.th<{ sorter: boolean }>`
	text-align: left;
	padding: 16px 16px;
	overflow-wrap: break-word;
	font-weight: 500;
	background: ${COLORS.BACKGROUND_GREY};
	border-bottom: 1px solid ${COLORS.GREY4};
	transition: background 0.3s ease;
	&:first-child {
		border-top-left-radius: 4px;
	}
	cursor: ${({ sorter }) => (sorter ? "pointer" : "none")};
`;

const FlexWrap = styled.div`
	display: flex;
	justify-content: left;
`;

export default Thead;
