import { addStyle } from './stylesManagement'; // Ignore storybook styles

var storybookClassesPattern = /^\.sb/; // Try to restrict matched classes to only the relevant ones

var trailingChars = '(\\s|,|\\.|{|\\n|$)';
export function findCss(selector) {
  var regex = new RegExp("^".concat(selector).concat(trailingChars), 'gm');
  var styleSheets = document.styleSheets;

  for (var index in styleSheets) {
    var cssRules = styleSheets[index].cssRules;

    for (var rulesIndex in cssRules) {
      var cssRule = cssRules[rulesIndex];
      var selectorText = cssRule.selectorText;
      if (!selectorText) continue; // Ignore storybook classes

      if (selectorText !== null && selectorText !== void 0 && selectorText.match(storybookClassesPattern)) continue; // Ignore unmatched selectors

      if (!(selectorText !== null && selectorText !== void 0 && selectorText.match(regex))) continue; // We have a match! Save it.

      addStyle(selectorText, cssRule.cssText);
    }
  }
}