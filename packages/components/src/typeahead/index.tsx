import * as React from "react";
import Input from "../input";
import useDebounce from "../hooks/use-debounce";
import fetchDataFromJson, {
	TypeAheadDataProps
} from "../__utils/fetch-data-json";
import Dropdown, { SelectedOption } from "../select/dropdown";
import { ChangeHandler } from "../__utils/type";
import isEmpty from "lodash/fp/isEmpty";

export interface TypeAheadProps {
	name: string;
	onChange?: ChangeHandler<SelectedOption>;
	data: TypeAheadDataProps;
	onBlur?: (value: SelectedOption) => void;
	disabled?: boolean;
	style?: React.CSSProperties;
	dropdownStyle?: React.CSSProperties;
}

export const TypeAhead: React.FC<TypeAheadProps> = ({
	name,
	data,
	onChange,
	onBlur,
	disabled,
	style,
	dropdownStyle
}: TypeAheadProps) => {
	const [search, setSearch] = React.useState<string>("");
	const debouncedInput = useDebounce(search, 300);

	const [selected, setSelected] = React.useState<SelectedOption | null>(null);

	const [list, setList] = React.useState<unknown>([]);
	const [openList, setOpenList] = React.useState<boolean>();

	React.useEffect(() => {
		if (!search) {
			setSelected(null);
		}
	}, [search]);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		if (debouncedInput && isEmpty(selected)) {
			setLoading(true);
			if (data.searchKey) {
				data.params[data.searchKey as string] = debouncedInput;
			}
			// modify the params for updated debounced input
			fetchDataFromJson(data).then((response: SelectedOption[]) => {
				setList(response);
				setLoading(false);
				setOpenList(true);
			});
		}
	}, [debouncedInput, selected]);

	const valueRef = React.useRef<SelectedOption>();
	const handleSelect = (option: SelectedOption) => {
		setSelected(option);
		// For Form Item capture
		onBlur ? onBlur(option) : null;
		valueRef.current = option;
	};
	React.useEffect(() => {
		if (selected) {
			setSearch(selected.text);
			setOpenList(false);
			onChange ? onChange(selected, name) : null;
		}
	}, [selected]);

	const renderInput = () => {
		return (
			<Input
				key={-1}
				block={true}
				value={search}
				disabled={disabled}
				onChange={(val: string) => setSearch(val)}
				placeholder="Search..."
				onFocus={() => setOpenList(true)}
				onBlur={() => {
					setOpenList(false);
					onBlur ? onBlur(valueRef.current as SelectedOption) : null;
				}}
			/>
		);
	};

	const render = () => {
		const result = [];
		if (openList && !isEmpty(list) && search) {
			result.push(
				renderInput(),
				<Dropdown
					key={-2}
					loading={loading}
					onSelect={handleSelect}
					options={list as SelectedOption[]}
					style={dropdownStyle}
				/>
			);
		} else {
			result.push(renderInput());
		}
		return result;
	};
	return <div style={style}>{render()}</div>;
};

export default TypeAhead;
