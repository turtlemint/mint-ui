import * as React from "react";
import { storiesOf } from "@storybook/react";
import { default as ModalBase, ModalProps } from "./index";
import Button from "../button";
import { StoryWrapper } from "../storybook.setup";


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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, harum?</p>
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