import { addStyle } from './stylesManagement';

// Ignore storybook styles
const storybookClassesPattern = /^\.sb/;

// Try to restrict matched classes to only the relevant ones
const trailingChars = '(\\s|,|\\.|{|\\n|$)';

export function findCss(selector) {
  const regex = new RegExp(`^${selector}${trailingChars}`, 'gm');

  var styleSheets = document.styleSheets;

  for (var index in styleSheets) {
    var cssRules = styleSheets[index].cssRules;

    for (var rulesIndex in cssRules) {
      var cssRule = cssRules[rulesIndex];
      const selectorText = cssRule.selectorText;

      if (!selectorText) continue;

      // Ignore storybook classes
      if (selectorText?.match(storybookClassesPattern)) continue;

      // Ignore unmatched selectors
      if (!selectorText?.match(regex)) continue;

      // We have a match! Save it.
      addStyle(selectorText, cssRule.cssText);
    }
  }
}
