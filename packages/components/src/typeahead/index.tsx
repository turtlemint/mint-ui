import * as React from "react";
import Input from "../input";
import useDebounce from "../hooks/use-debounce";
import Dropdown, { SelectedOption } from "../select/dropdown";
import Select, { SelectCTA, SelectWrapper } from "../select";
import { ChangeHandler } from "../__utils/type";

export interface LabeledValue {
	key: string;
	label: React.ReactNode;
}

export interface TypeAheadProps {
	className?: string;
	name: string;
	notFoundContent?: React.ReactNode | null;
	disabled?: boolean;
	style?: React.CSSProperties;
	placeholder: string;
	id?: string;
	open?: boolean;
	loading?: boolean;
	value?: SelectedOption;
	onChange: ChangeHandler<SelectedOption>;
	onBlur?: (value: any) => void;
	fetchFunc: (value: string) => any;
	children:
		| React.ComponentElement<any, any>
		| React.ComponentElement<any, any>[];
}

export const TypeAhead: React.FC<TypeAheadProps> = ({
	className = "",
	name,
	open = false,
	value,
	onChange = () => {},
	onBlur = () => {},
	loading = false,
	fetchFunc,
	placeholder = "",
	disabled = false,
	children
}: TypeAheadProps) => {
	const [dropdownOpen, setDropdownOpen] = React.useState<boolean>(false);
	React.useEffect(() => {
		setDropdownOpen(open);
	}, [open]);

	const [inputValue, setInputValue] = React.useState<string>("");
	const handleInputChange = (val: any) => {
		setInputValue(val);
	};
	const debouncedInput = useDebounce(inputValue, 300);

	React.useEffect(() => {
		if (debouncedInput) {
			fetchFunc(debouncedInput);
		}
	}, [debouncedInput]);

	const [labelValue, setLabelValue] = React.useState<
		SelectedOption | undefined
	>(value);
	const [showLabelInput, setShowLabelInput] = React.useState<boolean>(
		value ? true : false
	);
	const [newPlaceholder, setNewPlaceholder] = React.useState<string>(
		placeholder
	);

	React.useEffect(() => {
		if (labelValue) {
			setNewPlaceholder(labelValue.text);
		}
	}, [labelValue]);

	const valueRef = React.useRef<any>(value);

	const handleSelect = (option: SelectedOption) => {
		onChange(option, name);
		setInputValue("");
		setLabelValue(option);
		setShowLabelInput(true);
		setDropdownOpen(false);
		valueRef.current = option;
		onBlur(valueRef.current);
	};
	const handleBlur = () => {
		onBlur(valueRef.current);
	};
	const handleSelectedValueClick = () => {
		setShowLabelInput(false);
		setDropdownOpen(true);
	};
	const { Option } = Select;
	return (
		<SelectWrapper
			block={false}
			className={className}
			onBlur={handleBlur}
			disabled={disabled}
			tabIndex={0}
		>
			{showLabelInput ? (
				<SelectCTA
					value={labelValue}
					showArrow={false}
					disabled={disabled}
					onClick={handleSelectedValueClick}
				/>
			) : (
				<Input
					data-testid="typeahead-input"
					block={true}
					value={inputValue}
					onChange={handleInputChange}
					placeholder={newPlaceholder}
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
