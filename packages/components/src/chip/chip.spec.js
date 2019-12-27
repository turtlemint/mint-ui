import * as React from "react";
import { render } from "@testing-library/react";
import Chip from "./index";

test("chip renders correctly", () => {
    const { asFragment } = render(<Chip text="November" />);
    expect(asFragment()).toMatchSnapshot();
});