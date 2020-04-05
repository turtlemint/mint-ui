import * as React from "react";
import styled from "styled-components";
import { Range, getTrackBackground } from "react-range";

import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

import {
	ITrackProps,
	IStyledTrack,
	IRenderTrackCallbackProps,
	IRenderThumbCallbackProps
} from "./interfaces";

export interface RangeSelector {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	disabled?: boolean;
	onChange?: (value: number) => void;
	onFinalChange?: (value: number) => void;
	thumbLabel?: (value: number) => JSX.Element;
	showLabel?: boolean;
	startLabel?: React.ReactNode;
	endLabel?: React.ReactNode;
	trackFilledColor?: string;
}

export const RangeSelector = ({
	min = 0,
	max = 100,
	step = 0.1,
	value = 0,
	disabled = false,
	thumbLabel = (value: number) => (
		<StyledThumbLable>{value}</StyledThumbLable>
	),
	trackFilledColor = COLORS.PRIMARY,
	...rest
}: RangeSelector) => {
	let [localValue, setLocalValue] = React.useState(value);

	const Track = React.forwardRef(
		(props: ITrackProps, ref: React.Ref<any>) => {
			return <StyledTrack {...{ ...props, trackRef: ref }} />;
		}
	);

	const handleChange = (values: number[]): void => {
		setLocalValue(values[0]);
		rest.onChange && rest.onChange(localValue);
	};

	const handleFinalChange = (values: number[]): void => {
		rest.onFinalChange && rest.onFinalChange(values[0]);
	};

	return (
		<RangeSelectorWrapper>
			<Range
				disabled={disabled}
				step={step}
				min={min}
				max={max}
				values={[localValue]}
				onChange={handleChange}
				onFinalChange={handleFinalChange}
				renderTrack={({
					props,
					children
				}: {
					props: IRenderTrackCallbackProps;
					children: React.ReactNode;
				}): React.ReactNode => (
					<Track
						ref={props.ref}
						{...{
							...props,
							children,
							min,
							max,
							localValue,
							disabled,
							trackFilledColor
						}}
					/>
				)}
				renderThumb={({
					props
				}: {
					props: IRenderThumbCallbackProps;
				}): React.ReactNode => (
					<StyledThumb key={props.key} disabled>
						{/* Thumb Label */}
						{rest.showLabel && thumbLabel(localValue)}
					</StyledThumb>
				)}
			/>
			<div>
				{rest.startLabel && <StartLabel>{rest.startLabel}</StartLabel>}
				{rest.startLabel && <EndLabel>{rest.endLabel}</EndLabel>}
			</div>
		</RangeSelectorWrapper>
	);
};

const RangeSelectorWrapper = styled.div`
	${GlobalStyles};
`;

const StartLabel = styled.div`
	position: relative;
	float: left;
`;

const EndLabel = styled.div`
	position: relative;
	float: right;
`;

export const StyledTrack = (props: IStyledTrack) => {
	return (
		<TrackWrapper
			onMouseDown={props.onMouseDown}
			onTouchStart={props.onTouchStart}
			style={{ ...props.style }}
		>
			{
				<TrackLine
					ref={props.trackRef}
					min={props.min}
					max={props.max}
					localValue={props.localValue}
					disabled={props.disabled}
					trackFilledColor={props.trackFilledColor}
				>
					{props.children}
				</TrackLine>
			}
		</TrackWrapper>
	);
};

const TrackLine = styled.div<{
	localValue: number;
	min: number;
	max: number;
	disabled: boolean;
	trackFilledColor: string;
}>`
	height: 8px;
	width: 100%;
	border-radius: 4px;
	background: ${props =>
		getTrackBackground({
			values: [props.localValue],
			colors: [
				props.disabled ? COLORS.GREY3 : props.trackFilledColor,
				COLORS.GREY5
			],
			min: props.min,
			max: props.max
		})};
	align-self: center;
`;

const TrackWrapper = styled.div`
	height: 36px;
	display: flex;
	width: 100%;
`;

const StyledThumb = styled.div<{
	disabled: boolean;
}>`
	width: 20px;
	height: 20px;
	background: ${COLORS.WHITE};
	box-shadow: 0 0px 2px 0 ${COLORS.GREY2}, 0 0px 2px 0 ${COLORS.GREY2};
	z-index: 3;
	border-radius: 16px;
	cursor: ${props => (props.disabled ? null : "pointer")};
	position: absolute;
	display: inline-block;
	white-space: nowrap;
`;

const StyledThumbLable = styled.div`
	${GlobalStyles};
	bottom: 16px;
	cursor: default;
	position: absolute;
	display: inline-block;
	white-space: nowrap;
	font-size: 16px;
	bottom: 26px;
`;

RangeSelector.defaultProps = {
	min: 0,
	max: 100,
	step: 0.1,
	value: 0,
	disabled: false,
	showLabel: true,
	thumbLabel: (value: number): React.ReactNode => (
		<StyledThumbLable>{value}</StyledThumbLable>
	),
	trackFilledColor: COLORS.PRIMARY
};

export default RangeSelector;
