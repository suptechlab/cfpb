"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewLines = void 0;

var addNewLines = function addNewLines(text) {
  return text.replaceAll(';', ';\n').replaceAll('{', '{\n');
};

exports.addNewLines = addNewLines;