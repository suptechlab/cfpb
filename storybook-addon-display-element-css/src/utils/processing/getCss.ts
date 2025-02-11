import { addons } from '@storybook/addons';
import { EVENTS } from '../../constants';
import { clearStyles, stylesToArray, logStyles } from './stylesManagement';
import { processElement } from './processElement';

export var getCss = function getCss(e) {
  var channel = addons.getChannel();

  e.preventDefault();
  e.stopPropagation();

  clearStyles();

  var element = e.target;

  // Process the clicked element.
  // We will display these styles first in the UI.
  processElement(element);
  const elementStyles = stylesToArray();
  clearStyles();

  // Process parent nodes
  let parent = element.parentNode;
  const MAX = 10;
  let current = 0;
  while (parent && parent.id !== 'storybook-root' && current < MAX) {
    processElement(parent);
    logStyles();

    parent = parent.parentNode;
    current += 1;
  }

  // Prep found styles for display
  const styleList = [...elementStyles, ...stylesToArray()];

  // Done
  channel.emit(EVENTS.RESULT, {
    styles: styleList,
  });
};


