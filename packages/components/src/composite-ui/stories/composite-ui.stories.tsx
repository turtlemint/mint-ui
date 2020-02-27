import * as React from "react";
import { storiesOf } from "@storybook/react";
import { CompositeUI } from "../index";
import config from "./mock.json";
import { TypeMap } from "./type-map";

storiesOf("Composite UI", module).add("default", () => {
	return <CompositeUI config={config} typeMap={TypeMap} />;
});
