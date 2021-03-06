import * as React from "react";
import Dialog from "./dialog";
import { ModalProps, Header, Body, Footer } from "./index";
import Button from "../button";
import { tuple } from "../__utils/type";

const ConfirmValues = ["info", "success", "error", "warning"];
const ConfirmTuple = tuple(...ConfirmValues);
type ConfirmType = typeof ConfirmTuple[number];

export type ConfirmProps = ModalProps & {
	type?: ConfirmType;
	icon?: string;
	iconColor?: string;
};

export const Confirm = ({
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
	iconColor,
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
					icon={icon}
					iconColor={iconColor}
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
							title={cancelText ? cancelText : "Cancel"}
							style={{ marginRight: "10px" }}
							onClick={onCancel}
							{...cancelButtonProps}
						/>
					)}
					<Button
						title={okText ? okText : "OK"}
						btnType={okType ? okType : "solid"}
						btnStyle="primary"
						onClick={onOk}
						{...okButtonProps}
					/>
				</Footer>
			</Body>
		</Dialog>
	) : null;
};

export default Confirm;
