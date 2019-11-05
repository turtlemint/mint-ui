import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import COLORS from "../__utils/colors";
import "../app.css";

export interface DialogProps {
	container?: Element;
	visible: boolean;
	width?: string | number;
	style?: React.CSSProperties;
	children: React.ReactNode;
}

const Dialog = ({
	visible,
	width,
	style,
	container,
	children
}: DialogProps) => {
	const renderModal = () => {
		return visible ? (
			<>
				<Mask className="tm-modal-mask"></Mask>
				<Wrapper
					tabIndex={-1}
					width={width}
					className="tm-modal-wrapper"
					role="dialog"
				>
					<Document
						role="document"
						style={style}
						className="tm-modal-document"
					>
						<Content className="tm-modal-content">
							{children}
						</Content>
					</Document>
				</Wrapper>
			</>
		) : null;
	};

	return container
		? ReactDOM.createPortal(renderModal(), container)
		: renderModal();
};

export const Mask = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.45);
	transition: background-color 0.2s ease-out;
`;

const shadow = "0 4px 12px rgba(0, 0, 0, 0.15)";

interface WrapperProps {
	tabIndex: number;
	role: string;
	width?: string | number;
	children: React.ReactNode;
}
export const Wrapper = styled.div<WrapperProps>`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	overflow: auto;
	outline: 0;
	transition: all 0.2s ease-out;
`;

export interface DocumentProps {
	width?: string | number;
	role: string;
	style?: React.CSSProperties;
}
export const Document = styled.div<DocumentProps>`
	position: relative;
	top: 100px;
	width: ${({ width }) => (width ? width : "520px")};
	margin: 0 auto;
	padding-bottom: 24px;
	pointer-events: none;
`;

export const Content = styled.div`
	position: relative;
	background-color: ${COLORS.WHITE};
	background-clip: padding-box;
	border: 0;
	border-radius: 4px;
	-webkit-box-shadow: ${shadow};
	box-shadow: ${shadow};
	pointer-events: auto;
`;

export default Dialog;
