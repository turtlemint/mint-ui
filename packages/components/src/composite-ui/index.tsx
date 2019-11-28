import * as React from "react";
import { IDict } from "../__utils/type";

export const renderComponent = (Component: any) => (props: any) => (
	<Component {...props}>{props.children}</Component>
);

const configureUI = (TypeMap: IDict<(Component: any) => any>) => {
	return function buildUI(buildConfig: any) {
		const { type, children, ...props } = buildConfig;
		if (children && children.length) {
			let len = children.length;
			const results = [];
			for (let i = 0; i < len; i++) {
				const result = buildUI(children[i]);
				results.push(result);
			}
			const MappedComponentWrapper = TypeMap[type]
				? TypeMap[type]
				: TypeMap["wrapper"];
			return (
				<MappedComponentWrapper {...props}>
					{results}
				</MappedComponentWrapper>
			);
		} else {
			const MappedComponent = TypeMap[type]
				? TypeMap[type]
				: TypeMap["wrapper"];
			return <MappedComponent {...props} />;
		}
	};
};

interface CompositeUIProps {
	config: any;
	typeMap: IDict<(Component: any) => any>;
}
export const CompositeUI = ({ config, typeMap }: CompositeUIProps) => {
	const buildUI = configureUI(typeMap);
	return <div>{buildUI(config)}</div>;
};

export default CompositeUI;
