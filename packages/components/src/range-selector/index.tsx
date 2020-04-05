import * as React from "react";
import styled from "styled-components";
import { Range, getTrackBackground } from "react-range";

import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

import {
	IRangeSelector,
	ITrackProps,
	IStyledTrack,
	IRenderTrackCallbackProps,
	IRenderThumbCallbackProps
} from "./interfaces";

export const RangeSelector = ({
	min = 0,
	max = 100,
	step = 0.1,
	value = 0,
	disabled = true,
	thumbLabel = (value: number) => <StyledThumbText>{value}</StyledThumbText>,
	...rest
}: IRangeSelector) => {
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
					{...{ ...props, children, min, max, localValue, disabled }}
				/>
			)}
			renderThumb={({
				props
			}: {
				props: IRenderThumbCallbackProps;
			}): React.ReactNode => (
				<StyledThumb key={props.key}>
					{/* Thumb Label */}
					{rest.showLabel && thumbLabel(localValue)}
				</StyledThumb>
			)}
		/>
	);
};

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
}>`
	height: 8px;
	width: 100%;
	border-radius: 4px;
	background: ${props =>
		getTrackBackground({
			values: [props.localValue],
			colors: [
				props.disabled ? "#999" : COLORS.PRIMARY,
				COLORS.BACKGROUND_GREY
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

const StyledThumb = styled.div`
	width: 20px;
	height: 20px;
	background: ${COLORS.BACKGROUND_GREY};
	box-shadow: 0 2px 4px 0 ${COLORS.BACKGROUND_GREEN},
		0 -2px 4px 0 ${COLORS.BACKGROUND_GREEN};
	z-index: 3;
	border-radius: 16px;
	cursor: pointer;
	position: absolute;
	display: inline-block;
	white-space: nowrap;
`;

const StyledThumbText = styled.div`
	${GlobalStyles};
	bottom: 16px;
	color: #55637d;
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
		<StyledThumbText>{value}</StyledThumbText>
	)
};

export default RangeSelector;
