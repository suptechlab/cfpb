import { addons, types } from '@storybook/addons';
import { ADDON_ID, TOOL_ID, PANEL_ID } from '../constants';
import { Tool } from '../Tool';
import { Panel } from '../Panel'; // Register the addon

addons.register(ADDON_ID, function () {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'My addon',
    match: function match(_ref) {
      var viewMode = _ref.viewMode;
      return !!(viewMode && viewMode.match(/^(story|docs)$/));
    },
    render: Tool
  }); // Register the panel

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Display Element CSS',
    match: function match(_ref2) {
      var viewMode = _ref2.viewMode;
      return viewMode === 'story';
    },
    render: Panel
  });
});