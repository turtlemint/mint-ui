import * as React from "react";
import styled, { css } from "styled-components";
import { GlobalStyles } from "../app";
import Icon from "../icon";
import COLORS from "../__utils/colors";

interface PaginationProps {
	total: number;
	current?: number;
	onChange?: () => React.ReactHTMLElement<HTMLDListElement>[];
	defaultCurrent?: number;
	disabled?: boolean;
}

export const Pagination = ({ total, defaultCurrent, disabled }: PaginationProps) => {
	const [pageSize] = React.useState<number>(10);
	const lastPage: number = total / pageSize;
	const [activePage, setActivePage] = React.useState<number>(
		defaultCurrent ? defaultCurrent : 1
	);
	const [showLeftEllipsis, setLeftEllipsis] = React.useState<boolean>(true);
	const [showRightEllipsis, setRightEllipsis] = React.useState<boolean>(true);

	const resetEllipsis = () => {
		setLeftEllipsis(true);
		setRightEllipsis(true);
	};
	const renderList = () => {
		let pages: number[] = [];
		if (lastPage > 6) {
			if (activePage <= 4) {
				pages = [2, 3, 4, 5];
			} else if (activePage > 4 && activePage <= lastPage - 4) {
				pages = [
					activePage - 2,
					activePage - 1,
					activePage,
					activePage + 1,
					activePage + 2
				];
			} else {
				pages = [46, 47, 48, 49];
			}
		} else {
			for (let i = 1; i <= lastPage; i++) {
				pages.push(i);
			}
		}
		return pages.map(page => (
			<Item
				key={page}
				active={activePage === page}
				onClick={() => {
					setActivePage(page);
					resetEllipsis();
				}}
				disabled={disabled}
			>
				<a>{page}</a>
			</Item>
		));
	};
	return (
		<Wrapper>
			<Item
				key={0}
				onClick={() => {
					setActivePage(activePage - 1);
					resetEllipsis();
				}}
				disabled={activePage === 1 || disabled}
			>
				<Icon size={18} name="keyboard-arrow-left" />
			</Item>
			<Item
				key={1}
				active={activePage === 1}
				onClick={() => {
					setActivePage(1);
					resetEllipsis();
				}}
				disabled={disabled}
			>
				<a>{1}</a>
			</Item>
			{lastPage > 6 && activePage > 4 ? (
				<Item
					key={-1}
					border={false}
					onClick={() => {
						setActivePage(1);
						resetEllipsis();
					}}
					onMouseEnter={() => setLeftEllipsis(false)}
					onMouseLeave={() => setLeftEllipsis(true)}
					disabled={disabled}
				>
					{showLeftEllipsis ? (
						<Icon name="more-horiz" />
					) : (
							<Icon name="fast-forward" />
						)}
				</Item>
			) : null}
			{renderList()}
			{lastPage > 6 && activePage <= lastPage - 4 ? (
				<Item
					key={-2}
					border={false}
					onClick={() => {
						setActivePage(50);
						resetEllipsis();
					}}
					onMouseEnter={() => setRightEllipsis(false)}
					onMouseLeave={() => setRightEllipsis(true)}
					disabled={disabled}
				>
					{showRightEllipsis ? (
						<Icon name="more-horiz" />
					) : (
							<Icon name="fast-forward" />
						)}
				</Item>
			) : null}
			<Item
				key={lastPage}
				active={activePage === lastPage}
				onClick={() => {
					setActivePage(lastPage);
					resetEllipsis();
				}}
				disabled={disabled}
			>
				<a>{lastPage}</a>
			</Item>
			<Item
				key={-3}
				onClick={() => {
					setActivePage(activePage + 1);
					resetEllipsis();
				}}
				disabled={activePage === lastPage || disabled}
			>
				<Icon size={18} name="keyboard-arrow-right" />
			</Item>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	${GlobalStyles};
	display: flex;
`;

const Item = styled.li<{
	active?: boolean;
	disabled?: boolean;
	border?: boolean;
}>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-width: 32px;
	height: 32px;
	margin-right: 8px;
	line-height: 30px;
	list-style: none;
	background-color: ${COLORS.WHITE};
	border: ${({ active, border = true }) =>
		border
			? active
				? `1px solid ${COLORS.PRIMARY_LIGHT}`
				: `1px solid ${COLORS.BORDER}`
			: 0};
	border-radius: 4px;
	outline: 0;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	a {
		color: ${({ active }) =>
		active ? COLORS.PRIMARY_LIGHT : COLORS.GREY1};
	}
	svg {
		fill: ${COLORS.GREY3};
	}
	&:hover {
		border: ${({ border = true }) =>
		border ? `1px solid ${COLORS.PRIMARY_LIGHT}` : 0};
		a {
			color: ${COLORS.PRIMARY_LIGHT};
		}
		svg {
			fill: ${COLORS.PRIMARY_LIGHT};
		}
	}
	${({ disabled }) =>
		disabled &&
		css`
			background-color: ${COLORS.BACKGROUND_GREY};
			a {
				color: ${COLORS.DISABLED}; 
			}
			border-color: ${COLORS.DISABLED};
			pointer-events: none;
			svg {
				fill: ${COLORS.DISABLED};
			}
		`}
`;

export default Pagination;
