import * as React from "react";
import styled from "styled-components";

import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

export interface ProgressBarProps {
	progress: number;
	title?: string;
	showProgressPercent?: boolean;
}

export type Progress = {
	progress: number;
};

export type TitleExist = {
	titleExist: boolean;
};

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
	margin-top: 10px;
	margin-bottom: 10px;
	float: left;
	width: 100%;
`;

const ProgressLine = styled.div<Progress>`
	background: ${COLORS.GREEN1};
	height: inherit;
	border-radius: 4px 4px 4px 4px;
	-webkit-transition: 0.3s ease;
	-moz-transition: 0.3s ease;
	-ms-transition: 0.3s ease;
	-o-transition: 0.3s ease;
	width: ${props => props.progress}%;
`;

const ProgressBarLeftText = styled.span`
	float: left;
	font-size: 20px;
	color: ${COLORS.GREY6};
`;

const ProgressBarRightText = styled.span<TitleExist>`
	float: right;
	color: ${COLORS.BLACK1};
	position: relative;
	top: ${props => (props.titleExist ? "5" : "0")}px;
`;

const ProgressBarWrapper = styled.div`
	${GlobalStyles};
	position: realtive;
`;

const ProgressBox = styled.div`
	border-radius: 4px 4px 4px 4px;
	background: ${COLORS.GREY5};
	height: 6px;
	margin-top: -6px;
	overflow: hidden;
	float: left;
	width: 100%;
`;

export default ProgressBar;
