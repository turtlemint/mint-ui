import * as React from "react";
import styled from "styled-components";
import { Colors } from "@turtlemint/core";
import Input from "../input";
import useDebounce from "../hooks/use-debounce";
import Dropdown, { List, StyledOption } from "./dropdown";

export const TypeaheadWrapper = styled.div`
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

export const StyledTypeaheadLabel = styled.div`
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
		<TypeaheadWrapper className={className}>
			{!showLabelInput ? (
				<Input
					data-testid="typeahead-input"
					block={true}
					value={inputValue}
					onChange={handleInputChange}
					placeholder={newPlaceholder}
				/>
			) : (
				<StyledTypeaheadLabel onClick={handleSelectedValueClick}>
					{labelValue}
				</StyledTypeaheadLabel>
			)}
			{loading ? (
				<List>
					<StyledOption>Loading...</StyledOption>
				</List>
			) : null}
			{dropdownOpen ? (
				<Dropdown
					data-testid="typeahead-dropdown"
					onSelect={handleSelect}
				>
					{children}
				</Dropdown>
			) : null}
		</TypeaheadWrapper>
	);
};

export default TypeAhead;
