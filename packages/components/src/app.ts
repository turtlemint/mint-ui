import { css } from "styled-components";
import COLORS from "./__utils/colors";

export const GlobalStyles = css`
	-webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
	-moz-box-sizing: border-box; /* Firefox, other Gecko */
	box-sizing: border-box; /* Opera/IE 8+ */
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC",
		"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica,
		Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
		"Segoe UI Symbol";
	font-variant: tabular-nums;
	line-height: 1.5;
	-webkit-font-feature-settings: "tnum";
	font-feature-settings: "tnum";
	color: ${COLORS.GREY1};
	font-size: 14px;
`;
