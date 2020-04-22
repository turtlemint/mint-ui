import * as React from "react";
import { render } from "@testing-library/react";
import { Title, Text, Striked} from ".";


describe("Typography tests", () => {
    test("Title renders correctly", () => {
        const { asFragment } = render(<Title text="Heading 1" level="1"  />);
        expect(asFragment()).toMatchSnapshot();
    });

    test("Text styles renders correctly", () => {
        const { asFragment } = render(<Text textStyle="uppercase" textSpace={0.8} text="UPPERCASE Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur" />);
        expect(asFragment()).toMatchSnapshot();
    });

    test("Font weights renders correctly", () => {
        const { asFragment } = render(<Text text="LIGHT Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur" size={20} weight="light" />);
        expect(asFragment()).toMatchSnapshot();
    });

    test("Text Types renders correctly", () => {
        const { asFragment } = render(<Text textType="warning" text="Warning Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur"  weight="light" />);
        expect(asFragment()).toMatchSnapshot();
    });
});