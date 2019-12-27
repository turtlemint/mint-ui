import * as React from "react";
import { render } from "@testing-library/react";
import Tabs from "./index";

test("Tabs renders correctly", () => {
    const { TabPane } = Tabs;
     const handleChange = (key) => {
        console.log(key);
    }
    const { asFragment } = render(
         <Tabs defaultActiveKey="a" onChange={handleChange}>
            <TabPane tabKey="a" tab="Tab A">
                Content of Tab A
            </TabPane>
            <TabPane disabled={true} tabKey="b" tab="Tab B">
                Content of Tab B
            </TabPane>
            <TabPane tabKey="c" tab="Tab C">
                Content of Tab C
            </TabPane>
        </Tabs>
    );
    expect(asFragment()).toMatchSnapshot();
});