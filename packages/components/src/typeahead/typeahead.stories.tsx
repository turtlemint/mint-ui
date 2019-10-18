import * as React from "react";
import { storiesOf } from "@storybook/react";
import TypeAhead, { TypeaheadWrapper, StyledTypeaheadLabel } from "./index";
import Dropdown, { List, Option } from "./dropdown";

import Row from "../grid/row";
import Col from "../grid/col";
import Input from "../input";

const stories = storiesOf("Typeahead", module);

export const data = [
    {
        value: 1,
        text: "Item 1"
    },
    {
        value: 2,
        text: "Item 2"
    }
];

stories.add("default", () => <Row style={{
    padding: "0 30px"
}}>
    <Col sm={6} md={6} lg={6}>
        <TypeAhead
            value="some value"
            loading={false}
            fetchFunc={() => { }}
            onSelect={() => { }}
            open={false}
            placeholder="Select user..."
        >
            {
                data.map((d: any) => (
                    <Option key={d.value} value={d.value}>{d.text}</Option>
                ))
            }
        </TypeAhead>
    </Col>
</Row>
);

stories.add("loading", () => (
    <Row style={{
        padding: "0 30px"
    }}>
        <Col sm={6} md={6} lg={6}>
            <TypeAhead
                loading={true}
                fetchFunc={() => { }}
                onSelect={() => { }}
                open={false}
                placeholder="Select user..."
            >
                {
                    data.map((d: any) => (
                        <Option key={d.value} value={d.value}>{d.text}</Option>
                    ))
                }
            </TypeAhead>
        </Col>
    </Row>
));

stories.add("loaded", () => (
    <Row style={{
        padding: "0 30px"
    }}>
        <Col sm={6} md={6} lg={6}>
            <TypeAhead
                loading={false}
                fetchFunc={() => { }}
                onSelect={() => { }}
                open={true}
                placeholder="Select user..."
            >
                {
                    data.map((d: any) => (
                        <Option key={d.value} value={d.value}>{d.text}</Option>
                    ))
                }
            </TypeAhead>
        </Col>
    </Row>
));

stories.add("selected value label", () => (
    <TypeaheadWrapper>
        <StyledTypeaheadLabel>Item 1</StyledTypeaheadLabel>
    </TypeaheadWrapper>
));
stories.add("clicked label", () => (
    <TypeaheadWrapper>
        <Input
            block={true}
            value=""
            placeholder="Item 1"
        />
        <Dropdown data-testid="typeahead-dropdown">
            <List>
                {
                    data.map((d: any) => (
                        <Option key={d.value} value={d.value}>{d.text}</Option>
                    ))
                }
            </List>
        </Dropdown>
    </TypeaheadWrapper>
))