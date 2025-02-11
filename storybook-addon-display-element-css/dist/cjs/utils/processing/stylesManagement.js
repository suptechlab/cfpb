"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addStyle = addStyle;
exports.clearStyles = clearStyles;
exports.stylesToArray = stylesToArray;
exports.logStyles = logStyles;
exports.styles = void 0;

var _addNewLines = require("../formatting/addNewLines");

// Global space to track found styles
var styles = {}; // Add style to list

exports.styles = styles;

function addStyle(id, style) {
  // Ignore duplicate styles
  if (styles[id]) return null; // Save formatted CSS

  styles[id] = (0, _addNewLines.addNewLines)(style);
} // Clear all styles


function clearStyles() {
  exports.styles = styles = {};
} // Convert styles object to an array of strings


function stylesToArray() {
  return Object.keys(styles).sort().map(function (key) {
    return styles[key];
  });
} // Debug utility to see what styles have been tracked


function logStyles() {
  console.log('Styles: ', styles);
}