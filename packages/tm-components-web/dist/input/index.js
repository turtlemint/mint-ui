"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
// import TextArea from './textarea';
var styles_1 = require("./styles");
var Input = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'text' : _b, placeholder = _a.placeholder, label = _a.label, error = _a.error, helpText = _a.helpText, _c = _a.block, block = _c === void 0 ? false : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, onChange = _a.onChange, onBlur = _a.onBlur, value = _a.value, rest = __rest(_a, ["type", "placeholder", "label", "error", "helpText", "block", "disabled", "onChange", "onBlur", "value"]);
    var handleChange = function (e) {
        if (onChange) {
            onChange(e.target.value);
        }
    };
    return (react_1.default.createElement(styles_1.Wrapper, { block: block },
        react_1.default.createElement(styles_1.StyledLabel, { error: error },
            react_1.default.createElement("label", null, label)),
        react_1.default.createElement(styles_1.StyledInput, __assign({ type: type, placeholder: placeholder, error: error, disabled: disabled, onBlur: onBlur, onChange: handleChange, value: value }, rest)),
        error ? (react_1.default.createElement(styles_1.StyledError, null,
            react_1.default.createElement("label", null, error))) : null,
        helpText ? (react_1.default.createElement(styles_1.HelpText, null, helpText)) : null));
};
// Input.TextArea = TextArea;
exports.default = Input;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9pbnB1dC9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQTBCO0FBQzFCLHFDQUFxQztBQUNyQyxtQ0FBb0Y7QUFnQnBGLElBQU0sS0FBSyxHQUF5RixVQUFDLEVBVzlCO0lBVm5FLElBQUEsWUFBYSxFQUFiLGtDQUFhLEVBQ2IsNEJBQVcsRUFDWCxnQkFBSyxFQUNMLGdCQUFLLEVBQ0wsc0JBQVEsRUFDUixhQUFhLEVBQWIsa0NBQWEsRUFDYixnQkFBZ0IsRUFBaEIscUNBQWdCLEVBQ2hCLHNCQUFRLEVBQ1Isa0JBQU0sRUFDTixnQkFBSyxFQUNMLDRIQUFPO0lBQ1AsSUFBTSxZQUFZLEdBQUcsVUFBQyxDQUFzQztRQUN4RCxJQUFJLFFBQVEsRUFBRTtZQUNWLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO0lBQ0wsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxDQUNILDhCQUFDLGdCQUFPLElBQUMsS0FBSyxFQUFFLEtBQUs7UUFDakIsOEJBQUMsb0JBQVcsSUFBQyxLQUFLLEVBQUUsS0FBSztZQUNyQiw2Q0FBUSxLQUFLLENBQVMsQ0FDWjtRQUNkLDhCQUFDLG9CQUFXLGFBQ1IsSUFBSSxFQUFFLElBQUksRUFDVixXQUFXLEVBQUUsV0FBVyxFQUN4QixLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxRQUFRLEVBQ2xCLE1BQU0sRUFBRSxNQUFNLEVBQ2QsUUFBUSxFQUFFLFlBQVksRUFDdEIsS0FBSyxFQUFFLEtBQUssSUFDUixJQUFJLEVBQUk7UUFDZixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ0wsOEJBQUMsb0JBQVc7WUFDUiw2Q0FBUSxLQUFLLENBQVMsQ0FDWixDQUNqQixDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQ1AsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUNSLDhCQUFDLGlCQUFRLFFBQUUsUUFBUSxDQUFZLENBQ2xDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDRixDQUNiLENBQUE7QUFDTCxDQUFDLENBQUE7QUFDRCw2QkFBNkI7QUFFN0Isa0JBQWUsS0FBSyxDQUFDIn0=