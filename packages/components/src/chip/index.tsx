import * as React from "react";
import styled from "styled-components";
import Icon from "../icon";
import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

interface ChipProps {
	text: string;
	/** If true shows a tick*/
	done?: boolean;
	style?: React.CSSProperties;
}

export const Chip = ({ text, done, style }: ChipProps) => {
	return (
		<Wrapper style={style}>
			<Text done={done}>{text}</Text>
			{done ? (
				<Icon
					name="filled_done_circle"
					color={COLORS.PRIMARY}
					style={{ marginLeft: "10px" }}
				/>
			) : null}
		</Wrapper>
	);
};

const Wrapper = styled.span`
	${GlobalStyles};
	display: inline-flex;
	align-items: center;
	border: 1px solid ${COLORS.GREY4};
	border-radius: 40px;
	padding: 8px 12px;
`;
const Text = styled.span<{ done?: boolean }>`
	line-height: 1.43;
	letter-spacing: normal;
	color: ${COLORS.BLACK};
	font-weight: ${({ done }) => (done ? 500 : 400)};
`;
export default Chip;
