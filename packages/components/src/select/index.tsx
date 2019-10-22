import * as React from "react";
import styled from "styled-components";
import { Colors } from "@turtlemint/core";
import ExpandMore from "../icons/expand-more";
import ExpandLess from "../icons/expand-less";
import Dropdown, { SelectedOption } from "./dropdown";
import SIZE from "../__utils/size";

export const SelectWrapper = styled.div`
	width: 300px;
	box-sizing: border-box;
`;
export const StyledSelectCTA = styled.div`
	box-sizing: border-box;
	outline: none;
	border: 0;
	padding: 8px 16px;
	border: 1px solid ${Colors.DISABLED};
	border-radius: 4px;
	font-size: ${SIZE.INPUT_FONT_SIZE};
	color: ${Colors.GREY1};
	max-width: 300px;
	&:hover {
		border: 1px solid ${Colors.PERSIAN_GREEN};
		cursor: pointer;
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ArrowWrapper = styled.span`
	color: ${Colors.GREY1};
`;

const ArrowToggle = ({ open }: { open: boolean }) => (
	<ArrowWrapper>{!open ? <ExpandMore /> : <ExpandLess />}</ArrowWrapper>
);

interface SelectCTAProps {
	value: string;
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
	const handleSelectCTAClick = () => {
		onClick ? onClick() : null;
	};
	return (
		<StyledSelectCTA onClick={handleSelectCTAClick}>
			<span>{value}</span>
			{showArrow ? <ArrowToggle open={open as boolean} /> : null}
		</StyledSelectCTA>
	);
};

interface SelectProps {
	value: string;
	onSelect?: (option: SelectedOption) => void;
	children:
		| React.ComponentElement<any, any>
		| React.ComponentElement<any, any>[];
}

export const Select = ({ value, onSelect, children }: SelectProps) => {
	const [open, setOpen] = React.useState(false);
	const handleSelect = (option: SelectedOption) => {
		setOpen(!open);
		onSelect ? onSelect(option) : null;
	};
	return (
		<SelectWrapper data-testid="select-wrapper">
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
