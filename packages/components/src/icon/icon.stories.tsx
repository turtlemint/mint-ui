import * as React from "react";
import Icon from "./";
import styled from "styled-components";
import COLORS from "../__utils/colors";

const Wrapper = styled.div`
	width: 170px;
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

export default {
	title: "Icon",
	component: Icon
};

export const allIcons = () => {
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
					<Icon name="checkbox_outline" {...props} />
				</IconWrapper>
				<Caption>checkbox_outline</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="check_circle_outline" {...props} />
				</IconWrapper>
				<Caption>check_circle_outline</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="close" {...props} />
				</IconWrapper>
				<Caption>close</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="error_outline" {...props} />
				</IconWrapper>
				<Caption>error_outline</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="info" {...props} />
				</IconWrapper>
				<Caption>info</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="keyboard_arrow_left" {...props} />
				</IconWrapper>
				<Caption>keyboard_arrow_left</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="keyboard_arrow_up" {...props} />
				</IconWrapper>
				<Caption>keyboard_arrow_up</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="keyboard_arrow_right" {...props} />
				</IconWrapper>
				<Caption>keyboard_arrow_right</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="keyboard_arrow_down" {...props} />
				</IconWrapper>
				<Caption>keyboard_arrow_down</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="notification_important" {...props} />
				</IconWrapper>
				<Caption>notification_important</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="sort" {...props} />
				</IconWrapper>
				<Caption>sort</Caption>
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
					<Icon name="arrow_back" {...props} />
				</IconWrapper>
				<Caption>arrow_back</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="bike" {...props} />
				</IconWrapper>
				<Caption>bike</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="car" {...props} />
				</IconWrapper>
				<Caption>car</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="health" {...props} />
				</IconWrapper>
				<Caption>health</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="life" {...props} />
				</IconWrapper>
				<Caption>life</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="truck" {...props} />
				</IconWrapper>
				<Caption>truck</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="sales" {...props} />
				</IconWrapper>
				<Caption>sales</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="more_horiz" {...props} />
				</IconWrapper>
				<Caption>more_horiz</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="fast_forward" {...props} />
				</IconWrapper>
				<Caption>fast_forward</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="filled_done_circle" {...props} />
				</IconWrapper>
				<Caption>filled_done_circle</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="fast_rewind" {...props} />
				</IconWrapper>
				<Caption>fast_rewind</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="refresh" {...props} />
				</IconWrapper>
				<Caption>refresh</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="add_circle_outline" {...props} />
				</IconWrapper>
				<Caption>add_circle_outline</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="cancel" {...props} />
				</IconWrapper>
				<Caption>cancel</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="lock" {...props} />
				</IconWrapper>
				<Caption>lock</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="mint_pro" {...props} />
				</IconWrapper>
				<Caption>mint_pro</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="rating_1" {...props} />
				</IconWrapper>
				<Caption>rating_1</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="rating_2" {...props} />
				</IconWrapper>
				<Caption>rating_2</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="rating_3" {...props} />
				</IconWrapper>
				<Caption>rating_3</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="rating_4" {...props} />
				</IconWrapper>
				<Caption>rating_4</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="rating_5" {...props} />
				</IconWrapper>
				<Caption>rating_5</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="rating_filled_1" {...props} />
				</IconWrapper>
				<Caption>rating_filled_1</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="rating_filled_2" {...props} />
				</IconWrapper>
				<Caption>rating_filled_2</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="rating_filled_3" {...props} />
				</IconWrapper>
				<Caption>rating_filled_3</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="rating_filled_4" {...props} />
				</IconWrapper>
				<Caption>rating_filled_4</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="rating_filled_5" {...props} />
				</IconWrapper>
				<Caption>rating_filled_5</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="send" {...props} />
				</IconWrapper>
				<Caption>send</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="sentiment_dissatisfied" {...props} />
				</IconWrapper>
				<Caption>sentiment_dissatisfied</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="sentiment_satisfied" {...props} />
				</IconWrapper>
				<Caption>sentiment_satisfied</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="call" {...props} />
				</IconWrapper>
				<Caption>call</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="email" {...props} />
				</IconWrapper>
				<Caption>email</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="search" {...props} />
				</IconWrapper>
				<Caption>search</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="report" {...props} />
				</IconWrapper>
				<Caption>report</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="attachment" {...props} />
				</IconWrapper>
				<Caption>attachment</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="cloud_download" {...props} />
				</IconWrapper>
				<Caption>cloud_download</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="calendar" {...props} />
				</IconWrapper>
				<Caption>calendar</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="add_circle_filled" {...props} />
				</IconWrapper>
				<Caption>add_circle_filled</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="gold" {...props} />
				</IconWrapper>
				<Caption>gold</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="loans" {...props} />
				</IconWrapper>
				<Caption>loans</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="mutual_funds" {...props} />
				</IconWrapper>
				<Caption>mutual_funds</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="something_else" {...props} />
				</IconWrapper>
				<Caption>something_else</Caption>
			</Wrapper>
			<Wrapper>
				<IconWrapper>
					<Icon name="mobile" {...props} />
				</IconWrapper>
				<Caption>mobile</Caption>
			</Wrapper>
		</>
	);
};
