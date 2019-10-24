import * as React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./index";
import { StoryWrapper } from "../storybook.setup";
import styled from "styled-components";
import COLORS from "../__utils/colors";

const stories = storiesOf("Card", module);

const GreyBackground = styled.div`
    background: ${COLORS.BACKGROUND_GREY};
    padding: 20px;
`;
stories.add("Basic card", () => {
    return (
        <StoryWrapper>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
            <div style={{ marginTop: "20px" }}></div>
            <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </StoryWrapper>
    )
});
stories.add("Card with hover box shadow", () => {
    return (
        <StoryWrapper>
            <Card size="small" hoverable={true} title="Hoverable Card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </StoryWrapper>
    );
});

stories.add("Borderless card", () => (
    <StoryWrapper>
        <GreyBackground>
            <Card size="small" bordered={false} title="Borderless Card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        </GreyBackground>
    </StoryWrapper>
));
stories.add("Simple card", () => (
    <StoryWrapper>
        <Card style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    </StoryWrapper>
));
stories.add("Header background card", () => (
    <StoryWrapper>
        <Card title="Card header background" headerBackground={true} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>
    </StoryWrapper>
));