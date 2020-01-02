import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";

const styles = css`
	border-collapse: collapse;
	border: 1px solid #cccccc;
	color: #444444;
	margin-top: 0.25rem;
	padding-right: 0.5rem;
	padding: 0.25rem;
	text-align: left;
	vertical-align: top;
`;
const STable = styled.table`
	${styles};
	td,
	th {
		${styles};
	}
`;

const Red = (props: any) => (
	<span style={{ color: COLORS.DANGER }} {...props} />
);

export default function makeTable(componentProps: string[]) {
	const Table = ({ propDefinitions }: any) => {
		const props = propDefinitions.map(
			({
				property,
				propType,
				required,
				description,
				defaultValue
			}: any) => {
				return componentProps.includes(property) ? (
					<tr key={property}>
						<td>
							{property}
							{required ? <Red>*</Red> : null}
						</td>
						<td>{propType.name}</td>
						<td>{defaultValue}</td>
						<td>{description}</td>
					</tr>
				) : null;
			}
		);

		return (
			<STable className="info-table">
				<thead>
					<tr>
						<th>name</th>
						<th>type</th>
						<th>default</th>
						<th>description</th>
					</tr>
				</thead>
				<tbody>{props}</tbody>
			</STable>
		);
	};
	return Table;
}
