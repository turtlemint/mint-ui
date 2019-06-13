"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _label = require("./label");

Object.keys(_label).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _label[key];
    }
  });
});

var _icon = require("./svg/icon");

Object.keys(_icon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _icon[key];
    }
  });
});