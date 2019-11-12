import * as React from "react";
import DefaultEmptyImg from "./empty";
import SimpleEmptyImg from "./simple";
import styled, { css } from "styled-components";
import SIZE from "../__utils/size";
import "../app.css";
import COLORS from "../__utils/colors";

const defaultEmptyImg = <DefaultEmptyImg />;
const simpleEmptyImg = <SimpleEmptyImg />;

export interface EmptyProps {
	className?: string;
	style?: React.CSSProperties;
	/**
	 * @since 3.16.0
	 */
	imageStyle?: React.CSSProperties;
	image?: React.ReactNode;
	description?: React.ReactNode;
	children?: React.ReactNode;
}

interface EmptyType extends React.FC<EmptyProps> {
	PRESENTED_IMAGE_DEFAULT: React.ReactNode;
	PRESENTED_IMAGE_SIMPLE: React.ReactNode;
}

const StyledContainer = styled.div<{ image: React.ReactNode }>`
	margin: 0 8px;
	font-size: ${SIZE.EMPTY_FONT_SIZE};
	line-height: 22px;
	text-align: center;
	${props =>
		props.image === simpleEmptyImg &&
		css`
			margin: 32px 0;
			color: ${COLORS.DISABLED};
		`}
`;

const StyledImageContainer = styled.div<{ image: React.ReactNode }>`
	height: 100px;
	margin-bottom: 8px;
	${props =>
		props.image === simpleEmptyImg &&
		css`
			height: 40px;
		`}
	img {
		height: 100%;
	}

	svg {
		height: 100%;
		margin: auto;
	}
`;

export const Description = styled.p`
	margin: 0;
`;

export const Footer = styled.div`
	margin-top: 16px;
`;

export const Empty: EmptyType = ({
	className,
	image = defaultEmptyImg,
	description,
	children,
	imageStyle,
	...restProps
}: EmptyProps) => {
	const alt = typeof description === "string" ? description : "empty";

	let imageNode: React.ReactNode = null;

	if (typeof image === "string") {
		imageNode = <img alt={alt} src={image} />;
	} else {
		imageNode = image;
	}

	return (
		<StyledContainer className={className} image={image} {...restProps}>
			<StyledImageContainer image={image} style={imageStyle}>
				{imageNode}
			</StyledImageContainer>
			{description && <Description>{description}</Description>}
			{children && <Footer>{children}</Footer>}
		</StyledContainer>
	);
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;

export default Empty;
