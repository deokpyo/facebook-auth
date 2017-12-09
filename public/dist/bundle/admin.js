webpackJsonp([1],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _stores = __webpack_require__(23);

var _stores2 = _interopRequireDefault(_stores);

var _reactRedux = __webpack_require__(14);

var _containers = __webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _react2.default.createElement(
  _reactRedux.Provider,
  { store: _stores2.default.configure(null) },
  _react2.default.createElement(_containers.Admin, null)
);

_reactDom2.default.render(app, document.getElementById("root"));

/***/ })

},[101]);
//# sourceMappingURL=admin.map