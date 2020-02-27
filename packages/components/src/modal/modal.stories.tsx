import * as React from "react";
import { storiesOf } from "@storybook/react";
import { default as ModalBase, ModalProps } from "./";
import { default as ConfirmBase, ConfirmProps } from "./confirm";
import Button from "../button";
import COLORS from "../__utils/colors";
import makeTable from "../table/prop-table";

const el = document.createElement("div");
el.setAttribute("id", "modal-root");
document.body.append(el);

const ConfProps = [
	"container",
	"title",
	"visible",
	"width",
	"style",
	"bodyStyle",
	"closable",
	"closeIcon",
	"cancelText",
	"cancelButtonProps",
	"onCancel",
	"okText",
	"okType",
	"okButtonProps",
	"onOk",
	"onClose"
];

const TableComponent = makeTable(ConfProps);

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
			<Button onClick={() => setOpen(true)}>Open Modal</Button>
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

storiesOf("Modal", module)
	.add("basic modal", () => <Modal title="Basic Modal" />, {
		info: {
			propTables: [ModalBase]
		}
	})
	.add(
		"custom width",
		() => <Modal title="Custom Width Modal" width="90%" />,
		{
			info: {
				propTables: [ModalBase]
			}
		}
	)
	.add(
		"custom footer buttons",
		() => (
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
		),
		{
			info: {
				propTables: [ModalBase]
			}
		}
	)
	.add(
		"confirm",
		() => (
			<Confirm
				icon="announcement"
				iconColor={COLORS.YELLOW}
				title="Do you want to delete these items?"
				okText="Confirm"
				cancelText="Close"
			>
				<p>Lorem ipsum dolor sit amet.</p>
			</Confirm>
		),
		{
			info: {
				TableComponent,
				propTables: [ConfirmBase]
			}
		}
	)
	.add(
		"delete",
		() => (
			<Confirm
				icon="announcement"
				iconColor={COLORS.DANGER}
				title="Are you sure you want to delete this?"
				okText="Yes"
				okButtonProps={{
					btnStyle: "danger"
				}}
				cancelText="No"
			>
				<p>Lorem ipsum dolor sit amet.</p>
			</Confirm>
		),
		{
			info: {
				TableComponent,
				propTables: [ConfirmBase]
			}
		}
	)
	.add(
		"info",
		() => (
			<Confirm
				type="info"
				icon="info"
				iconColor={COLORS.PICTON_BLUE}
				title="This is a notification  message"
			>
				<p>Lorem ipsum dolor sit amet.</p>
			</Confirm>
		),
		{
			info: {
				TableComponent,
				propTables: [ConfirmBase]
			}
		}
	)
	.add(
		"success",
		() => (
			<Confirm
				type="success"
				icon="check_circle_outline"
				iconColor={COLORS.PRIMARY}
				title="Success title"
			>
				<p>Lorem ipsum dolor sit amet.</p>
			</Confirm>
		),
		{
			info: {
				TableComponent,
				propTables: [ConfirmBase]
			}
		}
	)
	.add(
		"error",
		() => (
			<Confirm
				type="error"
				icon="error_outline"
				iconColor={COLORS.DANGER}
				title="Error title"
			>
				<p>Lorem ipsum dolor sit amet.</p>
			</Confirm>
		),
		{
			info: {
				TableComponent,
				propTables: [ConfirmBase]
			}
		}
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
			<Button onClick={() => setOpen(true)}>Confirm</Button>
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
