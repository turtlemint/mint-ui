import * as React from "react";
import styled, { css } from "styled-components";
import { transparentize } from "polished";
import COLORS from "../__utils/colors";
import KeyboardArrowDown from "../icons/KeyboardArrowDown";
import KeyboardArrowRight from "../icons/KeyboardArrowRight";
import { GlobalStyles } from "../app";

interface CollapseProps {
	/** Active panel key */
	activeKey?: string | number;
	/** if Accordian is true only one panel opens at a time */
	accordion?: boolean;
	/** Callback to handle the change event of the tab */
	onChange?: (val: string | number) => void;
	/** Determines the icon position of the arrow */
	expandIconPosition?: "left" | "right";
	children?: React.ReactNode | React.ReactNodeArray;
}

const CollapseContext = React.createContext<any>({});

const CollapseWrap = styled.div`
	${GlobalStyles};
	border-left: 1px solid ${COLORS.BORDER};
	border-right: 1px solid ${COLORS.BORDER};
	border-radius: 4px;
	.tm-panel:first-child .tm-panel-header {
		border-top: 1px solid ${COLORS.BORDER};
	}
`;

export const Collapse = ({
	activeKey = 1,
	accordion = false,
	onChange,
	expandIconPosition = "right",
	children,
	...rest
}: CollapseProps) => {
	const [key, setKey] = React.useState(activeKey);

	const closeOtherPanels = (key: string | number) => {
		setKey(key);
	};

	return (
		<CollapseContext.Provider
			value={{
				key,
				accordion,
				closeOtherPanels,
				onChange,
				expandIconPosition
			}}
		>
			<CollapseWrap {...rest}>{children}</CollapseWrap>
		</CollapseContext.Provider>
	);
};

interface PanelProps {
	disabled?: boolean;
	/** header as string or custom component */
	header?: string | React.ReactNode;
	/** active Panel Key */
	panelKey?: string | number;
	/** showArrow toggles visibility for arrow on the right  */
	showArrow?: boolean;
	/** exrtra component to be rendered on the right side of the header */
	extra?: React.ReactNode;
	children?: React.ReactNode | React.ReactNodeArray;
}

interface IconProps {
	position: "left" | "right";
	children: React.ReactNode;
}
const Icon = ({ position, children }: IconProps) => {
	const StyledEL = styled.i<{ position: "left" | "right" }>`
		display: inline-flex;
		margin-left: 10px;
		${({ position }) =>
			position === "left" &&
			css`
				margin: 0;
				margin-right: 10px;
			`};
	`;
	return <StyledEL position={position}>{children}</StyledEL>;
};

export const Panel = ({
	disabled = false,
	header,
	panelKey,
	showArrow = true,
	extra,
	children
}: PanelProps) => {
	const {
		key: activeKey,
		accordion,
		closeOtherPanels,
		onChange,
		expandIconPosition
	} = React.useContext(CollapseContext);
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		setOpen(activeKey === panelKey);
	}, [activeKey]);

	const handleToggle = () => {
		if (accordion) {
			closeOtherPanels(panelKey);
		}
		setOpen(!open);
		onChange(panelKey);
	};

	const getIcon = () => {
		return !showArrow ? null : open ? (
			<Icon position={expandIconPosition}>
				<KeyboardArrowDown width={24} height={24} fill={COLORS.GREY3} />
			</Icon>
		) : (
			<Icon position={expandIconPosition}>
				<KeyboardArrowRight
					width={24}
					height={24}
					fill={COLORS.GREY3}
				/>
			</Icon>
		);
	};

	return (
		<div className="tm-panel">
			<Header
				disabled={disabled}
				onClick={handleToggle}
				className="tm-panel-header"
				data-testid="tm-panel-header"
			>
				<div style={{ display: "inline-flex" }}>
					{expandIconPosition === "left" ? getIcon() : null}
					<span>{header}</span>
				</div>
				<div style={{ display: "inline-flex" }}>
					{extra ? extra : null}
					{expandIconPosition !== "left" ? getIcon() : null}
				</div>
			</Header>
			{open ? (
				<Body
					data-testid="tm-collapse-body"
					className="tm-collapse-body"
				>
					{children}
				</Body>
			) : null}
		</div>
	);
};

interface HeaderProps {
	disabled?: boolean;
}

const Header = styled.div<HeaderProps>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 12px 15px;
	color: ${COLORS.BLACK};
	background: ${COLORS.BACKGROUND_GREY};
	border-bottom: 1px solid ${COLORS.BORDER};
	cursor: pointer;
	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none;
			color: ${transparentize(0.7, COLORS.BLACK)};
			background: ${transparentize(0.2, COLORS.BACKGROUND_GREY)};
		`};
`;

const Body = styled.div`
	padding: 15px;
	border-bottom: 1px solid ${COLORS.BORDER};
`;

Collapse.Panel = Panel;
export default Collapse;
