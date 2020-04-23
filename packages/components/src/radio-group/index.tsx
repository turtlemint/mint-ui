import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";
import { tuple, Omit, ChangeHandler, BlurHandler } from "../__utils/type";
import { GlobalStyles } from "../app";

const Size = tuple("large", "small", "default");
type ButtonSize = typeof Size[number];
const Layout = tuple("vertical", "default");
type ButtonLayout = typeof Layout[number];
const BtnType = tuple("outline", "solid", "radio");
type ButtonType = typeof BtnType[number];
type ValueType = string | number;

interface RadioGroupProps {
	name?: string;
	disabled?: boolean;
	size?: ButtonSize;
	layout?: ButtonLayout;
	value?: ValueType;
	onChange?: ChangeHandler<ValueType>;
	onBlur?: BlurHandler<ValueType>;
	buttonStyle?: ButtonType;
	radios: ButtonProps[];
}

export const RadioGroup = ({
	name = "",
	size,
	layout,
	value = "",
	onChange = () => {},
	onBlur = () => {},
	buttonStyle,
	radios,
	disabled,
	...rest
}: RadioGroupProps) => {
	const [selectedValue, setSelectedValue] = React.useState<ValueType>(value);
	const previousVal = React.useRef<any>(value);

	const handleClick = (val: ValueType) => {
		setSelectedValue(val);
		onChange(val, name);
		onBlur(val);
		previousVal.current = val;
	};

	return (
		<Wrapper
			{...rest}
			tabIndex={0}
			ref={() => (previousVal.current = value)}
			disabled={disabled}
			layout={layout}
			onBlur={() => onBlur(previousVal.current)}
		>
			{radios.map((child: ButtonProps, idx: number) => (
				<Button
					key={idx}
					text={child.text}
					value={child.value}
					onClick={handleClick}
					activeValue={selectedValue}
					buttonStyle={buttonStyle}
					size={size}
					disabled={disabled ?? child.disabled}
				/>
			))}
		</Wrapper>
	);
};

const Wrapper = styled.div<{ disabled?: boolean; layout?: ButtonLayout }>`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	outline: none;
	${({ layout }) =>
		layout === "vertical" &&
		css`
			border: 0;
			flex-direction: column;
			align-items: flex-start;
		`}
`;

const RadioIcon = styled.span<{ isActive?: boolean; size?: ButtonSize }>`
	height: 14px;
	width: 14px;
	margin-right: 12px;
	border-radius: 50%;
	border: 2px solid ${COLORS.GREY3};
	display: inline-flex;
	justify-content: center;
	align-items: center;
	vertical-align: middle;
	${({ isActive }) =>
		isActive &&
		css`
			border: 2px solid ${COLORS.PRIMARY};
			span {
				height: 10px;
				width: 10px;
				border-radius: 50%;
				background: ${COLORS.PRIMARY};
			}
		`}
	${({ size }) =>
		size === "small" &&
		css`
			height: 12px;
			width: 12px;
		`};
	${({ size, isActive }) =>
		size === "small" &&
		isActive &&
		css`
			span {
				height: 8px;
				width: 8px;
			}
		`};
	${({ size }) =>
		size === "large" &&
		css`
			height: 16px;
			width: 16px;
		`};
	${({ size, isActive }) =>
		size === "large" &&
		isActive &&
		css`
			span {
				height: 12px;
				width: 12px;
			}
		`};
`;

interface ButtonProps {
	text: string;
	value: ValueType;
	activeValue?: ValueType;
	size?: ButtonSize;
	buttonStyle?: ButtonType;
	disabled?: boolean;
	onClick?: (val: ValueType) => void;
}

const Button = ({
	text,
	value,
	activeValue = "",
	size,
	buttonStyle,
	onClick,
	disabled = false
}: ButtonProps) => {
	const handleClick = () => {
		onClick ? onClick(value) : null;
	};
	return (
		<Label
			size={size}
			isActive={activeValue === value}
			buttonStyle={buttonStyle}
			onClick={handleClick}
			disabled={disabled}
		>
			{buttonStyle == "radio" && (
				<RadioIcon isActive={activeValue === value} size={size}>
					<span></span>
				</RadioIcon>
			)}
			{text}
		</Label>
	);
};

interface LabelProps {
	isActive?: boolean;
	size?: ButtonSize;
	buttonStyle?: ButtonType;
	disabled: boolean;
	onClick: (val: string) => void;
}

const Label = styled.label<Omit<LabelProps, "onClick">>`
	${GlobalStyles};
	padding: 8px 15px;
	font-size: 14px;
	border: 1px solid ${COLORS.GREY4};
	border-right: 0;
	color: ${COLORS.GREY1};
	cursor: pointer;
	&:hover {
		color: ${COLORS.PRIMARY};
	}
	transition: color 0.3s 0s ease-in;
	:first-child {
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
	}
	:last-child {
		border-right: 1px solid ${COLORS.GREY4};
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
	}

	${({ isActive }) =>
		isActive &&
		css`
			+ .radio-button {
				border-left: 0;
			}
			border-right: 1px solid;
			border-color: ${COLORS.PRIMARY};
			color: ${COLORS.PRIMARY};
			:last-child {
				border-color: ${COLORS.PRIMARY};
			}
			:hover {
				color: ${COLORS.PRIMARY_LIGHT};
			}
		`};

	${({ size }) =>
		size === "small" &&
		css`
			padding: 4px 8px;
			font-size: 12px;
		`};
	${({ size }) =>
		size === "large" &&
		css`
			padding: 12px 17px;
			font-size: 16px;
		`};

	${({ isActive, buttonStyle }) =>
		isActive &&
		buttonStyle === "solid" &&
		css`
			border-color: transparent;
			background: ${COLORS.PRIMARY};
			color: ${COLORS.WHITE};
			&:hover {
				color: ${COLORS.WHITE};
				background: ${COLORS.PRIMARY_LIGHT};
			}
		`}

	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none;
			background: ${COLORS.BACKGROUND_GREY};
			color: ${COLORS.DISABLED};
			border-color: ${COLORS.GREY4};
		`}

	${({ buttonStyle }) =>
		buttonStyle === "radio" &&
		css`
			display: flex;
			align-items: center;
			border: none;
			border-right: none;
			padding-left: 24px;
			:last-child {
				border-right: none;
			}
		`}
	
`;

export default RadioGroup;
