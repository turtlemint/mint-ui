import * as React from "react";
import styled from "styled-components";
import { ButtonProps, ButtonType } from "../button";
import COLORS from "../__utils/colors";
import Button from "../button";
import Close from "../icons/close";
import "../app.css";
import Dialog from "./dialog";

export interface ModalProps {
	container?: Element;
	title: string | React.ReactNode;
	visible: boolean;
	width?: string | number;
	style?: React.CSSProperties;
	bodyStyle?: Object;
	closable?: boolean;
	closeIcon?: React.ReactNode;
	cancelText?: string;
	cancelButtonProps?: ButtonProps;
	onCancel?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	okText?: string;
	okType?: ButtonType;
	okButtonProps?: ButtonProps;
	onOk?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	onClose?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
	children: React.ReactNode;
}

export const Modal = ({
	title,
	visible,
	width,
	style,
	bodyStyle,
	closable = true,
	closeIcon,
	container,
	cancelText,
	cancelButtonProps,
	onCancel,
	okText,
	okType,
	okButtonProps,
	onOk,
	onClose,
	children,
	...rest
}: ModalProps) => {
	return visible ? (
		<Dialog
			visible={visible}
			width={width}
			container={container}
			style={style}
			{...rest}
		>
			<Header
				title={title}
				closable={closable}
				closeIcon={closeIcon}
				onClose={onClose}
				className="tm-modal-header"
			/>
			<Body style={bodyStyle} className="tm-modal-body">
				{children}
			</Body>
			<Footer className="tm-modal-footer">
				<Button
					style={{ marginRight: "10px" }}
					onClick={onCancel}
					{...cancelButtonProps}
				>
					{cancelText ? cancelText : "Cancel"}
				</Button>
				<Button
					btnType={okType ? okType : "solid"}
					btnStyle="primary"
					onClick={onOk}
					{...okButtonProps}
				>
					{okText ? okText : "OK"}
				</Button>
			</Footer>
		</Dialog>
	) : null;
};

export interface HeaderProps {
	title: string | React.ReactNode;
	icon?: React.ReactNode;
	closable?: boolean;
	closeIcon?: React.ReactNode;
	onClose?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
	className?: string;
	isConfirm?: boolean;
}
export const HeaderTitle = styled.div`
	margin: 0;
	color: ${COLORS.GREY1};
	font-weight: 500;
	font-size: 18px;
	line-height: 12px;
	word-wrap: break-word;
`;
const Wrapper = styled.div<{ isConfirm?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: ${({ isConfirm }) =>
		!isConfirm ? "space-between" : "flex-start"};
	padding: ${({ isConfirm }) => (!isConfirm ? `8px 0 8px 24px` : 0)};
	border-bottom: ${({ isConfirm }) =>
		!isConfirm ? `1px solid ${COLORS.GREY4}` : 0};
`;

export const Header = ({
	title,
	icon,
	closable,
	closeIcon,
	onClose,
	className,
	isConfirm
}: HeaderProps) => {
	return (
		<Wrapper isConfirm={isConfirm} className={className}>
			{isConfirm ? (
				<i style={{ margin: "7px 15px 0 0" }}>{icon}</i>
			) : null}
			<HeaderTitle>{title}</HeaderTitle>
			{closable ? (
				<Button
					btnType="link"
					icon={closeIcon ? closeIcon : Close}
					aria-label="Close"
					className="tm-modal-close"
					onClick={onClose}
				/>
			) : null}
		</Wrapper>
	);
};

export interface BodyProps {
	padding?: string;
}

export const Body = styled.div<BodyProps>`
	padding: ${({ padding }) => (padding ? padding : "24px")};
`;

export const Footer = styled.div<{ isConfirm?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding: 10px 16px;
	border-top: ${({ isConfirm }) =>
		!isConfirm ? `1px solid ${COLORS.GREY4}` : 0};
`;

export default Modal;
