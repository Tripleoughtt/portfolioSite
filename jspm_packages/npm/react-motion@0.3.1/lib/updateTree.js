/* */ 
'use strict';
exports.__esModule = true;
exports.interpolateValue = interpolateValue;
exports.updateCurrentStyle = updateCurrentStyle;
exports.updateCurrentVelocity = updateCurrentVelocity;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {'default': obj};
}
var _stepper = require('./stepper');
var _stepper2 = _interopRequireDefault(_stepper);
var _spring = require('./spring');
var _spring2 = _interopRequireDefault(_spring);
function interpolateValue(alpha, nextStyle, prevStyle) {
  if (!prevStyle) {
    return nextStyle;
  }
  var ret = {};
  for (var key in nextStyle) {
    if (!nextStyle.hasOwnProperty(key)) {
      continue;
    }
    if (nextStyle[key] == null || !nextStyle[key].config) {
      ret[key] = nextStyle[key];
      continue;
    }
    var prevValue = prevStyle[key].config ? prevStyle[key].val : prevStyle[key];
    ret[key] = _spring2['default'](nextStyle[key].val * alpha + prevValue * (1 - alpha), nextStyle[key].config);
  }
  return ret;
}
function updateCurrentStyle(frameRate, currentStyle, currentVelocity, style) {
  var ret = {};
  for (var key in style) {
    if (!style.hasOwnProperty(key)) {
      continue;
    }
    if (style[key] == null || !style[key].config) {
      ret[key] = style[key];
      continue;
    }
    var _style$key$config = style[key].config;
    var k = _style$key$config[0];
    var b = _style$key$config[1];
    var val = _stepper2['default'](frameRate, currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[0];
    ret[key] = _spring2['default'](val, style[key].config);
  }
  return ret;
}
function updateCurrentVelocity(frameRate, currentStyle, currentVelocity, style) {
  var ret = {};
  for (var key in style) {
    if (!style.hasOwnProperty(key)) {
      continue;
    }
    if (style[key] == null || !style[key].config) {
      ret[key] = 0;
      continue;
    }
    var _style$key$config2 = style[key].config;
    var k = _style$key$config2[0];
    var b = _style$key$config2[1];
    var val = _stepper2['default'](frameRate, currentStyle[key].val == null ? currentStyle[key] : currentStyle[key].val, currentVelocity[key], style[key].val, k, b)[1];
    ret[key] = val;
  }
  return ret;
}
