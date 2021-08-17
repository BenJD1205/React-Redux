"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var initialState = [{
  id: 1,
  name: 'Iphone 7 Plus',
  image: '',
  description: 'Sản phẩm do apple sản phẩm',
  price: 500,
  inventory: 10
}, {
  id: 1,
  name: 'Samsung Galaxy A71',
  image: '',
  description: 'Sản phẩm do apple sản phẩm',
  inventory: 10
}, {
  id: 1,
  name: 'Oppo Renno 7',
  image: '',
  description: 'Sản phẩm do apple sản phẩm',
  inventory: 10
}];

var product = function product() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return _toConsumableArray(state);
  }
};

var _default = product;
exports["default"] = _default;