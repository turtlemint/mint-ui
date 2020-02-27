import * as React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import Row, { RowProps } from "./row";
import Col from "./col";
import { storiesOf } from "@storybook/react";
import COLORS from "../__utils/colors";
import makeTable from "../table/prop-table";

const RowProps = ["justify", "align", "chilren"];
const ColProps = [
	"xs",
	"sm",
	"md",
	"lg",
	"xsOffset",
	"smOffset",
	"mdOffset",
	"lgOffset",
	"xsHidden",
	"smHidden",
	"mdHidden",
	"lgHidden"
];

const TableComponent = makeTable([...RowProps, ...ColProps]);
const StyledRow = styled(Row)<RowProps>`
	background: ${transparentize(0.5, COLORS.GREY4)};
	margin-bottom: 7px;
	padding: 8px;
	div {
		padding: 30px;
	}
	div:nth-child(odd) {
		color: ${COLORS.WHITE};
		background-color: ${COLORS.PRIMARY_DARK};
	}
	div:nth-child(even) {
		color: ${COLORS.GREY1};
		background-color: ${COLORS.PRIMARY_LIGHT};
	}
`;

storiesOf("Grid", module)
	.add(
		"design concept",
		() => {
			return (
				<>
					<StyledRow>
						<Col sm={12} md={12}>
							100%
						</Col>
					</StyledRow>
					<StyledRow>
						<Col sm={6} md={6} lg={6}>
							50%
						</Col>
						<Col sm={6} md={6} lg={6}>
							50%
						</Col>
					</StyledRow>
					<StyledRow>
						<Col sm={4} md={4} lg={4}>
							33.33%
						</Col>
						<Col sm={4} md={4} lg={4}>
							33.33%
						</Col>
						<Col sm={4} md={4} lg={4}>
							33.33%
						</Col>
					</StyledRow>
					<StyledRow>
						<Col sm={3} md={3} lg={3}>
							25%
						</Col>
						<Col sm={3} md={3} lg={3}>
							25%
						</Col>
						<Col sm={3} md={3} lg={3}>
							25%
						</Col>
						<Col sm={3} md={3} lg={3}>
							25%
						</Col>
					</StyledRow>
					<StyledRow>
						<Col sm={8} md={8} lg={8}>
							66.66%
						</Col>
						<Col sm={4} md={4} lg={4}>
							33.33%
						</Col>
					</StyledRow>
				</>
			);
		},
		{
			info: {
				TableComponent,
				propTables: [Row, Col]
			}
		}
	)
	.add(
		"offsets",
		() => (
			<>
				<StyledRow>
					<Col sm={9} md={9} smOffset={3} mdOffset={3}>
						offset-3 col-9
					</Col>
				</StyledRow>
				<StyledRow>
					<Col sm={8} md={8} smOffset={4} mdOffset={4}>
						offset-4 col-8
					</Col>
				</StyledRow>
				<StyledRow>
					<Col sm={6} md={6} smOffset={6} mdOffset={6}>
						offset-6 col-6
					</Col>
				</StyledRow>
				<StyledRow>
					<Col sm={4} md={4} smOffset={8} mdOffset={8}>
						offset-8 col-4
					</Col>
				</StyledRow>
				<StyledRow>
					<Col sm={3} md={3} smOffset={9} mdOffset={9}>
						offset-8 col-4
					</Col>
				</StyledRow>
			</>
		),
		{
			info: {
				TableComponent,
				propTables: [Row, Col]
			}
		}
	)
	.add(
		"gutter",
		() => (
			<>
				<p>Number value type: {JSON.stringify(`gutter={6}`)}</p>
				<StyledRow gutter={6}>
					<Col sm={3} md={3}>
						col-3
					</Col>
					<Col sm={3} md={3}>
						col-3
					</Col>
					<Col sm={3} md={3}>
						col-3
					</Col>
				</StyledRow>
				<p>
					Object type:
					{JSON.stringify(`gutter={{ xs: 6, sm: 8, md: 6, lg: 3 }}`)}
				</p>
				<StyledRow gutter={{ xs: 6, sm: 8, md: 6, lg: 3 }}>
					<Col sm={3} md={3}>
						col-3
					</Col>
					<Col sm={3} md={3}>
						col-3
					</Col>
					<Col sm={3} md={3}>
						col-3
					</Col>
				</StyledRow>
				<p>
					Array with number values:{" "}
					{JSON.stringify(`gutter={[6, 6]}`)}{" "}
				</p>
				<StyledRow gutter={[6, 6]}>
					<Col sm={3} md={3}>
						col-3
					</Col>
					<Col sm={3} md={3}>
						col-3
					</Col>
					<Col sm={3} md={3}>
						col-3
					</Col>
				</StyledRow>
				<p>
					Array of Objects:
					{JSON.stringify(
						`gutter={[{ xs: 6, sm: 8, md: 6, lg: 3 }, { xs: 6, sm: 8, md: 6, lg: 3 }]}`
					)}
				</p>
				<StyledRow
					gutter={[
						{ xs: 6, sm: 8, md: 6, lg: 3 },
						{ xs: 6, sm: 8, md: 6, lg: 3 }
					]}
				>
					<Col sm={3} md={3}>
						col-4
					</Col>
					<Col sm={3} md={3}>
						col-3
					</Col>
					<Col sm={3} md={3}>
						col-4
					</Col>
				</StyledRow>
			</>
		),
		{
			info: {
				TableComponent,
				propTables: [Row, Col]
			}
		}
	)
	.add(
		"flex layout",
		() => (
			<>
				<div>
					<p>justify left</p>
					<StyledRow justify="flex-start">
						<Col sm={4} md={4}>
							col-4
						</Col>
						<Col sm={4} md={4}>
							col-4
						</Col>
						<Col sm={4} md={4}>
							col-4
						</Col>
					</StyledRow>
				</div>
				<div>
					<p>justify center</p>
					<StyledRow justify="center">
						<Col sm={3} md={3}>
							col-3
						</Col>
						<Col sm={3} md={3}>
							col-3
						</Col>
						<Col sm={3} md={3}>
							col-3
						</Col>
					</StyledRow>
				</div>
				<div>
					<p>justify right</p>
					<StyledRow justify="flex-end">
						<Col sm={3} md={3}>
							col-3
						</Col>
						<Col sm={3} md={3}>
							col-3
						</Col>
						<Col sm={3} md={3}>
							col-3
						</Col>
					</StyledRow>
				</div>
				<div>
					<p>justify with space around columns </p>
					<StyledRow justify="space-around">
						<Col sm={3} md={3}>
							col-3
						</Col>
						<Col sm={3} md={3}>
							col-3
						</Col>
						<Col sm={3} md={3}>
							col-3
						</Col>
					</StyledRow>
				</div>
				<div>
					<p>justify with space between columns </p>
					<StyledRow justify="space-between">
						<Col sm={3} md={4}>
							col-4
						</Col>
						<Col sm={3} md={4}>
							col-4
						</Col>
						<Col sm={3} md={4}>
							col-4
						</Col>
					</StyledRow>
				</div>
			</>
		),
		{
			info: {
				TableComponent,
				propTables: [Row, Col]
			}
		}
	)
	.add(
		"flex align",
		() => (
			<>
				<div>
					<p> Align Top</p>
					<StyledRow align="flex-start" style={{ height: "200px" }}>
						<Col sm={4} md={4}>
							col-4
						</Col>
						<Col sm={4} md={4}>
							col-4
						</Col>
						<Col sm={4} md={4}>
							col-4
						</Col>
					</StyledRow>
				</div>
				<div>
					<p> Align Center</p>
					<StyledRow align="center" style={{ height: "200px" }}>
						<Col sm={4} md={4}>
							col-4
						</Col>
						<Col sm={4} md={4}>
							col-4
						</Col>
						<Col sm={4} md={4}>
							col-4
						</Col>
					</StyledRow>
				</div>
				<div>
					<p> Align Bottom</p>
					<StyledRow align="flex-end" style={{ height: "200px" }}>
						<Col sm={4} md={4}>
							col-4
						</Col>
						<Col sm={4} md={4}>
							col-4
						</Col>
						<Col sm={4} md={4}>
							col-4
						</Col>
					</StyledRow>
				</div>
			</>
		),
		{
			info: {
				TableComponent,
				propTables: [Row, Col]
			}
		}
	)
	.add(
		"order",
		() => (
			<StyledRow>
				<Col sm={4} md={4} order={2}>
					#1 col-4-order-2
				</Col>
				<Col sm={4} md={4} order={3}>
					#2 col-4-order-3
				</Col>
				<Col sm={4} md={4} order={1}>
					#3 col-4-order-1
				</Col>
			</StyledRow>
		),
		{
			info: {
				TableComponent,
				propTables: [Row, Col]
			}
		}
	);
