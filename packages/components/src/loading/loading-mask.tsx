import * as React from "react";
import Icon from "../icon";
import styled from "styled-components";
import COLORS from "../__utils/colors";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	background-color: rgba(255, 255, 255, 0.65);
	svg {
		-webkit-animation: rotation 2s infinite linear;
		animation: rotation 2s infinite linear;
	}
	@keyframes rotation {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(359deg);
		}
	}
`;
interface Props {
	icon?: string;
}

const LoadingMask = ({ icon = "refresh" }: Props) => (
	<Wrapper>
		<Icon name={icon} color={COLORS.PICTON_BLUE} />
	</Wrapper>
);

export default LoadingMask;
