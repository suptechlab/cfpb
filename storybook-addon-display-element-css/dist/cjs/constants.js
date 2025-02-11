"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EVENTS = exports.PANEL_ID = exports.TOOL_ID = exports.ADDON_ID = void 0;
var ADDON_ID = 'storybook/my-addon';
exports.ADDON_ID = ADDON_ID;
var TOOL_ID = "".concat(ADDON_ID, "/tool");
exports.TOOL_ID = TOOL_ID;
var PANEL_ID = "".concat(ADDON_ID, "/panel");
exports.PANEL_ID = PANEL_ID;
var EVENTS = {
  RESULT: "".concat(ADDON_ID, "/result"),
  CLEAR: "".concat(ADDON_ID, "/clear")
};
exports.EVENTS = EVENTS;