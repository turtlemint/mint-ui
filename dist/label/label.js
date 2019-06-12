"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _startCase = _interopRequireDefault(require("lodash/fp/startCase"));

var _react = _interopRequireDefault(require("react"));

var _label = require("./label.styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Label = function Label(_ref) {
  var text = _ref.text,
      isActive = _ref.isActive;
  return _react.default.createElement(_label.LabelWrapper, {
    text: text,
    isActive: isActive
  }, _react.default.createElement(_label.Labelfont, null, (0, _startCase.default)(text)));
};

var _default = Label;
exports.default = _default;