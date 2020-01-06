import * as React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./";
import styled from "styled-components";
import COLORS from "../__utils/colors";

const stories = storiesOf("Icon", module);

const Wrapper = styled.div`
	width: 150px;
	text-align: center;
	list-style: none;
	display: inline-block;
	margin-bottom: 40px;
`;
const IconWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;
const Caption = styled.p`
	color: ${COLORS.GREY2};
`;

stories.add(
	"default",
	() => {
		const props = {
			size: 48,
			color: COLORS.GREY1
		};
		return (
			<>
				<Wrapper>
					<IconWrapper>
						<Icon name="announcement" {...props} />
					</IconWrapper>
					<Caption>announcement</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="checkbox-outline" {...props} />
					</IconWrapper>
					<Caption>checkbox-outline</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="check-circle-outline" {...props} />
					</IconWrapper>
					<Caption>check-circle-outline</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="close" {...props} />
					</IconWrapper>
					<Caption>close</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="error-outline" {...props} />
					</IconWrapper>
					<Caption>error-outline</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="info" {...props} />
					</IconWrapper>
					<Caption>info</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="keyboard-arrow-down" {...props} />
					</IconWrapper>
					<Caption>keyboard-arrow-down</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="keyboard-arrow-right" {...props} />
					</IconWrapper>
					<Caption>keyboard-arrow-right</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="outline-done" {...props} />
					</IconWrapper>
					<Caption>notification-important</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="outline-sort" {...props} />
					</IconWrapper>
					<Caption>outline-sort</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="settings" {...props} />
					</IconWrapper>
					<Caption>settings</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="warning" {...props} />
					</IconWrapper>
					<Caption>warning</Caption>
				</Wrapper>
				<Wrapper>
					<IconWrapper>
						<Icon name="sales" {...props} />
					</IconWrapper>
					<Caption>sales</Caption>
				</Wrapper>
			</>
		);
	},
	{
		info: {
			propTables: [Icon]
		}
	}
);
