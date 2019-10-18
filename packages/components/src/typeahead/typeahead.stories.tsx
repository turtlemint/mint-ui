import * as React from "react";
import { storiesOf } from "@storybook/react";
import axios from "axios";
import TypeAhead from "./index";
import { SelectCTA, SelectWrapper } from "../select";
import Dropdown, { Option } from "../select/dropdown";
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
    <SelectWrapper>
        <SelectCTA value="Item 1" />
    </SelectWrapper>
));
stories.add("clicked label", () => (
    <SelectWrapper>
        <Input
            block={true}
            value=""
            placeholder="Item 1"
        />
        <Dropdown data-testid="typeahead-dropdown">
            {
                data.map((d: any) => (
                    <Option key={d.value} value={d.value}>{d.text}</Option>
                ))
            }
        </Dropdown>
    </SelectWrapper>
));

export const TypeAheadDemo = () => {
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [fetching, setFetching] = React.useState(false);

    const fetchUser = async () => {
        setFetching(true);
        setOpen(false);
        const response = await axios.get('https://randomuser.me/api/?results=15');
        const data = response.data.results.map((user: any) => ({
            text: `${user.name.first} ${user.name.last}`,
            value: user.login.username,
        }));
        setData(data);
        setOpen(true);
        setFetching(false);
    }

    const handleSelect = (value: unknown) => {
        console.log(value);
        setOpen(false);
    }

    return (
        <Row style={{
            padding: "0 30px"
        }}>
            <Col>
                <TypeAhead
                    value="some value"
                    loading={fetching}
                    fetchFunc={fetchUser}
                    onSelect={handleSelect}
                    open={open}
                    placeholder="Select user..."
                >
                    {data.map((d: any) => (
                        <Option key={d.value} value={d.value}>{d.text}</Option>
                    ))}
                </TypeAhead>
            </Col>
        </Row>
    )
}
stories.add("functional demo", () => (
    <TypeAheadDemo />
))