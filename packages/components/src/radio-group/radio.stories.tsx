import * as React from "react";
import { storiesOf } from "@storybook/react";
import RadioGroup from "./index";
import Row from "../grid/row";
import Col from "../grid/col";

const stories = storiesOf("RadioGroup", module).addParameters({
    info: {
        propTables: [RadioGroup]
    }
});

stories.add("outlined", () => (
    <>
        <Row>
            <Col>
                <RadioGroup value="item-4" onChange={(val) => {
                    // alert(val);
                }}>
                    <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
                    <RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
                    <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
                    <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
                </RadioGroup>
            </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
            <Col>
                <RadioGroup value="item-1" onChange={(val) => {
                    // alert(val);
                }}>
                    <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
                    <RadioGroup.Button disabled={true} value="item-2">Item 2</RadioGroup.Button>
                    <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
                    <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
                </RadioGroup>
            </Col>
        </Row>
    </>
));

stories.add("solid", () => (
    <>
        <Row>
            <Col>
                <RadioGroup buttonStyle="solid" value="item-4" onChange={(val) => {
                    // alert(val);
                }}>
                    <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
                    <RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
                    <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
                    <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
                </RadioGroup>
            </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
            <Col>
                <RadioGroup buttonStyle="solid" value="item-4" onChange={(val) => {
                    // alert(val);
                }}>
                    <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
                    <RadioGroup.Button disabled value="item-2">Item 2</RadioGroup.Button>
                    <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
                    <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
                </RadioGroup>
            </Col>
        </Row>

    </>
));

stories.add("size", () => (
    <>
        <Row>
            <Col>
                <RadioGroup size="large" value="item-4" onChange={(val) => {
                    // alert(val);
                }}>
                    <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
                    <RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
                    <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
                    <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
                </RadioGroup>
            </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
            <Col>
                <RadioGroup size="default" value="item-1" onChange={(val) => {
                    // alert(val);
                }}>
                    <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
                    <RadioGroup.Button disabled={true} value="item-2">Item 2</RadioGroup.Button>
                    <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
                    <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
                </RadioGroup>
            </Col>
        </Row>
        <Row style={{ marginTop: "30px" }}>
            <Col>
                <RadioGroup size="small" value="item-1" onChange={(val) => {
                    // alert(val);
                }}>
                    <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
                    <RadioGroup.Button disabled={true} value="item-2">Item 2</RadioGroup.Button>
                    <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
                    <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
                </RadioGroup>
            </Col>
        </Row>
    </>
));