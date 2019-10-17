import * as React from "react";
import { storiesOf } from "@storybook/react";
import TypeAhead, { Option } from "./index";
import Row from "../grid/row";
import Col from "../grid/col";

const stories = storiesOf("Typeahead", module);

const Demo = () => {
    const [data, setData] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [fetching, setFetching] = React.useState(false);
    const fetchUser = (val: string): void => {
        setFetching(true);
        setOpen(false);
        fetch('https://randomuser.me/api/?results=15')
            .then(response => response.json())
            .then(body => {
                const data = body.results.map((user: any) => ({
                    text: `${user.name.first} ${user.name.last}`,
                    value: user.login.username,
                }));
                setData(data);
                setOpen(true);
                setFetching(false);
            });
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
stories.add("default", () => <Demo />)