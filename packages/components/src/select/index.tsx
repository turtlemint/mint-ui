import * as React from "react";
import styled from "styled-components";
import Dropdown, { SelectedOption } from "./dropdown";
import Icon from "../icon";
import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

export const SelectWrapper = styled.div<{ block: boolean }>`
	${GlobalStyles};
	width: ${props => (props.block ? "100%" : "328px")};
	position: relative;
	background-color: ${COLORS.WHITE};
`;
export const StyledSelectCTA = styled.div`
	outline: none;
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

const ArrowToggle = ({ open }: { open: boolean }) => (
	<>
		{open ? (
			<Icon name="keyboard_arrow_up" size={24} />
		) : (
			<Icon name="keyboard_arrow_down" size={24} />
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

interface SelectProps {
	value: any;
	onSelect?: (option: SelectedOption) => void;
	block?: boolean;
	children:
		| React.ComponentElement<any, any>
		| React.ComponentElement<any, any>[];
}

export const Select = ({
	value,
	onSelect,
	block = false,
	children
}: SelectProps) => {
	const [open, setOpen] = React.useState(false);
	const handleSelect = (option: SelectedOption) => {
		setOpen(!open);
		onSelect ? onSelect(option) : null;
	};
	return (
		<SelectWrapper data-testid="select-wrapper" block={block}>
			<SelectCTA
				open={open}
				value={value}
				showArrow={true}
				onClick={() => setOpen(!open)}
			/>
			{open ? (
				<Dropdown onSelect={handleSelect}>{children}</Dropdown>
			) : null}
		</SelectWrapper>
	);
};

export default Select;
