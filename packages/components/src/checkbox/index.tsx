import * as React from "react";
import styled from "styled-components";
import { CheckboxIcon } from "./icon";
import { Colors } from "@turtlemint/core";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
	// Hide checkbox visually but remain accessible to screen readers.
	// Source: https://polished.js.org/docs/#hidevisually
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
	box-sizing: border-box;
`;

interface CheckboxProps {
	checked: boolean;
	disabled?: boolean;
	indeterminate?: boolean;
	onChange?: (val: boolean) => void;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	color?: string;
	outlineColor?: string;
	size?: number;
}

const Checkbox: React.FC<CheckboxProps> = ({
	checked = false,
	disabled = false,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	onChange = (val: boolean): void => {},
	className = "",
	children,
	style,
	indeterminate = false,
	color = Colors.PRIMARY,
	outlineColor = Colors.BLACK,
	size = 24
}: CheckboxProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked);
	};
	const inputEl = React.useRef<HTMLInputElement>(null);
	React.useEffect(() => {
		if (inputEl.current) {
			inputEl.current.indeterminate = indeterminate;
		}
	}, [indeterminate]);
	return (
		<label>
			<CheckboxContainer className={className} style={style}>
				<HiddenCheckbox
					checked={checked}
					onChange={handleChange}
					disabled={disabled}
					ref={inputEl}
					aria-label="tm-checkbox"
				/>
				<CheckboxIcon
					size={size}
					color={color}
					outlineColor={outlineColor}
					checked={checked}
					indeterminate={indeterminate}
				/>
			</CheckboxContainer>
			{children !== undefined && (
				<span style={{ marginLeft: 8 }}>{children}</span>
			)}
		</label>
	);
};

export default Checkbox;
