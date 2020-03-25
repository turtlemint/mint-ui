import * as React from "react";
import Card from "../../../components/src/card";

interface ResultCardProps {
	children: React.ReactNode | React.ReactNodeArray;
}
const ResultCard = ({ children }: ResultCardProps) => {
	return <Card>{children}</Card>;
};

export default ResultCard;
