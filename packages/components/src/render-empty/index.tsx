import * as React from "react";
import Empty from "../empty";

const RenderEmpty = (componentName?: string): React.ReactNode => {
    switch (componentName) {
        case "Table":
        case "List":
        case "Select":
            return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
        default:
            return <Empty />
    }
}
export type RenderEmptyHandler = typeof RenderEmpty;

export default RenderEmpty;