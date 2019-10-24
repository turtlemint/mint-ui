import * as React from "react";
import styled from "styled-components";
import ExpandMore from "../icons/expand-more";
import ExpandLess from "../icons/expand-less";
import Dropdown, { SelectedOption } from "./dropdown";
import "../app.css";
import COLORS from "../__utils/colors";

export const SelectWrapper = styled.div`
	width: 300px;
`;
export const StyledSelectCTA = styled.div`
	outline: none;
	border: 0;
	padding: 12px 16px 12px 16px;
	border: 1px solid ${COLORS.GREY4};
	border-radius: 4px;
	color: ${COLORS.GREY1};
	max-width: 300px;
	font-size: 16px;
	&:hover {
		border-color: ${COLORS.PERSIAN_GREEN};
		cursor: pointer;
	}
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ArrowWrapper = styled.span`
	color: ${COLORS.GREY1};
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
