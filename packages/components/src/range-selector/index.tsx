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
	value: number;
	onChange: (value: number) => void;
	disabled?: boolean;
	onFinalChange?: (value: number) => void;
	labelFormatter?: (value: string) => string;
	showLabel?: boolean;
	startLabel?: string;
	endLabel?: string;
	trackFilledColor?: string;
}

export const RangeSelector = ({
	min = 0,
	max = 10000,
	step = 100,
	value = 0,
	disabled = false,
	labelFormatter,
	trackFilledColor = COLORS.PRIMARY,
	onChange,
	onFinalChange,
	...rest
}: RangeSelector) => {
	const Track = React.forwardRef(
		(props: ITrackProps, ref: React.Ref<any>) => {
			return <StyledTrack {...{ ...props, trackRef: ref }} />;
		}
	);

	const handleChange = (values: number[]): void => {
		onChange(values[0]);
	};

	const handleFinalChange = (values: number[]): void => {
		onFinalChange && onFinalChange(values[0]);
	};

	return (
		<RangeSelectorWrapper>
			<Range
				disabled={disabled}
				step={step}
				min={min}
				max={max}
				values={[value]}
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
							value,
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
						{rest.showLabel ? (
							<StyledThumbLabel>
								{labelFormatter
									? labelFormatter(value.toString())
									: value.toString()}
							</StyledThumbLabel>
						) : null}
					</StyledThumb>
				)}
			/>
			<div>
				{rest.startLabel ? (
					<StartLabel>{rest.startLabel}</StartLabel>
				) : null}
				{rest.endLabel ? <EndLabel>{rest.endLabel}</EndLabel> : null}
			</div>
		</RangeSelectorWrapper>
	);
};

const RangeSelectorWrapper = styled.div`
	${GlobalStyles};
	padding: 30px;
`;

const StyledThumbLabel = styled.div`
	${GlobalStyles};
	bottom: 25px;
	padding: 1px 3px;
	color: ${COLORS.GREY1};
	position: absolute;
	display: inline-block;
	white-space: nowrap;
	background-color: ${COLORS.GREY4};
	padding: 6px;
	left: -10px;
	border-radius: 9px;
	font-size: 11px;
`;
const StartLabel = styled.div`
	position: absolute;
	left: -5px;
	background-color: ${COLORS.GREY4};
	padding: 5px;
	font-size: 10px;
	border-radius: 3px;
	float: left;
`;

const EndLabel = styled.div`
	position: absolute;
	right: -10px;
	background-color: ${COLORS.GREY4};
	padding: 5px;
	font-size: 10px;
	border-radius: 3px;
	float: right;
`;

export const StyledTrack = (props: IStyledTrack) => {
	return (
		<TrackWrapper
			onMouseDown={props.onMouseDown}
			onTouchStart={props.onTouchStart}
			style={props.style}
		>
			<TrackLine
				ref={props.trackRef}
				min={props.min}
				max={props.max}
				value={props.value}
				disabled={props.disabled}
				trackFilledColor={props.trackFilledColor}
			>
				{props.children}
			</TrackLine>
		</TrackWrapper>
	);
};

const TrackWrapper = styled.div`
	height: 36px;
	display: flex;
	width: 100%;
	position: relative;
`;
const TrackLine = styled.div<{
	value: number;
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
			values: [props.value],
			colors: [
				props.disabled ? COLORS.GREY3 : props.trackFilledColor,
				COLORS.GREY4
			],
			min: props.min,
			max: props.max
		})};
	align-self: center;
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

// RangeSelector.propTypes = {
// 	min: PropTypes.number,
// 	max: PropTypes.number,
// 	step: PropTypes.number,
// 	value: PropTypes.number,
// 	disabled: PropTypes.bool,
// 	onChange: PropTypes.func,
// 	onFinalChange: PropTypes.func,
// 	thumbLabel: PropTypes.string,
// 	showLabel: PropTypes.bool,
// 	startLabel: PropTypes.node,
// 	endLabel: PropTypes.node,
// 	trackFilledColor: PropTypes.string
// };

RangeSelector.defaultProps = {
	min: 0,
	max: 10000,
	step: 100,
	value: 0,
	disabled: false,
	showLabel: true,
	trackFilledColor: COLORS.PRIMARY
};

export default RangeSelector;
