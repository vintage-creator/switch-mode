"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToggleSwitch = void 0;
var _react = _interopRequireDefault(require("react"));
require("./styles/Styles.css");
var _ThemeContext = require("./ThemeContext");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ToggleSwitch = () => {
  let {
    theme,
    toggleTheme
  } = (0, _ThemeContext.useTheme)();
  console.log(toggleTheme);
  let viewTheme = localStorage.getItem("theme");
  if (viewTheme == "dark") {
    theme = "light";
  } else {
    theme = "dark";
  }
  return /*#__PURE__*/_react.default.createElement("label", {
    className: "switch"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    checked: theme === "light",
    onChange: toggleTheme
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "slider round"
  }));
};
exports.ToggleSwitch = ToggleSwitch;
