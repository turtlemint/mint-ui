import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ButtonProps, ButtonType } from "../button";
import COLORS from "../__utils/colors";
import Button from "../button";
import Close from "../icons/close";
import "../app.css";

export interface ModalProps {
	container?: Element;
	title: string | React.ReactNode;
	visible: boolean;
	width?: string | number;
	style?: Object;
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

const Modal = ({
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
	children
}: ModalProps) => {
	const renderModal = () => {
		return visible ? (
			<>
				<Mask className="tm-modal-mask"></Mask>
				<Dialog
					tabIndex={-1}
					className="tm-modal-wrap"
					width={width}
					role="dialog"
				>
					<div role="document" className="tm-modal" style={style}>
						<div className="tm-modal-content">
							<div className="tm-modal-header">
								<div className="tm-modal-title">{title}</div>
								{closable ? (
									<Button
										btnType="link"
										icon={closeIcon ? closeIcon : Close}
										aria-label="Close"
										className="tm-modal-close"
										onClick={onClose}
									></Button>
								) : null}
							</div>
							<div className="tm-modal-body" style={bodyStyle}>
								{children}
							</div>
							<div className="tm-modal-footer">
								<Button
									size="sm"
									style={{ marginRight: "10px" }}
									onClick={onCancel}
									{...cancelButtonProps}
								>
									{cancelText ? cancelText : "Cancel"}
								</Button>
								<Button
									size="sm"
									btnType={okType ? okType : "solid"}
									btnStyle="primary"
									onClick={onOk}
									{...okButtonProps}
								>
									{okText ? okText : "OK"}
								</Button>
							</div>
						</div>
					</div>
				</Dialog>
			</>
		) : null;
	};

	return container
		? ReactDOM.createPortal(renderModal(), container)
		: renderModal();
};

const Mask = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.45);
	transition: background-color 0.2s ease-out;
`;

interface DialogProps {
	width?: string | number;
}
const shadow = "0 4px 12px rgba(0, 0, 0, 0.15)";

const Dialog = styled.div<DialogProps>`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	overflow: auto;
	outline: 0;
	transition: all 0.2s ease-out;
	.tm-modal {
		position: relative;
		top: 100px;
		width: ${({ width }) => (width ? width : "520px")};
		margin: 0 auto;
		padding-bottom: 24px;
		pointer-events: none;
	}
	.tm-modal-content {
		position: relative;
		background-color: ${COLORS.WHITE};
		background-clip: padding - box;
		border: 0;
		border-radius: 4px;
		-webkit-box-shadow: ${shadow};
		box-shadow: ${shadow};
		pointer-events: auto;
	}
	.tm-modal-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 0 8px 24px;
		border-bottom: 1px solid ${COLORS.GREY4};
	}
	.tm-modal-title {
		margin: 0;
		color: ${COLORS.GREY1};
		font-weight: 500;
		font-size: 18px;
		line-height: 12px;
		word-wrap: break-word;
	}
	.tm-modal-body {
		padding: 24px;
	}
	.tm-modal-footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding: 10px 16px;
		border-top: 1px solid ${COLORS.GREY4};
	}
`;

export default Modal;
