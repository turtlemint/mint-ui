import * as React from "react";
import Input from "../input";
import useDebounce from "../hooks/use-debounce";
import Dropdown, { Option, SelectedOption } from "../select/dropdown";
import { SelectCTA, SelectWrapper } from "../select";

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
	const handleInputChange = (val: string) => {
		setInputValue(val);
	};
	const debouncedInput = useDebounce(inputValue, 300);

	React.useEffect(() => {
		if (debouncedInput) {
			fetchFunc(debouncedInput);
		}
	}, [debouncedInput]);

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

	const handleSelect = (option: SelectedOption) => {
		onSelect ? onSelect(option) : null;
		setInputValue("");
		setLabelValue(option.text);
		setShowLabelInput(true);
		setDropdownOpen(false);
	};

	const handleSelectedValueClick = () => {
		setShowLabelInput(false);
		setDropdownOpen(true);
	};

	return (
		<SelectWrapper block={false} className={className}>
			{!showLabelInput ? (
				<Input
					data-testid="typeahead-input"
					block={true}
					value={inputValue}
					onChange={handleInputChange}
					placeholder={newPlaceholder}
				/>
			) : (
				<SelectCTA
					value={labelValue}
					showArrow={false}
					onClick={handleSelectedValueClick}
				/>
			)}
			{loading ? (
				<Dropdown data-testid="typeahead-loading-dropdown">
					<Option value="loading">Loading...</Option>
				</Dropdown>
			) : null}
			{dropdownOpen ? (
				<Dropdown
					data-testid="typeahead-dropdown"
					onSelect={handleSelect}
				>
					{children}
				</Dropdown>
			) : null}
		</SelectWrapper>
	);
};

export default TypeAhead;
