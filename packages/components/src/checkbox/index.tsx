import * as React from "react";
import styled from "styled-components";
import { CheckboxIcon } from "./icon";
import { GlobalStyles } from "../app";
import COLORS from "../__utils/colors";
import { ChangeHandler } from "../__utils/type";

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
	${GlobalStyles};
	display: inline-block;
	vertical-align: middle;
`;

interface CheckboxProps {
	name?: string;
	checked: boolean;
	disabled?: boolean;
	indeterminate?: boolean;
	onChange?: ChangeHandler<boolean>;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	color?: string;
	outlineColor?: string;
	size?: number;
}

export const Checkbox: React.FC<CheckboxProps> = ({
	name,
	checked = false,
	disabled = false,
	onChange = () => {},
	className = "",
	children,
	style,
	indeterminate = false,
	color = COLORS.PRIMARY,
	outlineColor = COLORS.BLACK,
	size = 24
}: CheckboxProps) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked, e.target.name);
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
					name={name}
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
