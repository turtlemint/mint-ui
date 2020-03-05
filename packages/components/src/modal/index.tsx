import * as React from "react";
import styled from "styled-components";
import { ButtonProps, ButtonType } from "../button";
import COLORS from "../__utils/colors";
import Button from "../button";
import Dialog from "./dialog";
import { GlobalStyles } from "../app";
import Icon from "../icon";

export interface ModalProps {
	/** DOM element to render the app to */
	container?: Element;
	/** title of the Modal header to render the app to */
	title: string | React.ReactNode;
	/** toggle the visibility of the modal */
	visible: boolean;
	/** customisation for modal width in pixels, percentages, em, rem */
	width?: string | number;
	/** style */
	style?: React.CSSProperties;
	/** styles applied to the body */
	bodyStyle?: Object;
	/** If the modal is closable or not */
	closable?: boolean;
	closeIcon?: React.ReactNode;
	/** text in cancel Button */
	cancelText?: string;
	/** text in cancelButtonProps Button */
	cancelButtonProps?: ButtonProps;
	/** onCancel callback */
	onCancel?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	/**  text in ok Button */
	okText?: string;
	/** type of the ok button */
	okType?: ButtonType;
	/** type of the okButtonProps button */
	okButtonProps?: ButtonProps;
	/** callback for OK button click */
	onOk?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	/** callback for close button */
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
					title={cancelText ? cancelText : "Cancel"}
					{...cancelButtonProps}
				/>
				<Button
					btnType={okType ? okType : "solid"}
					btnStyle="primary"
					onClick={onOk}
					title={okText ? okText : "OK"}
					{...okButtonProps}
				/>
			</Footer>
		</Dialog>
	) : null;
};

export interface HeaderProps {
	title: string | React.ReactNode;
	icon?: string;
	iconColor?: string;
	closable?: boolean;
	closeIcon?: React.ReactNode;
	onClose?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
	className?: string;
}
export const HeaderTitle = styled.div`
	margin: 0;
	color: ${COLORS.GREY1};
	font-weight: 500;
	font-size: 18px;
	line-height: 12px;
	word-wrap: break-word;
`;
const Wrapper = styled.div<{ icon?: string }>`
	${GlobalStyles};
	display: flex;
	align-items: center;
	justify-content: ${({ icon }) => (!icon ? "space-between" : "flex-start")};
	padding: ${({ icon }) => (!icon ? `8px 0 8px 24px` : 0)};
	border-bottom: ${({ icon }) => (!icon ? `1px solid ${COLORS.GREY4}` : 0)};
`;

export const Header = ({
	title,
	icon,
	iconColor,
	closable,
	closeIcon,
	onClose,
	className
}: HeaderProps) => {
	return (
		<Wrapper icon={icon} className={className}>
			{icon ? (
				<i style={{ margin: "7px 15px 0 0" }}>
					<Icon name={icon} color={iconColor} />
				</i>
			) : null}
			<HeaderTitle>{title}</HeaderTitle>
			{closable ? (
				<Button
					btnType="link"
					icon={closeIcon ? closeIcon : <Icon name="close" />}
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
