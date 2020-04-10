import * as React from "react";
import Row, { RowProps } from "../grid/row";
import { DisplayType } from ".";

export interface FormRowProps extends RowProps {
	/** Determines if the row contains a submit button */
	submit?: boolean;
	/** Passed internally by Form Component */
	disabled?: boolean;
	layout?: DisplayType;
	children: React.ReactElement<any> | React.ReactElement<any>[];
}
export const FormRow = ({
	layout,
	disabled,
	children,
	...rest
}: FormRowProps) => {
	return layout === "inline" ? ( // Render submit button directly
		<span style={{ marginLeft: "15px" }}>
			{React.Children.map(children, child => {
				if (child.props.htmlType && child.props.htmlType === "submit") {
					return React.cloneElement(child, { disabled });
				}
				return child;
			})}
		</span>
	) : (
		<Row {...rest} style={{ marginTop: "40px" }}>
			{React.Children.map(children, child => {
				const nodes = [];
				if (child.props.htmlType && child.props.htmlType === "submit") {
					nodes.push(React.cloneElement(child, { disabled }));
				} else {
					nodes.push(child);
				}
				return nodes;
			})}
		</Row>
	);
};

export default FormRow;
