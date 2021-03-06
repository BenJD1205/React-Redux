"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var types = _interopRequireWildcard(require("../constants/actionTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var data = JSON.parse(localStorage.getItem('CART'));
var initialState = data ? data : [];

var cart = function cart() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var product = action.product,
      quantity = action.quantity;
  var index = -1;

  switch (action.type) {
    case types.ADD_TO_CART:
      index = findProductInCart(state, product);

      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product: product,
          quantity: quantity
        });
      }

      localStorage.setItem('CART', JSON.stringify(state));
      return _toConsumableArray(state);

    case types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);

      if (index !== -1) {
        state.splice(index, 1);
      }

      localStorage.setItem('CART', JSON.stringify(state));
      return _toConsumableArray(state);

    case types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);

      if (index !== -1) {
        state[index].quantity = quantity;
      }

      localStorage.setItem('CART', JSON.stringify(state));
      return _toConsumableArray(state);

    default:
      return _toConsumableArray(state);
  }
};

var findProductInCart = function findProductInCart(cart, product) {
  var index = -1;

  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
      }
    }
  }

  return index;
};

var _default = cart;
exports["default"] = _default;