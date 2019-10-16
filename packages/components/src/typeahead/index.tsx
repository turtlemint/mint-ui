import * as React from "react";
import styled, { css } from "styled-components";
import { Size, Colors } from "@turtlemint/core";
import Input from "../input";

export interface LabeledValue {
	key: string;
	label: React.ReactNode;
}

export type SelectValue =
	| string
	| string[]
	| number
	| number[]
	| LabeledValue
	| LabeledValue[];

interface SelectedOption {
	value: string | number;
	title: string | number;
}
export interface TypeAheadProps {
	className?: string;
	notFoundContent?: React.ReactNode | null;
	disabled?: boolean;
	style?: React.CSSProperties;
	placeholder: string;
	id?: string;
	open?: boolean;
	loading?: boolean;
	value: SelectValue;
	onSelect: (option: SelectedOption) => void;
	onBlur?: () => void;
	fetchFunc: (value: string) => void;
	children:
		| React.ComponentElement<any, any>
		| React.ComponentElement<any, any>[];
}

export interface OptionProps {
	key: string | number;
	disabled?: boolean;
	value?: string | number;
	title?: string;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

const Dropdown = styled.div`
	margin: 0;
	padding: 0;
	color: rgba(0, 0, 0, 0.65);
	font-variant: tabular-nums;
	line-height: 1.5;
	list-style: none;
	-webkit-font-feature-settings: "tnum";
	font-feature-settings: "tnum";
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	font-size: 14px;
	font-variant: initial;
	background-color: #fff;
	border-radius: 4px;
	outline: none;
	-webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const List = styled.ul`
	border: 1px solid #eee;
	border-radius: 4px;
	list-style: none;
	margin: 0;
	padding: 0;
	max-height: 250px;
	margin-bottom: 0;
	padding-left: 0;
	overflow: auto;
	outline: none;
`;

export const StyledOption = styled.li<Pick<OptionProps, "disabled">>`
	display: block;
	padding: 5px 12px;
	overflow: hidden;
	color: rgba(0, 0, 0, 0.65);
	font-size: ${Size.BASE_FONT_SIZE};
	font-weight: normal;
	line-height: 22px;
	white-space: nowrap;
	text-overflow: ellipsis;
	cursor: pointer;
	-webkit-transition: background 0.3s ease;
	transition: background 0.3s ease;
	${props =>
		props.disabled &&
		css`
			cursor: no-drop;
		`}
	&:hover {
		background-color: #e6f7ff;
	}
	&:first-child {
		color: rgba(0, 0, 0, 0.65);
		font-weight: 600;
		background-color: #fafafa;
	}
`;

export const Option = ({
	key,
	value,
	disabled = false,
	children,
	onClick
}: OptionProps) => {
	return (
		<StyledOption
			key={key}
			value={value}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</StyledOption>
	);
};
const StyledLabelInput = styled.div`
	padding: 5px 10px;
	border: 1px solid #eee;
	border-radius: 4px;
	&:hover {
		border: 1px solid ${Colors.PERSIAN_GREEN};
	}
`;

export const TypeAhead: React.FC<TypeAheadProps> = ({
	className = "",
	open = false,
	onSelect,
	loading = false,
	fetchFunc,
	placeholder = "",
	children
}: TypeAheadProps) => {
	const [inputValue, setInputValue] = React.useState<string>("");
	const handleInputChange = (val: string) => {
		setInputValue(val);
		fetchFunc(val);
	};
	const handleSelect = (event: React.ChangeEvent<HTMLDivElement>) => {
		const title = event.target.innerText || event.target.textContent || "";
		const value = event.target.getAttribute("value") || "";
		if (event.target) {
			onSelect({ value, title });
		}
		setInputValue(title);
		setLabelInput(true);
	};
	const [showLabelInput, setLabelInput] = React.useState(false);
	const handleSelectedValueClick = () => {
		setLabelInput(false);
	};

	return (
		<div className={className}>
			{!showLabelInput ? (
				<Input
					value={inputValue}
					onChange={handleInputChange}
					placeholder={placeholder}
				/>
			) : (
				<StyledLabelInput onClick={handleSelectedValueClick}>
					{inputValue}
				</StyledLabelInput>
			)}
			{loading ? "Loading..." : null}
			{open ? (
				<Dropdown>
					<List>
						{React.Children.map(
							children,
							(child: React.CElement<any, any>) =>
								React.cloneElement(child, {
									onClick: handleSelect
								})
						)}
					</List>
				</Dropdown>
			) : null}
		</div>
	);
};

export default TypeAhead;
