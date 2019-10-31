import * as React from "react";
import { cleanup, fireEvent, render} from "@testing-library/react";
import RadioGroup from "./index";

afterEach(cleanup);
describe("Radio group", () => {
    test("renders correctly", () => {
        const { asFragment } = render( 
            <RadioGroup data-testid="radio-group" value="item-4" onChange={(val) => {
                    // alert(val);
                }}>
                <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
                <RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
                <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
                <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
            </RadioGroup>
        );  
        expect(asFragment()).toMatchSnapshot();
    });

    test("click works", (done) => {
        const handleClick = ((val)) => {
            expect(val).toBe("item-2");
            done();
        }
        const { getByTestId } = render(
            <RadioGroup data-testid="radio-test" value="item-4" onChange={handleClick}>
                <RadioGroup.Button value="item-1">Item 1</RadioGroup.Button>
                <RadioGroup.Button value="item-2">Item 2</RadioGroup.Button>
                <RadioGroup.Button value="item-3">Item 3</RadioGroup.Button>
                <RadioGroup.Button value="item-4">Item 4</RadioGroup.Button>
            </RadioGroup>
        );
        const component = getByTestId("radio-test");
        fireEvent.click(component.getElementsByTagName("label")[1]);
    });
})