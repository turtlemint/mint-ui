import * as React from "react";

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
