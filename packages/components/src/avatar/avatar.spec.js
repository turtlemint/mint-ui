import * as React from "react";
import { render } from "@testing-library/react";
import Avatar from ".";

test("avatar renders correctly", () => {
    const { asFragment } = render(
        <Avatar icon="warning" />
    );
    expect(asFragment()).toMatchSnapshot();
});