import * as React from "react";
import { storiesOf } from "@storybook/react";
import Pagination from "./index";

const stories = storiesOf("Pagination", module);

stories.add("basic", () => {
	return (
		<>
			<Pagination defaultCurrent={1} total={1} />
			<Pagination defaultCurrent={2} total={11} />
			<Pagination defaultCurrent={3} total={21} />
			<Pagination defaultCurrent={4} total={31} />
			<Pagination defaultCurrent={5} total={41} />
			<Pagination defaultCurrent={6} total={51} />
			<Pagination defaultCurrent={5} total={61} />
			<Pagination defaultCurrent={4} total={71} />
			<Pagination defaultCurrent={3} total={81} />
			<Pagination defaultCurrent={2} total={91} />
			<Pagination defaultCurrent={1} total={101} />
		</>
	);
});
stories.add("more pages", () => {
	return <Pagination defaultCurrent={6} total={500} />;
});
stories.add("disabled", () => {
	return <Pagination defaultCurrent={6} total={500} disabled={true} />;
});
