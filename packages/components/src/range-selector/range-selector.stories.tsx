import * as React from "react";
import { RangeSelector } from "./index";
import styled from "styled-components";
import { GlobalStyles } from "../app";

export default {
	title: "RangeSelector",
	component: RangeSelector
};

export const BasicRangeSelectorBasic = () => <RangeSelector />;

export const RangeSelectorWithBigStep = () => {
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

export const RangeSelectorDisabled = () => (
	<RangeSelector disabled={true} value={25} />
);

export const RangeSelectorWithoutLabel = () => (
	<RangeSelector value={75} showLabel={false} />
);

export const RangeSelectorWithCustomLabel = () => {
	const StyledLabel = styled.div`
		${GlobalStyles};
		bottom: 25px;
		padding: 1px 3px;
		color: #55637d;
		cursor: default;
		position: absolute;
		display: inline-block;
		white-space: nowrap;
		background-color: #d4d4d4;
		padding: 6px;
		left: -15px;
		border-radius: 9px;
		font-size: 11px;
	`;

	return (
		<RangeSelector
			value={75}
			thumbLabel={(value: number) => {
				return <StyledLabel>{value * 1000} </StyledLabel>;
			}}
		/>
	);
};
