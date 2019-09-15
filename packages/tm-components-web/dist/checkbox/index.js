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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var colors_1 = require("../__utils/colors");
var checkbox_1 = require("./checkbox");
var HiddenCheckbox = styled_components_1.default.input.attrs({ type: 'checkbox' })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  // Hide checkbox visually but remain accessible to screen readers.\n  // Source: https://polished.js.org/docs/#hidevisually\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"], ["\n  // Hide checkbox visually but remain accessible to screen readers.\n  // Source: https://polished.js.org/docs/#hidevisually\n  border: 0;\n  clip: rect(0 0 0 0);\n  clippath: inset(50%);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n"])));
var CheckboxContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  vertical-align: middle;\n"], ["\n  display: inline-block;\n  vertical-align: middle;\n"])));
var Checkbox = function (_a) {
    var _b = _a.checked, checked = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.onChange, onChange = _d === void 0 ? function (val) { } : _d, _e = _a.className, className = _e === void 0 ? '' : _e, children = _a.children, style = _a.style, _f = _a.indeterminate, indeterminate = _f === void 0 ? false : _f, _g = _a.color, color = _g === void 0 ? colors_1.PALETTE.PRIMARY : _g, _h = _a.outlineColor, outlineColor = _h === void 0 ? colors_1.PALETTE.BLACK : _h, _j = _a.size, size = _j === void 0 ? 24 : _j;
    var handleChange = function (e) {
        onChange(e.target.checked);
    };
    var inputEl = react_1.useRef(null);
    react_1.useEffect(function () {
        if (inputEl.current) {
            inputEl.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);
    return (react_1.default.createElement("label", null,
        react_1.default.createElement(CheckboxContainer, { className: className, style: style },
            react_1.default.createElement(HiddenCheckbox, { checked: checked, onChange: handleChange, disabled: disabled, ref: inputEl }),
            react_1.default.createElement(checkbox_1.CheckboxIcon, { size: size, color: color, outlineColor: outlineColor, checked: checked, indeterminate: indeterminate })),
        children !== undefined && react_1.default.createElement("span", { style: { marginLeft: 8 } }, children)));
};
exports.default = Checkbox;
var templateObject_1, templateObject_2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9jaGVja2JveC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUFpRDtBQUNqRCx3RUFBdUM7QUFDdkMsNENBQTRDO0FBQzVDLHVDQUEwQztBQUUxQyxJQUFNLGNBQWMsR0FBRywyQkFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsd1lBQUEscVVBYTlELElBQUEsQ0FBQztBQUVGLElBQU0saUJBQWlCLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLDRIQUFBLHlEQUduQyxJQUFBLENBQUM7QUFlRixJQUFNLFFBQVEsR0FBNEIsVUFBQyxFQVczQjtRQVZaLGVBQWUsRUFBZixvQ0FBZSxFQUNmLGdCQUFnQixFQUFoQixxQ0FBZ0IsRUFDaEIsZ0JBQXNDLEVBQXRDLGtEQUFzQyxFQUN0QyxpQkFBYyxFQUFkLG1DQUFjLEVBQ2Qsc0JBQVEsRUFDUixnQkFBSyxFQUNMLHFCQUFxQixFQUFyQiwwQ0FBcUIsRUFDckIsYUFBdUIsRUFBdkIscURBQXVCLEVBQ3ZCLG9CQUE0QixFQUE1QiwwREFBNEIsRUFDNUIsWUFBUyxFQUFULDhCQUFTO0lBRVQsSUFBTSxZQUFZLEdBQUcsVUFBQyxDQUFzQztRQUN4RCxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDLENBQUE7SUFDRCxJQUFNLE9BQU8sR0FBRyxjQUFNLENBQW1CLElBQUksQ0FBQyxDQUFDO0lBQy9DLGlCQUFTLENBQUM7UUFDTixJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNwQixPQUFPLENBQ0g7UUFDSSw4QkFBQyxpQkFBaUIsSUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLO1lBQ2pELDhCQUFDLGNBQWMsSUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsT0FBTyxHQUFJO1lBQzlGLDhCQUFDLHVCQUFZLElBQ1QsSUFBSSxFQUFFLElBQUksRUFDVixLQUFLLEVBQUUsS0FBSyxFQUNaLFlBQVksRUFBRSxZQUFZLEVBQzFCLE9BQU8sRUFBRSxPQUFPLEVBQ2hCLGFBQWEsRUFBRSxhQUFhLEdBQzlCLENBQ2M7UUFFaEIsUUFBUSxLQUFLLFNBQVMsSUFBSSx3Q0FBTSxLQUFLLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUcsUUFBUSxDQUFRLENBRTNFLENBQ1gsQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQUVELGtCQUFlLFFBQVEsQ0FBQyJ9