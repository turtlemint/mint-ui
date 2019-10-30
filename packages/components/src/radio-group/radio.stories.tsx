import * as React from "react";
import { storiesOf } from "@storybook/react";
import RadioGroup from "./index";
import { StoryWrapper } from "../storybook.setup";

const stories = storiesOf("RadioGroup", module);

stories.add("outlined", () => (
    <StoryWrapper>
        <RadioGroup value="item-4" onChange={(val) => {
            // alert(val);
        }}>
            <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
            <RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
            <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
            <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
        </RadioGroup>
    </StoryWrapper>
));

stories.add("solid", () => (
    <StoryWrapper>
        <RadioGroup buttonStyle="solid" value="item-4" onChange={(val) => {
            // alert(val);
        }}>
            <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
            <RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
            <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
            <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
        </RadioGroup>
    </StoryWrapper>
));
