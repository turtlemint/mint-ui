import * as React from "react";
import { storiesOf } from "@storybook/react";
import { CompositeUI } from "../index";
import config from "./mock.json";
import { TypeMap } from "./type-map";

const stories = storiesOf("Composite UI", module);

stories.add("default", () => {
	return <CompositeUI config={config} typeMap={TypeMap} />;
});
