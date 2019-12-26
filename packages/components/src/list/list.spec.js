import * as React from "react";
import { render } from "@testing-library/react";
import List from "./index";

test("list renders correctly", () => {
    const data = [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner.",
        "Australian walks 100km after outback crash.",
        "Man charged over missing wedding girl.",
        "Los Angeles battles huge wildfires."
    ];
    const { asFragment } = render(
        <List dataSource={data} />
    )
});