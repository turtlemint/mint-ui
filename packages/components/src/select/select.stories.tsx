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
interface DemoSelectProps {
    onSelect?: (value: string) => void;
}
export const DemoSelect = ({ onSelect }: DemoSelectProps) => {
    const [value, setValue] = React.useState("Select Value");

    const handleSelect = (option: any) => {
        setValue(option.title);
        //for test case
        onSelect(option.title);
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
stories.add("full functional demo", () => (
    <DemoSelect />
))

stories.add("default", () => (
    <Select value="Test value">
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
))