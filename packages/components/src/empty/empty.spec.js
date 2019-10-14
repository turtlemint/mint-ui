import React from "react";
import { render, cleanup } from "@testing-library/react";
import Empty from "./";
import SimpleImage from "./simple";

afterEach(cleanup);

describe("Empty component tests", () => {
    test("default renders correctly", () => {
        const { asFragment } = render(<Empty description="default image description" />);
        expect(asFragment()).toMatchSnapshot();
    });

    test("simple image with prop image renders correctly", () => {
        const { asFragment } = render(<Empty image={<SimpleImage />} description="simple image description" />);
        expect(asFragment()).toMatchSnapshot();
    });
});
