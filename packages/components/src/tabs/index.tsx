import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";

type SizeValues = "large" | "default" | "small";

interface TabsProps {
	defaultActiveKey: string;
	onChange: (key: string) => void;
	size?: SizeValues;
	children: any;
}
const TabsContext = React.createContext<any>({});

export const Tabs = ({
	defaultActiveKey = "1",
	onChange,
	size,
	children
}: TabsProps) => {
	const getActiveKey = () => {
		children.forEach((child: any, index: any) => {
			if (child.props.tabKey === activeTab) {
				setActiveKey(index);
			}
		});
	};

	const [activeTab, setActiveTab] = React.useState<string>(defaultActiveKey);

	const [activeKey, setActiveKey] = React.useState<number>(0);

	React.useEffect(() => {
		getActiveKey();
	}, [activeTab]);

	const handleChange = (key: string) => {
		setActiveTab(key);
		onChange(key);
	};

	const renderActiveTabContent = () => {
		// Eslint issue - https://github.com/yannickcr/eslint-plugin-react/issues/522#issuecomment-204134297
		return <div>{children[activeKey].props.children}</div>;
	};

	return (
		<TabsContext.Provider
			value={{
				activeTab,
				size,
				onClick: handleChange
			}}
		>
			<div>
				<TabsList
					role="tablist"
					tabIndex={0}
					style={{ borderBottom: `1px solid ${COLORS.GREY4}` }}
				>
					{children}
				</TabsList>
				<div className="active-tab-content">
					{renderActiveTabContent()}
				</div>
			</div>
		</TabsContext.Provider>
	);
};
const TabsList = styled.ul`
	padding: 0;
	outline: 0;
	border-bottom: 1px solid ${COLORS.GREY4};
`;

interface TabPaneProps {
	tab: string | React.ReactNode;
	tabKey: string;
	disabled?: boolean;
	children: string | string[] | React.ReactNode | React.ReactNode[];
}
export const TabPane = ({ tab, tabKey, disabled = false }: TabPaneProps) => {
	const { activeTab, size, onClick } = React.useContext(TabsContext);
	return (
		<ItemTab
			key={tabKey}
			onClick={() => (onClick ? onClick(tabKey) : null)}
			active={tabKey === activeTab}
			disabled={disabled}
			size={size}
		>
			{tab}
		</ItemTab>
	);
};

const ItemTab = styled.li<{
	active: boolean;
	disabled: boolean;
	size: SizeValues;
}>`
	width: 100px;
	padding: 12px 16px;
	border-bottom: ${({ active }) =>
		active ? `2px solid ${COLORS.PRIMARY}` : 0};
	font-weight: ${({ active }) => (active ? 600 : 400)};
	display: inline-flex;
	justify-content: center;
	list-style: none;
	cursor: pointer;
	pointer-events: ${({ disabled }) => (disabled ? "none" : "initial")};
	color: ${({ disabled }) => (disabled ? COLORS.DISABLED : "initial")};
	${({ size }) =>
		size === "large" &&
		css`
			padding: 16px 20px;
		`};
	${({ size }) =>
		size === "small" &&
		css`
			padding: 8px 12px;
		`}
`;

Tabs.TabPane = TabPane;
export default Tabs;
