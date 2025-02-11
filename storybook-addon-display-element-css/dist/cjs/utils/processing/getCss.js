"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCss = void 0;

var _addons = require("@storybook/addons");

var _constants = require("../../constants");

var _stylesManagement = require("./stylesManagement");

var _processElement = require("./processElement");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var getCss = function getCss(e) {
  var channel = _addons.addons.getChannel();

  e.preventDefault();
  e.stopPropagation();
  (0, _stylesManagement.clearStyles)();
  var element = e.target; // Process the clicked element.
  // We will display these styles first in the UI.

  (0, _processElement.processElement)(element);
  var elementStyles = (0, _stylesManagement.stylesToArray)();
  (0, _stylesManagement.clearStyles)(); // Process parent nodes

  var parent = element.parentNode;
  var MAX = 10;
  var current = 0;

  while (parent && parent.id !== 'storybook-root' && current < MAX) {
    (0, _processElement.processElement)(parent);
    (0, _stylesManagement.logStyles)();
    parent = parent.parentNode;
    current += 1;
  } // Prep found styles for display


  var styleList = [].concat(_toConsumableArray(elementStyles), _toConsumableArray((0, _stylesManagement.stylesToArray)())); // Done

  channel.emit(_constants.EVENTS.RESULT, {
    styles: styleList
  });
};

exports.getCss = getCss;