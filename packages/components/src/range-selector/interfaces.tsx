import * as React from "react";

export interface IRangeSelector {
	min?: number;
	max?: number;
	step?: number;
	value?: number;
	disabled?: boolean;
	onChange?: (value: number) => void;
	onFinalChange?: (value: number) => void;
	thumbLabel?: (value: number) => JSX.Element;
	showLabel: boolean;
}

export interface ITrackProps {
	min: number;
	max: number;
	localValue: number;
	disabled: boolean;
	children: React.ReactNode;

	onMouseDown: (e: React.MouseEvent) => void;
	onTouchStart: (e: React.TouchEvent) => void;
	style: React.CSSProperties;
}

export interface IStyledTrack extends ITrackProps {
	trackRef: React.Ref<any>;
}

export interface IRenderTrackCallbackProps {
	onMouseDown: (e: React.MouseEvent) => void;
	onTouchStart: (e: React.TouchEvent) => void;
	style: React.CSSProperties;
	ref: React.RefObject<any>;
}

export interface IRenderThumbCallbackProps {
	"key": number;
	"style": React.CSSProperties;
	"tabIndex"?: number;
	"aria-valuemax": number;
	"aria-valuemin": number;
	"aria-valuenow": number;
	"draggable": boolean;
	"role": string;
	"onKeyDown": (e: React.KeyboardEvent) => void;
	"onKeyUp": (e: React.KeyboardEvent) => void;
}
