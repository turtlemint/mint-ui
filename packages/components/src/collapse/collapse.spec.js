import React from "react";
import {  render, fireEvent, cleanup, getByTestId, queryAllByTestId } from "@testing-library/react";
import Collapse, { Panel } from './index';

afterEach(cleanup)

describe("collapse", () => {
    test("renders correctly", () => {
        const { asFragment } = render(
            <Collapse accordion={true} expandIconPosition="right" activeKey={2}>
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
        );
        expect(asFragment()).toMatchSnapshot();
    });
    test("toggles", () => {
        const { queryAllByTestId, queryByTestId, getByTestId } = render(
            <Collapse data-testid="collapse" activeKey={2} onChange={key => { console.log('key', key) }}>
                <Panel panelKey={1} header="Panel Header 1">
                    Some content 1
                </Panel>
                <Panel panelKey={2} header="Panel Header 2">
                    Some content 2
                </Panel>
                <Panel panelKey={3} header="Panel Header 3" disabled>
                    Some content 3
                </Panel>
            </Collapse>
        );
        expect(queryAllByTestId("tm-collapse-body").length).toBe(1);
        fireEvent.click(queryAllByTestId("tm-panel-header")[0]);
        expect(queryAllByTestId("tm-collapse-body").length).toBe(2);
    });
});