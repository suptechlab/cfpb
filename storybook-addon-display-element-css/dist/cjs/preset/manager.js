"use strict";

var _addons = require("@storybook/addons");

var _constants = require("../constants");

var _Tool = require("../Tool");

var _Panel = require("../Panel");

// Register the addon
_addons.addons.register(_constants.ADDON_ID, function () {
  // Register the tool
  _addons.addons.add(_constants.TOOL_ID, {
    type: _addons.types.TOOL,
    title: 'My addon',
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return !!(viewMode && viewMode.match(/^(story|docs)$/));
    },
    render: _Tool.Tool
  }); // Register the panel


  _addons.addons.add(_constants.PANEL_ID, {
    type: _addons.types.PANEL,
    title: 'Display Element CSS',
    match: function match(_ref2) {
      var viewMode = _ref2.viewMode;
      return viewMode === 'story';
    },
    render: _Panel.Panel
  });
});