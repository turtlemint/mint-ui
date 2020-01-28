import * as React from "react";
import { FormContext } from ".";

export interface FormItemProps {
	label: string;
	children: any;
}

const FormItem = ({ label, children }: FormItemProps) => {
	const { state, changeHandler: onChange } = React.useContext(FormContext);
	return (
		<div>
			<label>{label}</label>
			{React.cloneElement(children, {
				value: state[children.props.name],
				onChange
			})}
		</div>
	);
};

export default FormItem;
