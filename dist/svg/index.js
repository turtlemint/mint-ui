"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Icon = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      icon = _ref.icon,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'black' : _ref$color;
  var styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: color
    }
  };
  return _react.default.createElement("svg", {
    width: "".concat(size, "px"),
    height: "".concat(size, "px"),
    viewBox: "0 0 24 24",
    style: styles.svg
  }, _react.default.createElement("path", {
    d: icon,
    style: styles.path
  }));
};

exports.Icon = Icon;
var _default = Icon;
exports.default = _default;