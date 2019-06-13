"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Label = exports.Labelfont = exports.LabelWrapper = void 0;

var _startCase = _interopRequireDefault(require("lodash/fp/startCase"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    font-size: 14px;\n    @media only screen and (max-width: 599px) {\n        font-size: 10px;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        border: 1px solid transparent;\n        background-color: blue};\n        color: white;\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        border: 1px solid transparent;\n        background-color: orange;\n        color: red\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        border: 1px solid transparent;\n        background-color: yellow\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        border: 1px solid transparent;\n        background-color: green\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    border: 1px solid grey;\n    background-color: white;\n    margin: 0 5px 5px 0;\n    ", "\n    ", "\n    ", "\n    ", "\n    border-radius: 16px;\n    padding: 4px 12px;\n    @media only screen and (max-width: 599px) {\n        padding: 0px 10px 4px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LabelWrapper = _styledComponents.default.span(_templateObject(), function (props) {
  return props.text === 'positive' && (0, _styledComponents.css)(_templateObject2());
}, function (props) {
  return props.text === 'neutral' && (0, _styledComponents.css)(_templateObject3());
}, function (props) {
  return props.text === 'negative' && (0, _styledComponents.css)(_templateObject4());
}, function (props) {
  return props.isActive && (0, _styledComponents.css)(_templateObject5());
});

exports.LabelWrapper = LabelWrapper;

var Labelfont = _styledComponents.default.span(_templateObject6());

exports.Labelfont = Labelfont;

var Label = function Label(_ref) {
  var text = _ref.text,
      isActive = _ref.isActive;
  return _react.default.createElement(LabelWrapper, {
    text: text,
    isActive: isActive
  }, _react.default.createElement(Labelfont, null, (0, _startCase.default)(text)));
};

exports.Label = Label;
var _default = Label;
exports.default = _default;