import * as React from "react";
import Dialog from "./dialog";
import { ModalProps, Header, Body, Footer } from "./modal";
import Button from "../button";
import { tuple } from "../__utils/type";

const ConfirmValues = ["info", "success", "error", "warning"];
const ConfirmTuple = tuple(...ConfirmValues);
type ConfirmType = (typeof ConfirmTuple)[number];

export type ConfirmProps = ModalProps & {
	type?: ConfirmType;
	icon?: React.ReactNode;
};

const Confirm = ({
	container,
	visible,
	title,
	width,
	style,
	bodyStyle,
	onCancel,
	cancelButtonProps,
	cancelText,
	okType,
	onOk,
	okButtonProps,
	okText,
	type,
	icon,
	children,
	...rest
}: ConfirmProps) => {
	return visible ? (
		<Dialog
			visible={visible}
			width={width}
			container={container}
			style={style}
			{...rest}
		>
			<Body
				style={{
					padding: "32px 32px 24px",
					...bodyStyle
				}}
				className="tm-modal-confirm-body"
			>
				<Header
					isConfirm={true}
					icon={icon}
					title={title}
					className="tm-modal-confirm-header"
				/>
				<div
					style={{
						marginTop: "8px",
						marginLeft: "38px"
					}}
				>
					{children}
				</div>
				<Footer
					style={{
						marginTop: "24px",
						display: "flex",
						justifyContent: "flex-end",
						alignItems: "center"
					}}
					isConfirm={true}
					className="tm-modal-confirm-footer"
				>
					{type && ConfirmValues.includes(type) ? null : (
						<Button
							style={{ marginRight: "10px" }}
							onClick={onCancel}
							{...cancelButtonProps}
						>
							{cancelText ? cancelText : "Cancel"}
						</Button>
					)}
					<Button
						btnType={okType ? okType : "solid"}
						btnStyle="primary"
						onClick={onOk}
						{...okButtonProps}
					>
						{okText ? okText : "OK"}
					</Button>
				</Footer>
			</Body>
		</Dialog>
	) : null;
};

export default Confirm;
