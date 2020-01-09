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
}

export const Pagination = ({ total, defaultCurrent }: PaginationProps) => {
	const [state, dispatch] = React.useReducer(
		(state, action) => {
			switch (action.type) {
				case "setItemClickState":
					return {
						...state,
						activePage: action.activePage,
						showLeftEllipsis: action.showLeftEllipsis,
						showRightEllipsis: action.showRightEllipsis
					};
				default:
					return state;
			}
		},
		{
			pageSize: 10,
			activePage: defaultCurrent ? defaultCurrent : 1,
			showLeftEllipsis: true,
			showRightEllipsis: true
		}
	);
	const lastPage: number = total / state.pageSize;

	const renderList = () => {
		let pages: number[] = [];
		if (lastPage > 6) {
			if (state.activePage <= 4) {
				pages = [2, 3, 4, 5];
			} else if (
				state.activePage > 4 &&
				state.activePage <= lastPage - 4
			) {
				pages = [
					state.activePage - 2,
					state.activePage - 1,
					state.activePage,
					state.activePage + 1,
					state.activePage + 2
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
				active={state.activePage === page}
				onClick={() => {
					dispatch({
						type: "setItemClickState",
						activePage: page,
						showLeftEllipsis: true,
						showRightEllipsis: true
					});
				}}
			>
				<a>{page}</a>
			</Item>
		));
	};
	const [showLeftEllipsis, setLeftEllipsis] = React.useState<boolean>(true);
	const [showRightEllipsis, setRightEllipsis] = React.useState<boolean>(true);

	return (
		<Wrapper>
			<Item
				key={0}
				onClick={() => {
					dispatch({
						type: "setItemClickState",
						activePage: 1,
						showLeftEllipsis: true,
						showRightEllipsis: true
					});
				}}
				disabled={state.activePage === 1}
			>
				<Icon size={18} name="keyboard-arrow-left" />
			</Item>
			<Item
				key={1}
				active={state.activePage === 1}
				onClick={() => {
					dispatch({
						type: "setItemClickState",
						activePage: 1,
						showLeftEllipsis: true,
						showRightEllipsis: true
					});
				}}
			>
				<a>{1}</a>
			</Item>
			{lastPage > 6 && state.activePage > 4 ? (
				<Item
					key={-1}
					border={false}
					onClick={() => {
						dispatch({
							type: "setItemClickState",
							activePage: 1,
							showLeftEllipsis: true,
							showRightEllipsis: true
						});
					}}
					onMouseEnter={() => setLeftEllipsis(false)}
					onMouseLeave={() => setLeftEllipsis(true)}
				>
					{showLeftEllipsis ? (
						<Icon name="more-horiz" />
					) : (
						<Icon name="fast-forward" />
					)}
				</Item>
			) : null}
			{renderList()}
			{lastPage > 6 && state.activePage <= lastPage - 4 ? (
				<Item
					className="right-fast-forward"
					key={-2}
					border={false}
					onClick={() => {
						dispatch({
							type: "setItemClickState",
							activePage: 50,
							showLeftEllipsis: true,
							showRightEllipsis: true
						});
					}}
					onMouseEnter={() => setRightEllipsis(false)}
					onMouseLeave={() => setRightEllipsis(true)}
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
				active={state.activePage === lastPage}
				onClick={() => {
					dispatch({
						type: "setItemClickState",
						activePage: lastPage,
						showLeftEllipsis: true,
						showRightEllipsis: true
					});
				}}
			>
				<a>{lastPage}</a>
			</Item>
			<Item
				key={-3}
				onClick={() => {
					dispatch({
						type: "setItemClickState",
						activePage: state.activePage + 1,
						showLeftEllipsis: true,
						showRightEllipsis: true
					});
				}}
				disabled={state.activePage === lastPage}
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
			cursor: not-allowed;
			pointer-events: none;
			svg {
				fill: ${COLORS.DISABLED};
			}
		`}
`;

export default Pagination;
