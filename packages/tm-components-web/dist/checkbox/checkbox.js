"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var colors_1 = __importDefault(require("../__utils/colors"));
;
exports.CheckboxIcon = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, _c = _a.color, color = _c === void 0 ? colors_1.default.PRIMARY : _c, _d = _a.outlineColor, outlineColor = _d === void 0 ? colors_1.default.BLACK : _d, _e = _a.checked, checked = _e === void 0 ? false : _e, _f = _a.indeterminate, indeterminate = _f === void 0 ? false : _f;
    var styles = {
        svg: {
            display: 'inline-block',
            verticalAlign: 'middle'
        },
        checkedGroup: {
            opacity: 0.64
        }
    };
    return (react_1.default.createElement("svg", { width: size + "px", height: size + "px", viewBox: '0 0 24 24', style: styles.svg },
        !checked ? (react_1.default.createElement("g", { style: styles.checkedGroup },
            react_1.default.createElement("path", { fill: outlineColor, d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" }),
            react_1.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }))) : null,
        checked && !indeterminate ? (react_1.default.createElement("g", null,
            react_1.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
            react_1.default.createElement("path", { fill: color, d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" }))) : null,
        checked && indeterminate ? (react_1.default.createElement("g", null,
            react_1.default.createElement("defs", null,
                react_1.default.createElement("path", { id: "a", d: "M0 0h24v24H0z" })),
            react_1.default.createElement("clipPath", { id: "b" },
                react_1.default.createElement("use", { href: "#a", overflow: "visible" })),
            react_1.default.createElement("path", { fill: color, clipPath: "url(#b)", d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z" }))) : null));
};
exports.default = exports.CheckboxIcon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxnREFBMEI7QUFDMUIsNkRBQXdDO0FBUXZDLENBQUM7QUFFVyxRQUFBLFlBQVksR0FBNEIsVUFBQyxFQU10QztRQUxaLFlBQVMsRUFBVCw4QkFBUyxFQUNULGFBQXVCLEVBQXZCLHFEQUF1QixFQUN2QixvQkFBNEIsRUFBNUIsMERBQTRCLEVBQzVCLGVBQWUsRUFBZixvQ0FBZSxFQUNmLHFCQUFxQixFQUFyQiwwQ0FBcUI7SUFFckIsSUFBTSxNQUFNLEdBQUc7UUFDWCxHQUFHLEVBQUU7WUFDRCxPQUFPLEVBQUUsY0FBYztZQUN2QixhQUFhLEVBQUUsUUFBUTtTQUMxQjtRQUNELFlBQVksRUFBRTtZQUNWLE9BQU8sRUFBRSxJQUFJO1NBQ2hCO0tBQ0osQ0FBQztJQUNGLE9BQU8sQ0FDSCx1Q0FDSSxLQUFLLEVBQUssSUFBSSxPQUFJLEVBQ2xCLE1BQU0sRUFBSyxJQUFJLE9BQUksRUFDbkIsT0FBTyxFQUFDLFdBQVcsRUFDbkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHO1FBR2IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ1AscUNBQUcsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZO1lBQ3pCLHdDQUFNLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFDLDRGQUE0RixHQUFHO1lBQzNILHdDQUFNLENBQUMsRUFBQyxlQUFlLEVBQUMsSUFBSSxFQUFDLE1BQU0sR0FBRyxDQUN0QyxDQUNQLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFHUixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQ3hCO1lBQ0ksd0NBQU0sQ0FBQyxFQUFDLGVBQWUsRUFBQyxJQUFJLEVBQUMsTUFBTSxHQUFHO1lBQ3RDLHdDQUFNLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFDLHFJQUFxSSxHQUFHLENBQzdKLENBQ1AsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUdSLE9BQU8sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQ3ZCO1lBQ0k7Z0JBQU0sd0NBQU0sRUFBRSxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsZUFBZSxHQUFHLENBQU87WUFDOUMsNENBQVUsRUFBRSxFQUFDLEdBQUc7Z0JBQUMsdUNBQUssSUFBSSxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsU0FBUyxHQUFHLENBQVc7WUFDaEUsd0NBQU0sSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQywrRkFBK0YsR0FBRyxDQUMxSSxDQUNQLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FHVixDQUNULENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixrQkFBZSxvQkFBWSxDQUFDIn0=