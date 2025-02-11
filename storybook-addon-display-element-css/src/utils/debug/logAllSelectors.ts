// Debug utility to see all available selectors for the current document
export function logAllSelectors() {
  var styleSheets = document.styleSheets;

  for (var index in styleSheets) {
    var cssRules = styleSheets[index].cssRules;

    for (var rulesIndex in cssRules) {
      var cssRule = cssRules[rulesIndex];
      const selectorText = cssRule.selectorText;

      console.log(selectorText);
    }
  }
}
