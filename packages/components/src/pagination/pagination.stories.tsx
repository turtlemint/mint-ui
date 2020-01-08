import * as React from "react";
import { storiesOf } from "@storybook/react";
import Pagination from "./index";

const stories = storiesOf("Pagination", module);

stories.add("basic", () => {
	return <Pagination defaultCurrent={2} total={50} />;
});
stories.add("more pages", () => {
	return <Pagination defaultCurrent={6} total={500} />;
});
