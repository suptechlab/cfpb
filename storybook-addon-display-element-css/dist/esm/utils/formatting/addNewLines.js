export var addNewLines = function addNewLines(text) {
  return text.replaceAll(';', ';\n').replaceAll('{', '{\n');
};