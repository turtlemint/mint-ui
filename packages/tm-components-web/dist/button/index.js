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
var styles_1 = require("./styles");
var type_1 = require("../__utils/type");
var icons_1 = require("../__utils/icons");
var colors_1 = __importDefault(require("../__utils/colors"));
var ButtonTypes = type_1.tuple('outlined', 'primary', 'danger', 'link');
var ButtonSizes = type_1.tuple('sm', 'md');
var ButtonHTMLTypes = type_1.tuple('submit', 'button', 'reset');
;
var Button = function (_a) {
    var _b = _a.btnType, btnType = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'sm' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.block, block = _e === void 0 ? false : _e, _f = _a.icon, icon = _f === void 0 ? '' : _f, _g = _a.loading, loading = _g === void 0 ? false : _g, _h = _a.className, className = _h === void 0 ? '' : _h, _j = _a.prefixCls, prefixCls = _j === void 0 ? 'tm-button' : _j, _k = _a.onClick, onClick = _k === void 0 ? function () { } : _k, _l = _a.href, href = _l === void 0 ? '#' : _l, _m = _a.target, target = _m === void 0 ? 'blank' : _m, _o = _a.htmlType, htmlType = _o === void 0 ? 'button' : _o, _p = _a.children, children = _p === void 0 ? react_1.default.createElement(react_1.default.Fragment, null) : _p, rest = __rest(_a, ["btnType", "size", "disabled", "block", "icon", "loading", "className", "prefixCls", "onClick", "href", "target", "htmlType", "children"]);
    var handleClick = function (e) {
        if (btnType === 'link') {
            e.preventDefault();
        }
        onClick(e);
    };
    var IconComponent = icons_1.ICONS[icon];
    return (react_1.default.createElement(react_1.default.Fragment, null, loading ? (react_1.default.createElement(styles_1.StyledButton, { btnType: btnType, size: size, block: block, disabled: disabled }, "Loading...")) : (react_1.default.createElement(react_1.default.Fragment, null, btnType === 'link' ? (react_1.default.createElement(styles_1.StyledLink, __assign({ href: href, target: target, disabled: disabled }, rest), children)) : (react_1.default.createElement(styles_1.StyledButton, __assign({ onClick: handleClick, btnType: btnType, size: size, block: block, disabled: disabled, type: htmlType, className: prefixCls + "-" + className }, rest),
        IconComponent ? react_1.default.createElement(IconComponent, { outlineColor: colors_1.default.WHITE, size: 16 }) : null,
        react_1.default.createElement("span", { style: {
                verticalAlign: 'middle',
                marginLeft: icon ? '8px' : '0px'
            } }, children)))))));
};
exports.default = Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tcG9uZW50cy9idXR0b24vaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUEwQjtBQUMxQixtQ0FBb0Q7QUFDcEQsd0NBQThDO0FBQzlDLDBDQUF5QztBQUN6Qyw2REFBd0M7QUFFeEMsSUFBTSxXQUFXLEdBQUcsWUFBSyxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRW5FLElBQU0sV0FBVyxHQUFHLFlBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFdEMsSUFBTSxlQUFlLEdBQUcsWUFBSyxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFhMUQsQ0FBQztBQWVGLElBQU0sTUFBTSxHQUEwQixVQUFDLEVBZXpCO0lBZFYsSUFBQSxlQUFtQixFQUFuQix3Q0FBbUIsRUFDbkIsWUFBVyxFQUFYLGdDQUFXLEVBQ1gsZ0JBQWdCLEVBQWhCLHFDQUFnQixFQUNoQixhQUFhLEVBQWIsa0NBQWEsRUFDYixZQUFTLEVBQVQsOEJBQVMsRUFDVCxlQUFlLEVBQWYsb0NBQWUsRUFDZixpQkFBYyxFQUFkLG1DQUFjLEVBQ2QsaUJBQXVCLEVBQXZCLDRDQUF1QixFQUN2QixlQUF5QixFQUF6Qiw4Q0FBeUIsRUFDekIsWUFBVSxFQUFWLCtCQUFVLEVBQ1YsY0FBZ0IsRUFBaEIscUNBQWdCLEVBQ2hCLGdCQUFtQixFQUFuQix3Q0FBbUIsRUFDbkIsZ0JBQWdCLEVBQWhCLDZGQUFnQixFQUNoQiw2SkFBTztJQUdQLElBQU0sV0FBVyxHQUFtRSxVQUFBLENBQUM7UUFDakYsSUFBSSxPQUFPLEtBQUssTUFBTSxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN0QjtRQUNELE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUMsQ0FBQTtJQUNELElBQU0sYUFBYSxHQUFHLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxPQUFPLENBQ0gsOERBRVEsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUNOLDhCQUFDLHFCQUFZLElBQ1QsT0FBTyxFQUFFLE9BQU8sRUFDaEIsSUFBSSxFQUFFLElBQUksRUFDVixLQUFLLEVBQUUsS0FBSyxFQUNaLFFBQVEsRUFBRSxRQUFRLGlCQUVQLENBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQ0ksOERBRVEsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDakIsOEJBQUMsbUJBQVUsYUFDUCxJQUFJLEVBQUUsSUFBSSxFQUNWLE1BQU0sRUFBRSxNQUFNLEVBQ2QsUUFBUSxFQUFFLFFBQVEsSUFDZCxJQUFJLEdBQ1AsUUFBUSxDQUNBLENBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQ0ksOEJBQUMscUJBQVksYUFDVCxPQUFPLEVBQUUsV0FBVyxFQUNwQixPQUFPLEVBQUUsT0FBTyxFQUNoQixJQUFJLEVBQUUsSUFBSSxFQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osUUFBUSxFQUFFLFFBQVEsRUFDbEIsSUFBSSxFQUFFLFFBQVEsRUFDZCxTQUFTLEVBQUssU0FBUyxTQUFJLFNBQVcsSUFDbEMsSUFBSTtRQUVQLGFBQWEsQ0FBQyxDQUFDLENBQUMsOEJBQUMsYUFBYSxJQUFDLFlBQVksRUFBRSxnQkFBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxHQUFJLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDaEYsd0NBQU0sS0FBSyxFQUFFO2dCQUNULGFBQWEsRUFBRSxRQUFRO2dCQUN2QixVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUs7YUFDbkMsSUFFSSxRQUFRLENBQ04sQ0FDSSxDQUNsQixDQUVWLENBRU4sQ0FFVixDQUVOLENBQUM7QUFDTixDQUFDLENBQUM7QUFFRixrQkFBZSxNQUFNLENBQUMifQ==