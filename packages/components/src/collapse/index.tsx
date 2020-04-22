import * as React from "react";
import styled, { css } from "styled-components";
import { transparentize } from "polished";
import COLORS from "../__utils/colors";
import KeyboardArrowDown from "../icons/KeyboardArrowDown";
import KeyboardArrowRight from "../icons/KeyboardArrowRight";
import { GlobalStyles } from "../app";
import { ChangeHandler } from "../__utils/type";

interface CollapseProps {
	panels: PanelProps[];
	/** Active panel key */
	activeKey?: number;
	/** Callback to handle the change event of the tab */
	onChange?: ChangeHandler<number>;
	/** Determines the icon position of the arrow */
	expandIconPosition?: "left" | "right";
}

const CollapseContext = React.createContext<any>({});

export const Collapse = ({
	activeKey = 1,
	onChange,
	panels,
	expandIconPosition = "right"
}: CollapseProps) => {
	return (
		<CollapseContext.Provider
			value={{
				activeKey,
				onChange,
				expandIconPosition
			}}
		>
			<CollapseWrap>
				{panels.map((panel: PanelProps) => (
					<Panel key={panel.panelKey} {...panel} />
				))}
			</CollapseWrap>
		</CollapseContext.Provider>
	);
};
interface PanelProps {
	panelKey: string | number;
	header: HeaderProps;
	content: React.ReactNode;
	disabled?: boolean;
	/** extra component to be rendered on the right side of the header */
	extra?: React.ReactNode;
}

const PanelContext = React.createContext<any>({});

export const Panel = ({
	panelKey,
	header,
	content,
	disabled = false
}: PanelProps) => {
	const { activeKey } = React.useContext(CollapseContext);
	return (
		<PanelContext.Provider
			value={{
				panelKey,
				disabled
			}}
		>
			<div className="tm-panel">
				<Header {...header} />
				{activeKey === panelKey ? <Body>{content}</Body> : null}
			</div>
		</PanelContext.Provider>
	);
};

interface HeaderProps {
	text: string;
	style?: React.CSSProperties;
	extra?: React.ReactNode;
}
const Header = ({ text, style, extra }: HeaderProps) => {
	const { onChange, expandIconPosition } = React.useContext(CollapseContext);

	const { panelKey, disabled } = React.useContext(PanelContext);

	const getIcon = () => {
		return open ? (
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
		<StyledHeader
			disabled={disabled}
			style={style}
			onClick={() => onChange(panelKey)}
			className="tm-panel-header"
		>
			<div style={{ display: "inline-flex" }}>
				{expandIconPosition === "left" ? getIcon() : null}
				<span>{text}</span>
			</div>
			<div style={{ display: "inline-flex" }}>
				{extra ? extra : null}
				{expandIconPosition !== "left" ? getIcon() : null}
			</div>
		</StyledHeader>
	);
};

const CollapseWrap = styled.div`
	${GlobalStyles};
	border-left: 1px solid ${COLORS.BORDER};
	border-right: 1px solid ${COLORS.BORDER};
	border-radius: 4px;
	.tm-panel:first-of-type .tm-panel-header {
		border-top: 1px solid ${COLORS.BORDER};
	}
`;

const StyledHeader = styled.div<{ disabled?: boolean }>`
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

Collapse.Panel = Panel;
export default Collapse;
