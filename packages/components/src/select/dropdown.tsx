import * as React from "react";
import styled, { css } from "styled-components";
import { Colors } from "@turtlemint/core";
import { SIZE } from "../__utils/size";

export const DropdownWrapper = styled.div`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	line-height: 1.5;
	list-style: none;
	font-variant: initial;
	background-color: ${Colors.WHITE};
	border-radius: 4px;
	outline: none;
	-webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const List = styled.ul`
	box-sizing: border-box;
	border: 1px solid ${Colors.BACKGROUND_GREY};
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

export interface OptionProps {
	key?: string | number;
	disabled?: boolean;
	value?: string | number;
	title?: string;
	children?: React.ReactNode;
	className?: string;
	style?: React.CSSProperties;
	onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export const StyledOption = styled.li<Pick<OptionProps, "disabled">>`
	box-sizing: border-box;
	display: block;
	padding: 5px 12px;
	overflow: hidden;
	font-size: ${SIZE.INPUT_FONT_SIZE};
	color: ${Colors.GREY1};
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
	&:first-child {
		color: rgba(0, 0, 0, 0.65);
		font-weight: 600;
		background-color: #fafafa;
	}
	&:hover {
		background-color: #e6f7ff;
	}
`;

export interface SelectedOption {
	value: string | number;
	title: string;
}
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

interface DropdownProps {
	onSelect?: (option: SelectedOption) => void;
	children:
		| React.ComponentElement<any, any>
		| React.ComponentElement<any, any>[];
}

export const Dropdown = ({ onSelect, children }: DropdownProps) => {
	const handleSelect = (event: React.ChangeEvent<HTMLDivElement>) => {
		const title = event.target.innerText || event.target.textContent || "";
		const value = event.target.getAttribute("value") || "";
		if (event.target) {
			onSelect ? onSelect({ value, title }) : null;
		}
	};
	return (
		<DropdownWrapper>
			<List>
				{React.Children.map(
					children,
					(child: React.CElement<any, any>) =>
						React.cloneElement(child, {
							onClick: handleSelect
						})
				)}
			</List>
		</DropdownWrapper>
	);
};

export default Dropdown;
