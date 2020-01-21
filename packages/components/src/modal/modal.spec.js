import * as React from "react";
import { render, cleanup } from "@testing-library/react";
import Dialog from "./dialog";
import Confirm from "./confirm";
import COLORS from "../__utils/colors";
import Icon from "../icon";

afterEach(cleanup);

describe("Dialog", () => {
	test("Snapshot", () => {
		const el = document.createElement("div");
		el.setAttribute("id", "modal-root");
		document.body.append(el);
		const { asFragment } = render(
			<Dialog visible={true} width={720} container={el}>
				Some content
			</Dialog>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	test("check for to be visible or not", () => {
		const el = document.createElement("div");
		el.setAttribute("id", "modal-root");
		document.body.append(el);
		const { rerender, getByTestId, queryByTestId } = render(
			<Dialog
				data-testid="dialog"
				visible={true}
				width={720}
				container={el}
			>
				Some content
			</Dialog>
		);

		expect(getByTestId("dialog")).toBeInTheDocument();

		rerender(
			<Dialog
				data-testid="dialog"
				visible={false}
				width={720}
				container={el}
			>
				Some content
			</Dialog>
		);
		expect(queryByTestId("dialog")).not.toBeInTheDocument();
	});
});

describe("Confirm Modal", () => {
	test("Snapshot", () => {
		const { asFragment } = render(
			<Confirm
				type="error"
				icon={<Icon name="error_outline" color={COLORS.DANGER} />}
				title="Error title"
			>
				<p>Lorem ipsum dolor sit amet.</p>
			</Confirm>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
