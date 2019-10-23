import * as React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./index";
import { StoryWrapper } from "../storybook.setup";

const stories = storiesOf("Card", module);

stories.add("default", () => {
    return (
        <StoryWrapper>
            <Card>
                <Card.Header>
                    Header
                </Card.Header>
                <Card.Body>
                    Card content
               </Card.Body>
            </Card>
        </StoryWrapper>
    )
});