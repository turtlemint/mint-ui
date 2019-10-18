import * as React from "react";
import { storiesOf } from "@storybook/react";
import Select from "./";
import { Option } from "./dropdown";

const stories = storiesOf("Select", module);

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
const DemoSelect = () => {
    const [value, setValue] = React.useState("Select Value");

    const handleSelect = (option: any) => {
        console.log(option);
        setValue(option.title);
    }
    return (
        <Select value={value} onSelect={handleSelect}>
            {
                data.map((d: any) => (
                    <Option
                        key={d.value}
                        value={d.value}>
                        {d.text}
                    </Option>
                ))
            }
        </Select>
    );
}
stories.add("functional demo", () => (
    <DemoSelect />
))