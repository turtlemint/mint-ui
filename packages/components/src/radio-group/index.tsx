import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";
import { tuple, Omit } from "../__utils/type";
import "../app.css";

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

interface LabelProps {
	isActive?: boolean;
	size?: ButtonSize;
	buttonStyle?: ButtonType;
	disabled: boolean;
	onClick: (val: string) => void;
}

const Label = styled.label<Omit<LabelProps, "onClick">>`
	padding: 8px 15px;
	font-size: 16px;
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
	:focus-within {
		outline: 3px solid rgba(24, 144, 255, 0.06);
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
			font-size: 14px;
		`};
	${({ size }) =>
		size === "large" &&
		css`
			padding: 12px 17px;
			font-size: 18px;
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
		`}
`;

interface ButtonProps {
	value: ValueType;
	activeValue?: ValueType;
	size?: ButtonSize;
	buttonStyle?: ButtonType;
	children: string;
	disabled?: boolean;
	onClick?: (val: ValueType) => void;
}

const Button = ({
	value,
	activeValue = "",
	size,
	buttonStyle,
	onClick,
	disabled = false,
	children
}: ButtonProps) => {
	const handleClick = () => {
		onClick ? onClick(value) : null;
	};
	return (
		<>
			<Label
				className="radio-button"
				size={size}
				isActive={activeValue === value}
				buttonStyle={buttonStyle}
				onClick={handleClick}
				disabled={disabled}
			>
				{children}
			</Label>
		</>
	);
};

const Size = tuple("large", "small", "default");
type ButtonSize = (typeof Size)[number];
const BtnType = tuple("outline", "solid");
type ButtonType = (typeof BtnType)[number];

type ValueType = string | number;

interface RadioGroupProps {
	disabled?: boolean;
	size?: ButtonSize;
	value: ValueType;
	onChange: (val: ValueType) => void;
	buttonStyle?: ButtonType;
	children:
		| React.ComponentElement<any, any>
		| React.ComponentElement<any, any>[];
}
export const RadioGroup = ({
	size,
	value,
	onChange,
	buttonStyle,
	children,
	...rest
}: RadioGroupProps) => {
	const [selectedValue, setSelectedValue] = React.useState<ValueType>(value);
	const handleClick = (val: ValueType) => {
		setSelectedValue(val);
		onChange ? onChange(val) : null;
	};
	return (
		<Wrapper {...rest}>
			{React.Children.map(children, (child: React.CElement<any, any>) =>
				React.cloneElement(child, {
					onClick: handleClick,
					buttonStyle,
					size,
					activeValue: selectedValue
				})
			)}
		</Wrapper>
	);
};
RadioGroup.Button = Button;

export default RadioGroup;
