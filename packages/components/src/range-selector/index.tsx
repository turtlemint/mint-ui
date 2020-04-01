import * as React from "react";
import styled from "styled-components";
import { Range, getTrackBackground } from "react-range";

// import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

export interface RangeSelector {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	disabled?: boolean;
	onChange?: (value: number) => void;
	onFinalChange?: (value: number) => void;
}

export const RangeSelector = ({
	min = 0,
	max = 100,
	step = 1,
	value = 0,
	disabled = true,
	...rest
}: RangeSelector) => {
	let [localValue, setLocalValue] = React.useState(value);

	const Track = React.forwardRef((props: any, ref: any) => {
		return <StylesTrack {...{ ...props, trackRef: ref }} />;
		// return (
		// 	<div
		// 		onMouseDown={props.onMouseDown}
		// 		onTouchStart={props.onTouchStart}
		// 		style={{
		// 			...props.style,
		// 			height: "36px",
		// 			display: "flex",
		// 			width: "100%"
		// 		}}
		// 	>
		// 		<div
		// 			ref={ref}
		// 			style={{
		// 				height: "8px",
		// 				width: "100%",
		// 				borderRadius: "4px",
		// 				background: getTrackBackground({
		// 					values: [localValue],
		// 					colors: ["#417ffd", "#dfe3e9"],
		// 					min: min,
		// 					max: max
		// 				}),
		// 				alignSelf: "center"
		// 			}}
		// 		>
		// 			{props.children}
		// 		</div>
		// 	</div>
		// )
	});

	const handleChange = (values: number[]) => {
		setLocalValue(values[0]);
		rest.onChange && rest.onChange(localValue);
	};

	const handleFinalChange = (values: number[]) => {
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
			renderTrack={({ props, children }) => (
				<Track
					ref={props.ref}
					{...{ ...props, children, min, max, localValue }}
				/>
			)}
			renderThumb={({ props }) => <Thumb {...{ ...props, localValue }} />}
		/>
	);
};

export const StylesTrack = (props: any) => {
	return (
		<TrackWrapper
			onMouseDown={props.onMouseDown}
			onTouchStart={props.onTouchStart}
			style={{ ...props.style }}
		>
			{/* <div
				ref={props.ref}
				style={{
					height: "8px",
					width: "100%",
					borderRadius: "4px",
					background: getTrackBackground({
						values: [props.localValue],
						colors: ["#417ffd", "#dfe3e9"],
						min: props.min,
						max: props.max
					}),
					alignSelf: "center"
				}}
			>
				{props.children}
			</div> */}
			{
				<TrackLine
					ref={props.trackRef}
					min={props.min}
					max={props.max}
					localValue={props.localValue}
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
}>`
	height: 8px;
	width: 100%;
	border-radius: 4px;
	background: ${props =>
		getTrackBackground({
			values: [props.localValue],
			colors: ["#548BF4", "#ccc"],
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

const Thumb = React.forwardRef((props: any) => {
	return (
		<StyledThumb
			{...props}
			style={{
				...props.style
			}}
		>
			<StyledThumbText>{props.localValue} Lakhs</StyledThumbText>
		</StyledThumb>
	);
});

const StyledThumb = styled.div`
	width: 20px;
	height: 20px;
	background: #fff;
	box-shadow: 0 2px 4px 0 rgba(140, 140, 140, 0.3),
		0 -2px 4px 0 rgba(140, 140, 140, 0.2);
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
	padding: 1px 3px;
	color: #55637d;
	cursor: default;
	position: absolute;
	display: inline-block;
	white-space: nowrap;
	font-size: 16px;
	bottom: 26px;
	right: -21px;
`;

RangeSelector.defaultProps = {
	min: 0,
	max: 100,
	step: 1,
	value: 0,
	disabled: false
};

export default RangeSelector;
