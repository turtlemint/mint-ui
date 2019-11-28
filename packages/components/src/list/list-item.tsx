import * as React from "react";
import styled from "styled-components";
import Button from "../button";
import COLORS from "../__utils/colors";
import ExpandRight from "../icons/expand-right";

export interface ListItemProps {
	icon?: React.CElement<any, any>;
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

export const ListItem = ({
	icon,
	title,
	subtitle,
	expandRight,
	url
}: ListItemProps) => {
	return (
		<Wrapper>
			<div>
				{icon ? (
					<span style={{ marginRight: "10px" }}>{icon}</span>
				) : null}
				<Title>{title}</Title>
				{subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
			</div>
			<Button btnType="link" href={url}>
				{expandRight ? <ExpandRight /> : null}
			</Button>
		</Wrapper>
	);
};
