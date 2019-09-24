import React from "react";
import PALETTE from "../__utils/colors";

interface CheckboxProps {
	size?: number;
	color?: string;
	outlineColor?: string;
	checked: boolean;
	indeterminate?: boolean;
}

export const CheckboxIcon: React.FC<CheckboxProps> = ({
	size = 24,
	color = PALETTE.PRIMARY,
	outlineColor = PALETTE.BLACK,
	checked = false,
	indeterminate = false
}: CheckboxProps) => {
	const styles = {
		svg: {
			display: "inline-block",
			verticalAlign: "middle"
		},
		checkedGroup: {
			opacity: 0.64
		}
	};
	return (
		<svg
			width={`${size}px`}
			height={`${size}px`}
			viewBox="0 0 24 24"
			style={styles.svg}
		>
			{!checked ? (
				<g style={styles.checkedGroup}>
					<path
						fill={outlineColor}
						d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
					/>
					<path d="M0 0h24v24H0z" fill="none" />
				</g>
			) : null}
			{checked && !indeterminate ? (
				<g>
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						fill={color}
						d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
					/>
				</g>
			) : null}
			{checked && indeterminate ? (
				<g>
					<defs>
						<path id="a" d="M0 0h24v24H0z" />
					</defs>
					<clipPath id="b">
						<use href="#a" overflow="visible" />
					</clipPath>
					<path
						fill={color}
						clipPath="url(#b)"
						d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
					/>
				</g>
			) : null}
		</svg>
	);
};

export default CheckboxIcon;
