import * as React from "react";
import { render, fireEvent, cleanup, getByTestId } from "@testing-library/react";
import Collapse, { Panel } from './index';

afterEach(cleanup);

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
        const { getByTestId } = render(
            <Collapse data-testid="tm-collapse" activeKey={2}>
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
    });
    const node = getByTestId("tm-collapse");
    console.log(node);
    // expect(getByTestId("collapse").getElementsByClassName("tm-collapse-body")[0]).not.toBeInTheDocument();
    // fireEvent.click(node);
    // expect(getByTestId("tm-collapse-body")[0]).toBeInTheDocument();
});