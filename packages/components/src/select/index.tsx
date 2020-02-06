import * as React from "react";
import styled from "styled-components";
import Dropdown, { SelectedOption, Option } from "./dropdown";
import Icon from "../icon";
import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";
import { ChangeHandler } from "../__utils/type";

interface SelectProps {
	name?: string;
	value?: any;
	onChange?: ChangeHandler<SelectedOption>;
	onBlur?: (option: SelectedOption) => void;
	block?: boolean;
	children:
		| React.ComponentElement<any, any>
		| React.ComponentElement<any, any>[];
}

export const Select = ({
	name,
	value,
	onChange = () => {},
	onBlur = () => {},
	block = false,
	children
}: SelectProps) => {
	const selectEl = React.useRef<HTMLDivElement>(null);
	const [open, setOpen] = React.useState(false);
	const valueRef = React.useRef<any>(value);

	const handleSelect = (option: SelectedOption) => {
		const node = selectEl.current;
		node ? node.blur() : null;
		onBlur(option);
		onChange(option, name as string);
		setOpen(false);
		valueRef.current = option;
	};

	const toggleDropdown = () => {
		setOpen(!open);
	};
	const handleBlur = () => {
		setOpen(false);
		onBlur(valueRef.current);
	};

	return (
		<SelectWrapper
			ref={selectEl}
			name={name}
			block={block}
			tabIndex={0}
			onBlur={handleBlur}
		>
			<SelectCTA
				open={open}
				value={value}
				showArrow={true}
				onClick={toggleDropdown}
			/>
			{open ? (
				<Dropdown onSelect={handleSelect}>{children}</Dropdown>
			) : null}
		</SelectWrapper>
	);
};

const ArrowToggle = ({ open }: { open: boolean }) => (
	<>
		{open ? (
			<Icon name="keyboard_arrow_up" size={24} color={COLORS.GREY2} />
		) : (
			<Icon name="keyboard_arrow_down" size={24} color={COLORS.GREY2} />
		)}
	</>
);

interface SelectCTAProps {
	value: any;
	showArrow?: boolean;
	open?: boolean;
	onClick?: () => void;
}

export const SelectCTA = ({
	value,
	showArrow = false,
	open,
	onClick
}: SelectCTAProps) => {
	let displayValue;
	const handleSelectCTAClick = () => {
		onClick ? onClick() : null;
	};
	if (
		typeof value === "object" &&
		value instanceof Object &&
		!(value instanceof Array)
	) {
		displayValue = value.text;
	} else {
		displayValue = value;
	}

	return (
		<StyledSelectCTA onClick={handleSelectCTAClick}>
			<span>{displayValue}</span>
			{showArrow ? <ArrowToggle open={open as boolean} /> : null}
		</StyledSelectCTA>
	);
};

export const SelectWrapper = styled.div<{ block: boolean; name?: string }>`
	${GlobalStyles};
	width: ${props => (props.block ? "100%" : "328px")};
	position: relative;
	background-color: ${COLORS.WHITE};
	outline-color: ${COLORS.PRIMARY};
	outline-width: 2px;
`;
export const StyledSelectCTA = styled.div`
	border: 0;
	padding: 8px 15px;
	border: 1px solid ${COLORS.GREY4};
	border-radius: 4px;
	color: ${COLORS.GREY1};
	max-width: 328px;
	font-size: 14px;
	&:hover {
		border-color: ${COLORS.PERSIAN_GREEN};
		cursor: pointer;
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${COLORS.WHITE};
`;

Select.Option = Option;
export default Select;
