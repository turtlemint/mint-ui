import * as React from "react";
import { RangeSelector } from "./index";
import styled from "styled-components";
import { GlobalStyles } from "../app";
import COLORS from "../__utils/colors";

export default {
	title: "RangeSelector",
	component: RangeSelector,
	parameters: {
		componentSubtitle: "CustomLabel"
	}
};

export const CustomLabel = () => {
	const StyledLabel = styled.div`
		${GlobalStyles};
		bottom: 25px;
		padding: 1px 3px;
		color: ${COLORS.GREY1};
		position: absolute;
		display: inline-block;
		white-space: nowrap;
		background-color: ${COLORS.GREY4};
		padding: 6px;
		left: -15px;
		border-radius: 9px;
		font-size: 11px;
	`;

	return (
		<RangeSelector
			value={75}
			thumbLabel={(value: number) => {
				return <StyledLabel>{(value * 1000).toFixed(2)} </StyledLabel>;
			}}
		/>
	);
};

export const BigStep = () => {
	const props = {
		min: 0,
		max: 100,
		step: 10,
		value: 50
	};

	return (
		<div>
			<RangeSelector {...props} />
		</div>
	);
};
export const Basic = () => <RangeSelector />;

export const Disabled = () => <RangeSelector disabled={true} value={25} />;

export const WithoutLabel = () => (
	<RangeSelector value={75} showLabel={false} />
);

export const StartAndEndLabel = () => {
	const StartLabel = styled.div`
		position: relative;
		left: -15px;
		background-color: ${COLORS.GREY4};
		padding: 5px;
		font-size: 10px;
		border-radius: 3px;
	`;

	const EndLabel = styled.div`
		right: -10px;
		background-color: ${COLORS.GREY4};
		padding: 5px;
		font-size: 10px;
		border-radius: 3px;
	`;

	return (
		<RangeSelector
			value={75}
			startLabel={<StartLabel>START: 0</StartLabel>}
			endLabel={<EndLabel>END: 100</EndLabel>}
		/>
	);
};

export const CustomTrackColor = () => {
	const StyledLabel = styled.div`
		${GlobalStyles};
		bottom: 25px;
		padding: 1px 3px;
		color: ${COLORS.GREY1};
		position: absolute;
		display: inline-block;
		white-space: nowrap;
		background-color: ${COLORS.GREY4};
		padding: 6px;
		left: -15px;
		border-radius: 9px;
		font-size: 11px;
	`;

	return (
		<RangeSelector
			value={75}
			thumbLabel={(value: number) => {
				return <StyledLabel>{(value * 1000).toFixed(2)} </StyledLabel>;
			}}
			trackFilledColor={COLORS.PICTON_BLUE}
		/>
	);
};
