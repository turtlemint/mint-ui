import * as React from "react";
import { default as ModalBase, ModalProps } from "./";
import { default as ConfirmBase, ConfirmProps } from "./confirm";
import Button from "../button";
import COLORS from "../__utils/colors";

const el = document.createElement("div");
el.setAttribute("id", "modal-root");
document.body.append(el);

const Modal = ({
	width,
	title,
	cancelText,
	okText,
	okType,
	okButtonProps
}: Omit<ModalProps, "visible" | "children">) => {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<Button
				btnStyle="primary"
				btnType="outlined"
				title={title as string}
				onClick={() => setOpen(true)}
				style={{ margin: "20px" }}
			/>
			{open ? (
				<ModalBase
					container={el}
					width={width}
					visible={open}
					title={title}
					cancelText={cancelText}
					onCancel={() => setOpen(false)}
					okText={okText}
					okType={okType}
					onOk={() => setOpen(false)}
					okButtonProps={
						okButtonProps
							? {
									htmlType: "submit"
							  }
							: {}
					}
					onClose={() => setOpen(false)}
				>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
					<p>Lorem ipsum dolor sit amet.</p>
				</ModalBase>
			) : null}
		</>
	);
};

export default {
	title: "Modal",
	component: ModalBase,
	parameters: {
		componentSubtitle: "all modals"
	}
};

export const allModals = () => (
	<>
		<Modal title="Basic Modal" />
		<Modal title="Custom Width Modal" width="90%" />
		<Modal
			title="Custom footer buttons"
			cancelText="Reset"
			okText="Submit"
			okType="outlined"
			okButtonProps={{
				htmlType: "submit"
			}}
			onOk={() => alert("custom ok handler called")}
		/>
	</>
);

export const allDialogs = () => (
	<>
		<Confirm
			icon="announcement"
			iconColor={COLORS.YELLOW}
			title="Warning Dialog?"
			okText="Confirm"
			cancelText="Close"
		>
			<p>Lorem ipsum dolor sit amet.</p>
		</Confirm>
		<Confirm
			icon="announcement"
			iconColor={COLORS.DANGER}
			title="Delete Dialog?"
			okText="Yes"
			okButtonProps={{
				btnStyle: "danger"
			}}
			cancelText="No"
		>
			<p>Lorem ipsum dolor sit amet.</p>
		</Confirm>
		<Confirm
			type="info"
			icon="info"
			iconColor={COLORS.PICTON_BLUE}
			title="This is a notification  message"
		>
			<p>Lorem ipsum dolor sit amet.</p>
		</Confirm>
		<Confirm
			type="success"
			icon="check_circle_outline"
			iconColor={COLORS.PRIMARY}
			title="Success title"
		>
			<p>Lorem ipsum dolor sit amet.</p>
		</Confirm>
		<Confirm
			type="error"
			icon="error_outline"
			iconColor={COLORS.DANGER}
			title="Error title"
		>
			<p>Lorem ipsum dolor sit amet.</p>
		</Confirm>
	</>
);

const Confirm = ({
	width,
	title,
	icon,
	iconColor,
	cancelText,
	cancelButtonProps,
	okText,
	okType,
	okButtonProps,
	type,
	children
}: Omit<ConfirmProps, "visible">) => {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<Button
				btnType="outlined"
				btnStyle="default"
				title={title as string}
				onClick={() => setOpen(true)}
				style={{ margin: "20px" }}
			/>
			{open ? (
				<ConfirmBase
					type={type}
					container={el}
					width={width}
					visible={open}
					title={title}
					icon={icon}
					iconColor={iconColor}
					cancelText={cancelText}
					onCancel={() => setOpen(false)}
					cancelButtonProps={cancelButtonProps}
					okText={okText}
					okType={okType}
					onOk={() => setOpen(false)}
					okButtonProps={okButtonProps}
					onClose={() => setOpen(false)}
				>
					{children}
				</ConfirmBase>
			) : null}
		</>
	);
};
