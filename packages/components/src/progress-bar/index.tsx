import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

export interface ProgressBarProps {
	progress: number;
	title?: string;
	showProgressPercent?: boolean;
}

export const ProgressBar = ({
	progress = 0,
	title,
	showProgressPercent = true
}: ProgressBarProps) => {
	return (
		<ProgressBarWrapper>
			<ProgressTitleWrapper>
				{title && <ProgressBarLeftText>{title}</ProgressBarLeftText>}
				{showProgressPercent && (
					<ProgressBarRightText titleExist={!!title}>
						<span>{progress}% Complete</span>
					</ProgressBarRightText>
				)}
			</ProgressTitleWrapper>

			<ProgressBox>
				<ProgressLine progress={progress} />
			</ProgressBox>
		</ProgressBarWrapper>
	);
};

const ProgressTitleWrapper = styled.div`
	font-size: 14px;
	margin: 10px 0px;
	width: 100%;
	overflow: hidden;
`;

const ProgressLine = styled.div<{
	progress: number;
}>`
	background: ${COLORS.PRIMARY};
	height: inherit;
	border-radius: 4px;
	transition: 0.3s ease;
	-webkit-transition: 0.3s ease;
	-moz-transition: 0.3s ease;
	-ms-transition: 0.3s ease;
	-o-transition: 0.3s ease;
	width: ${props => props.progress}%;
`;

const ProgressBarLeftText = styled.span`
	float: left;
	font-size: 20px;
	color: ${COLORS.GREY3};
`;

const ProgressBarRightText = styled.span<{
	titleExist: boolean;
}>`
	float: right;
	color: ${COLORS.GREY1};
	position: relative;
	top: ${props => (props.titleExist ? "5" : "0")}px;
`;

const ProgressBarWrapper = styled.div`
	${GlobalStyles};
	position: relative;
`;

const ProgressBox = styled.div`
	border-radius: 4px;
	background: ${COLORS.GREY4};
	height: 6px;
	overflow: hidden;
	width: 100%;
`;

ProgressBar.propTypes = {
	progress: PropTypes.number,
	title: PropTypes.string,
	showProgressPercent: PropTypes.bool
};

ProgressBar.defaultProps = {
	progress: 0,
	title: "",
	showProgressPercent: true
};

export default ProgressBar;
