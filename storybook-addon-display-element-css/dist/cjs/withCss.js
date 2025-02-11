"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withCss = void 0;

var _addons = require("@storybook/addons");

var _getCss = require("./utils/processing/getCss");

var _constants = require("./constants");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var withCss = function withCss(StoryFn, context) {
  var _useGlobals = (0, _addons.useGlobals)(),
      _useGlobals2 = _slicedToArray(_useGlobals, 1),
      myAddon = _useGlobals2[0].myAddon;

  (0, _addons.useEffect)(function () {
    var channel = _addons.addons.getChannel();

    channel.emit(_constants.EVENTS.CLEAR);

    if (myAddon) {
      // Focus on <html> element instead of #root
      var eventType = 'click';
      var targetElement = window.document.querySelector('html');

      if (targetElement) {
        targetElement.addEventListener(eventType, _getCss.getCss);
        return function () {
          return targetElement.removeEventListener(eventType, _getCss.getCss);
        };
      }
    }
  }, [context.id, myAddon]);
  return StoryFn();
};

exports.withCss = withCss;