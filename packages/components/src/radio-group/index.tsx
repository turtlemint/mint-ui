import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";
import { tuple } from "../__utils/type";

const Size = tuple("large", "small", "default");
type ButtonSize = (typeof Size)[number];
const BtnType = tuple("outline", "solid");
type ButtonType = (typeof BtnType)[number];

interface RadioGroupProps {
	disabled?: boolean;
	size?: ButtonSize;
	value?: string | number;
	onChange: (val: string | number) => void;
	buttonStyle?: ButtonType;
	children:
		| React.ComponentElement<any, any>
		| React.ComponentElement<any, any>[];
}

const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
// const HiddenRadio = styled.span`
//     display: block;
//     width: 0;
//     height:0;
// `;

interface LabelProps {
	isActive?: boolean;
	size?: ButtonSize;
	buttonStyle?: ButtonType;
	onClick: (val: string) => void;
}

const Label = styled.div<Partial<LabelProps>>`
	padding: 8px 15px;
	font-size: 16px;
	border: 1px solid ${COLORS.GREY4};
	border-right: 0;
	color: ${COLORS.GREY1};
	cursor: pointer;
	&:hover {
		color: ${COLORS.PRIMARY};
	}
	transition: color 0.4s 0s ease-out;
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
			:last-child {
				border-color: ${COLORS.PRIMARY};
			}
		`};

	${({ size }) =>
		size === "small" &&
		css`
			font-size: 14px;
		`};
	${({ size }) =>
		size === "large" &&
		css`
			font-size: 18px;
		`};

	${props =>
		props.buttonStyle === "solid" &&
		css`
			border: none;
			background: ${COLORS.PRIMARY};
			color: ${COLORS.WHITE};
		`}
`;

interface ButtonProps {
	value: string | number;
	activeValue?: string | number;
	size?: ButtonSize;
	buttonStyle?: ButtonType;
	children: string;
	onChange?: (val: string | number) => void;
}

const Button = ({
	value,
	activeValue,
	size,
	buttonStyle,
	onChange,
	children
}: ButtonProps) => {
	// const [activeValue, setActiveValue] = React.useState<Pick<RadioGroupProps, "value">>(value);
	const handleClick = (e: any) => {
		onChange ? onChange(value) : null;
	};
	return (
		<>
			{/* <HiddenRadio>
                <label htmlFor="radio-button"> </label>
                <input type="radio" id="radio-button" />
            </HiddenRadio> */}
			<Label
				className="radio-button"
				size={size}
				isActive={activeValue === value}
				buttonStyle={buttonStyle}
				onClick={handleClick}
			>
				{children}
			</Label>
		</>
	);
};

const RadioGroup = ({
	disabled = false,
	size,
	value,
	onChange,
	buttonStyle,
	children
}: RadioGroupProps) => {
	return (
		<Wrapper>
			{React.Children.map(children, (child: React.CElement<any, any>) =>
				React.cloneElement(child, {
					onClick: onChange,
					buttonStyle,
					disabled,
					size,
					activeValue: value
				})
			)}
		</Wrapper>
	);
};
RadioGroup.Button = Button;

export default RadioGroup;
