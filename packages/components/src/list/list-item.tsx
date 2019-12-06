import * as React from "react";
import styled from "styled-components";
import Button from "../button";
import COLORS from "../__utils/Colors";
import Icon from "../icon";

export interface ListItemProps {
	icon?: string;
	iconColor?: string;
	title?: string;
	subtitle?: string;
	expandRight?: boolean;
	url?: string;
}

const Wrapper = styled.li`
	padding: 10px 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 1px solid ${COLORS.GREY4};
`;

const Title = styled.span`
	font-size: 18px;
	line-height: 18px;
`;

const Subtitle = styled.div`
	font-size: 16px;
	color: ${COLORS.GREY3};
`;
const LeftWrapper = styled.div`
	display: flex;
`;

export const ListItem = ({
	icon,
	iconColor,
	title,
	subtitle,
	expandRight,
	url
}: ListItemProps) => {
	return (
		<Wrapper>
			<LeftWrapper>
				{icon ? (
					<Icon
						name={icon}
						color={iconColor}
						style={{ marginRight: "10px" }}
					/>
				) : null}
				{title ? <Title>{title}</Title> : null}
				{subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
			</LeftWrapper>
			<Button btnType="link" href={url}>
				{expandRight ? <Icon name="keyboardarrowright" /> : null}
			</Button>
		</Wrapper>
	);
};

export default ListItem;
