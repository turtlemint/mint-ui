import * as React from "react";
import { storiesOf } from "@storybook/react";
import Collapse, { Panel } from './index';
import { StoryWrapper } from "../storybook.setup";
import Settings from "../icons/settings";

const stories = storiesOf("Collapse", module);

stories.add("simple collapse", () => (
    <StoryWrapper>
        <Collapse activeKey={2} onChange={(key: string | number) => { console.log('key', key) }}>
            <Panel panelKey={1} header="Panel Header 1">
                Some content
            </Panel>
            <Panel panelKey={2} header="Panel Header 2">
                Some content
            </Panel>
            <Panel panelKey={3} header="Panel Header 3" disabled>
                Some content
            </Panel>
        </Collapse>
    </StoryWrapper>
));

stories.add("accordion", () => (
    <StoryWrapper>
        <Collapse accordion={true} activeKey={2} onChange={(key: string | number) => { console.log(key) }}>
            <Panel panelKey={1} header="Panel Header 1">
                Some content
            </Panel>
            <Panel panelKey={2} header="Panel Header 2">
                Some content
            </Panel>
            <Panel panelKey={3} header="Panel Header 3" disabled>
                Some content
            </Panel>
        </Collapse>
    </StoryWrapper>
));

stories.add("custom panel", () => (
    <StoryWrapper>
        <Collapse accordion={true} expandIconPosition="right" activeKey={2} onChange={(key: string | number) => { console.log(key) }}>
            <Panel panelKey={1} header="Panel Header 1" extra={<Settings />}>
                Some content
            </Panel>
            <Panel panelKey={2} header="Panel Header 2" extra={<Settings />}>
                Some content
            </Panel>
            <Panel panelKey={3} header="Panel Header 3" disabled>
                Some content
            </Panel>
        </Collapse>
    </StoryWrapper>
));