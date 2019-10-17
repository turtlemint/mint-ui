import * as React from "react";
import styled, { css } from "styled-components";
import { Colors } from "@turtlemint/core";
import Input from "../input";
import { SIZE } from "../__utils/size";
import useDebounce from "../hooks/use-debounce";

export const Wrapper = styled.div`
	width: 300px;
`;
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
	value?: SelectValue;
	onSelect: (option: SelectedOption) => void;
	onBlur?: () => void;
	fetchFunc: (value: string) => any;
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

export const Dropdown = styled.div`
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

export const StyledOption = styled.li<Pick<OptionProps, "disabled">>`
	box-sizing: border-box;
	display: block;
	padding: 5px 12px;
	overflow: hidden;
	font-size: ${SIZE.BASE_FONT_SIZE};
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
export const StyledLabelInput = styled.div`
	outline: none;
	padding: 14px 48px 14px 16px;
	border: 2px solid ${Colors.BACKGROUND_GREY};
	border-radius: 4px;
	font-size: 16px;
	max-width: 300px;
	&:hover {
		border: 2px solid ${Colors.PERSIAN_GREEN};
		cursor: pointer;
	}
`;

const Loading = styled(StyledOption)`
	// box-shadow: 0 0 4px 0px rgba(0,0,0,0.2);
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
	const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
	React.useEffect(() => {
		setDropdownOpen(open);
	}, [open]);

	const [inputValue, setInputValue] = React.useState<string>("");
	const debouncedInput = useDebounce(inputValue, 300);

	React.useEffect(() => {
		if (debouncedInput) {
			fetchFunc(debouncedInput);
		}
	}, [debouncedInput]);

	const handleInputChange = (val: string) => {
		setInputValue(val);
	};
	const [labelValue, setLabelValue] = React.useState<string>("");
	const [showLabelInput, setShowLabelInput] = React.useState<boolean>(false);
	const [newPlaceholder, setNewPlaceholder] = React.useState<string>(
		placeholder
	);

	React.useEffect(() => {
		if (labelValue) {
			setNewPlaceholder(labelValue);
		}
	}, [labelValue]);

	const handleSelect = (event: React.ChangeEvent<HTMLDivElement>) => {
		const title = event.target.innerText || event.target.textContent || "";
		const value = event.target.getAttribute("value") || "";
		if (event.target) {
			onSelect({ value, title });
		}
		setInputValue("");
		setLabelValue(title);
		setShowLabelInput(true);
		setDropdownOpen(false);
	};

	const handleSelectedValueClick = () => {
		setShowLabelInput(false);
		setDropdownOpen(true);
	};

	return (
		<Wrapper className={className}>
			{!showLabelInput ? (
				<Input
					data-testid="typeahead-input"
					block={true}
					value={inputValue}
					onChange={handleInputChange}
					placeholder={newPlaceholder}
				/>
			) : (
				<StyledLabelInput onClick={handleSelectedValueClick}>
					{labelValue}
				</StyledLabelInput>
			)}
			{loading ? (
				<List>
					<Loading>Loading...</Loading>
				</List>
			) : null}
			{dropdownOpen ? (
				<Dropdown data-testid="typeahead-dropdown">
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
		</Wrapper>
	);
};

export default TypeAhead;
