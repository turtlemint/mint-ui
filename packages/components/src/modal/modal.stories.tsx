import * as React from "react";
import { storiesOf } from "@storybook/react";
import { default as ModalBase, ModalProps } from "./modal";
import { default as ConfirmBase, ConfirmProps } from "./confirm";
import Button from "../button";
import { StoryWrapper } from "../storybook.setup";
import Announcement from "../icons/announcement";
import CheckOutline from "../icons/check-outline";
import ErrorOutline from "../icons/error-outline";
import Info from "../icons/info";
import COLORS from "../__utils/colors";

const el = document.createElement("div");
el.setAttribute("id", "modal-root");
document.body.append(el);


const stories = storiesOf("Modal", module);


const Modal = ({ width, title, cancelText, okText, okType, okButtonProps }: Omit<ModalProps, "visible" | "children">) => {
    const [open, setOpen] = React.useState(false);

    return (
        <StoryWrapper>
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
                    okButtonProps={okButtonProps ? {
                        htmlType: "submit"
                    } : {}}
                    onClose={() => setOpen(false)}>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                </ModalBase>
            ) : null}
        </StoryWrapper>
    );
}

stories.add("basic modal", () => (
    <Modal title="Basic Modal" />
));

stories.add("custom width", () => (
    <Modal title="Custom Width Modal" width="90%" />
));

stories.add("custom footer buttons", () => (
    <Modal title="Custom footer buttons" cancelText="Reset" okText="Submit" okType="outlined" okButtonProps={{
        htmlType: "submit"
    }} onOk={() => alert("custom ok handler called")} />
));


const Confirm = ({ width, title, icon, cancelText, cancelButtonProps, okText, okType, okButtonProps, type, children }: Omit<ConfirmProps, "visible">) => {
    const [open, setOpen] = React.useState(false);

    return (
        <StoryWrapper>
            <Button onClick={() => setOpen(true)}>Confirm</Button>
            {open ? (
                <ConfirmBase
                    type={type}
                    container={el}
                    width={width}
                    visible={open}
                    title={title}
                    icon={icon}
                    cancelText={cancelText}
                    onCancel={() => setOpen(false)}
                    cancelButtonProps={cancelButtonProps}
                    okText={okText}
                    okType={okType}
                    onOk={() => setOpen(false)}
                    okButtonProps={okButtonProps}
                    onClose={() => setOpen(false)}>
                    {children}
                </ConfirmBase>
            ) : null}
        </StoryWrapper>
    );
}

stories.add("confirm", () => (
    <Confirm
        icon={<Announcement color={COLORS.YELLOW} />}
        title="Do you want to delete these items?"
        okText="Confirm"
        cancelText="Close">
        <p>Lorem ipsum dolor sit amet.</p>
    </Confirm>
));

stories.add("delete", () => (
    <Confirm
        icon={<Announcement color={COLORS.YELLOW} />}
        title="Are you sure you want to delete this?"
        okText="Yes"
        okButtonProps={{
            btnStyle: "danger"
        }}
        cancelText="No">
        <p>Lorem ipsum dolor sit amet.</p>
    </Confirm>
));
stories.add("info", () => (
    <Confirm
        type="info"
        icon={<Info color={COLORS.PICTON_BLUE} />}
        title="This is a notification  message"
    >
        <p>Lorem ipsum dolor sit amet.</p>
    </Confirm>
));
stories.add("success", () => (
    <Confirm
        type="success"
        icon={<CheckOutline color={COLORS.PRIMARY} />}
        title="Success title"
    >
        <p>Lorem ipsum dolor sit amet.</p>
    </Confirm>
));
stories.add("error", () => (
    <Confirm
        type="error"
        icon={<ErrorOutline color={COLORS.DANGER} />}
        title="Error title"
    >
        <p>Lorem ipsum dolor sit amet.</p>
    </Confirm>
));