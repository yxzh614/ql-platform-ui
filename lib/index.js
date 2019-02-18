"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _Input.default;
  }
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("./components/Button/Button"));

var _Input = _interopRequireDefault(require("./components/Input/Input"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Button.default;
exports.default = _default;