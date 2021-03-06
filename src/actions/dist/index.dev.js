"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actUpdateProductInCart = exports.actRemoveProductInCart = exports.actChangeMessage = exports.actAddToCart = void 0;

var types = _interopRequireWildcard(require("../constants/actionTypes"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var actAddToCart = function actAddToCart(product, quantity) {
  return {
    type: types.ADD_TO_CART,
    product: product,
    quantity: quantity
  };
};

exports.actAddToCart = actAddToCart;

var actChangeMessage = function actChangeMessage(message) {
  return {
    type: types.CHANGE_MESSAGE,
    message: message
  };
};

exports.actChangeMessage = actChangeMessage;

var actRemoveProductInCart = function actRemoveProductInCart(product) {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product: product
  };
};

exports.actRemoveProductInCart = actRemoveProductInCart;

var actUpdateProductInCart = function actUpdateProductInCart(product, quantity) {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product: product,
    quantity: quantity
  };
};

exports.actUpdateProductInCart = actUpdateProductInCart;