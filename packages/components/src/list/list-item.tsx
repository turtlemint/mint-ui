import * as React from "react";
import styled, { css } from "styled-components";
// import Button from "../button";
import COLORS from "../__utils/colors";
// import Icon from "../icon";
import { ListContext, SizeType } from ".";
import Row from "../grid/row";
import Col from "../grid/col";
import Avatar from "../avatar";

export interface ListItemProps {
	avatar?: any;
	title?: string | React.ReactNode;
	text?: string | React.ReactNode;
	actions?: any[];
}

const Wrapper = styled.li<{ bordered: boolean; size: SizeType }>`
	padding: 12px 15px;
	${({ size }) =>
		size === "small" &&
		css`
			padding: 8px 15px;
		`};
	${({ size }) =>
		size === "large" &&
		css`
			padding: 15px;
		`};
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid ${COLORS.GREY4};
	&:last-child {
		border-bottom: 0;
	}
`;

const LeftWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Title = styled.div`
	font-size: 18px;
	line-height: 18px;
`;

const Text = styled.div`
	color: ${COLORS.GREY2};
`;
export const ListItem = ({ avatar, title, text, actions }: ListItemProps) => {
	const { bordered, size } = React.useContext(ListContext);
	return (
		<Wrapper bordered={bordered} size={size}>
			<LeftWrapper>
				{avatar ? (
					<Avatar
						icon={avatar.icon}
						size={avatar.size}
						shape={avatar.shape}
						color={avatar.color}
						style={{ marginTop: 0, ...avatar.style }}
					/>
				) : null}
				<Row>
					<Col sm={12} md={12}>
						<Title>{title}</Title>
					</Col>
					{text ? (
						<Col sm={12} md={12}>
							<Text>{text}</Text>
						</Col>
					) : null}
				</Row>
			</LeftWrapper>

			{actions ? <Actions actions={actions} /> : null}
		</Wrapper>
	);
};

const Actions = ({ actions }: { actions: any[] }) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "flex-end",
				alignItems: "center"
			}}
		>
			{actions.map((action: any, index: any) => (
				<span key={index} style={{ marginLeft: "15px" }}>
					{action}
				</span>
			))}
		</div>
	);
};
export default ListItem;
