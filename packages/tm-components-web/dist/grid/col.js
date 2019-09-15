"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importStar(require("styled-components"));
var breakpoints_1 = require("../__utils/breakpoints");
var type_1 = require("../__utils/type");
var getColWidth = function (gridSpan) {
    if (!gridSpan)
        return null;
    var width = (gridSpan / 12) * 100;
    return width.toFixed(8) + "%";
};
var ColValues = type_1.tupleNum(12, 9, 8, 6, 4, 3);
;
var Col = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    padding-left: 15px;\n    padding-right: 15px;\n    min-height: 1px;\n    float: left;\n    width: 100%;\n    text-align: ", ";\n    /* <= 768px */\n    @media(max-width: ", "px) {\n        ", ";\n        ", ";\n        ", ";\n    }\n    /* 769 - 1024 */\n    @media(min-width: ", "px ) and (max-width: ", "px ) {\n        ", ";\n        ", ";\n        ", ";\n    }\n    /* 1025 - 1440 */\n    @media(min-width: ", "px) and (max-width: ", "px) {\n        ", ";\n        ", ";\n        ", ";\n    }\n    /* > 1440 */\n    @media(min-width: ", "px) {\n        ", ";\n        ", ";\n        ", ";\n    }\n"], ["\n    padding-left: 15px;\n    padding-right: 15px;\n    min-height: 1px;\n    float: left;\n    width: 100%;\n    text-align: ", ";\n    /* <= 768px */\n    @media(max-width: ", "px) {\n        ",
    ";\n        ",
    ";\n        ",
    ";\n    }\n    /* 769 - 1024 */\n    @media(min-width: ", "px ) and (max-width: ", "px ) {\n        ",
    ";\n        ",
    ";\n        ",
    ";\n    }\n    /* 1025 - 1440 */\n    @media(min-width: ", "px) and (max-width: ", "px) {\n        ",
    ";\n        ",
    ";\n        ",
    ";\n    }\n    /* > 1440 */\n    @media(min-width: ", "px) {\n        ",
    ";\n        ",
    ";\n        ",
    ";\n    }\n"])), function (props) { return (props.align ? props.align : 'left'); }, breakpoints_1.BREAKPOINTS.SM, function (_a) {
    var _b = _a.xsHidden, xsHidden = _b === void 0 ? false : _b;
    return xsHidden && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            display: none;\n        "], ["\n            display: none;\n        "])));
}, function (_a) {
    var xs = _a.xs, xsHidden = _a.xsHidden;
    return xs && !xsHidden && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            width: ", "\n        "], ["\n            width: ", "\n        "])), getColWidth(xs));
}, function (_a) {
    var xsOffset = _a.xsOffset, xsHidden = _a.xsHidden;
    return xsOffset && !xsHidden && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            margin-left: ", ";\n        "], ["\n            margin-left: ", ";\n        "])), getColWidth(xsOffset));
}, breakpoints_1.BREAKPOINTS.SM + 1, breakpoints_1.BREAKPOINTS.MD, function (_a) {
    var _b = _a.smHidden, smHidden = _b === void 0 ? false : _b;
    return smHidden && styled_components_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n            display: none;\n        "], ["\n            display: none;\n        "])));
}, function (_a) {
    var sm = _a.sm, smHidden = _a.smHidden;
    return sm && !smHidden && styled_components_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n            width: ", ";\n        "], ["\n            width: ", ";\n        "])), getColWidth(sm));
}, function (_a) {
    var smOffset = _a.smOffset, smHidden = _a.smHidden;
    return smOffset && !smHidden && styled_components_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n            margin-left: ", ";\n        "], ["\n            margin-left: ", ";\n        "])), getColWidth(smOffset));
}, breakpoints_1.BREAKPOINTS.MD + 1, breakpoints_1.BREAKPOINTS.LG, function (_a) {
    var _b = _a.mdHidden, mdHidden = _b === void 0 ? false : _b;
    return mdHidden && styled_components_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n            display: none;\n        "], ["\n            display: none;\n        "])));
}, function (_a) {
    var md = _a.md, mdHidden = _a.mdHidden;
    return md && !mdHidden && styled_components_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n            width: ", "\n        "], ["\n            width: ", "\n        "])), getColWidth(md));
}, function (_a) {
    var mdOffset = _a.mdOffset, mdHidden = _a.mdHidden;
    return mdOffset && !mdHidden && styled_components_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n            margin-left: ", "\n        "], ["\n            margin-left: ", "\n        "])), getColWidth(mdOffset));
}, breakpoints_1.BREAKPOINTS.LG + 1, function (_a) {
    var _b = _a.lgHidden, lgHidden = _b === void 0 ? false : _b;
    return lgHidden && styled_components_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n            display: none;\n        "], ["\n            display: none;\n        "])));
}, function (_a) {
    var lg = _a.lg, lgHidden = _a.lgHidden;
    return lg && !lgHidden && styled_components_1.css(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n            width: ", "\n        "], ["\n            width: ", "\n        "])), getColWidth(lg));
}, function (_a) {
    var lgOffset = _a.lgOffset, lgHidden = _a.lgHidden;
    return lgOffset && !lgHidden && styled_components_1.css(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n            margin-left: ", "\n        "], ["\n            margin-left: ", "\n        "])), getColWidth(lgOffset));
});
exports.default = Col;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvZ3JpZC9jb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHFFQUFnRDtBQUNoRCxzREFBcUQ7QUFDckQsd0NBQTJDO0FBRTNDLElBQU0sV0FBVyxHQUFHLFVBQUMsUUFBZ0I7SUFDakMsSUFBSSxDQUFDLFFBQVE7UUFBRSxPQUFPLElBQUksQ0FBQztJQUMzQixJQUFNLEtBQUssR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDcEMsT0FBVSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFHLENBQUM7QUFDbEMsQ0FBQyxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQUcsZUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFpQjdDLENBQUM7QUFFRixJQUFNLEdBQUcsR0FBRywyQkFBTSxDQUFDLEdBQUcsc3FCQUFtQixpSUFNdkIsRUFBNkMsK0NBRXZDLEVBQWMsaUJBQzVCO0lBRUQsYUFDQztJQUVELGFBQ0M7SUFFRCx3REFHZSxFQUFrQix1QkFBd0IsRUFBYyxrQkFDdEU7SUFFRCxhQUNDO0lBRUQsYUFDQztJQUVELHlEQUdlLEVBQWtCLHNCQUF1QixFQUFjLGlCQUNyRTtJQUVELGFBQ0M7SUFFRCxhQUNDO0lBRUQsb0RBR2UsRUFBa0IsaUJBQ2hDO0lBRUQsYUFDQztJQUVELGFBQ0M7SUFFRCxZQUVSLEtBakRpQixVQUFBLEtBQUssSUFBSSxPQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQXBDLENBQW9DLEVBRXZDLHlCQUFXLENBQUMsRUFBRSxFQUM1QixVQUFDLEVBQW9CO1FBQWxCLGdCQUFn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