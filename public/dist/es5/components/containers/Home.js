"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var actions = _interopRequire(require("../../actions"));

var Home = (function (Component) {
  function Home() {
    _classCallCheck(this, Home);

    _get(Object.getPrototypeOf(Home.prototype), "constructor", this).call(this);
    this.state = {
      username: "",
      password: ""
    };
  }

  _inherits(Home, Component);

  _prototypeProperties(Home, null, {
    updateVisitor: {
      value: function updateVisitor(attr, event) {
        if (attr === "username") {
          this.setState({
            username: event.target.value
          });
        }
        if (attr === "password") {
          this.setState({
            password: event.target.value
          });
        }
      },
      writable: true,
      configurable: true
    },
    registerVisitor: {
      value: function registerVisitor() {
        console.log("createUser: " + JSON.stringify(this.state));
        this.props.register(this.state).then(function (data) {
          console.log(data);
        })["catch"](function (err) {
          alert("Error: " + err.message);
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "container" },
          React.createElement(
            "h2",
            null,
            "Welcome to Facebook Authentication"
          ),
          React.createElement("input", {
            onChange: this.updateVisitor.bind(this, "username"),
            type: "text",
            placeholder: "username"
          }),
          React.createElement("br", null),
          React.createElement("input", {
            onChange: this.updateVisitor.bind(this, "password"),
            type: "password",
            placeholder: "password"
          }),
          React.createElement("br", null),
          React.createElement(
            "button",
            { onClick: this.registerVisitor.bind(this) },
            "Join"
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Home;
})(Component);

var stateToProps = function (state) {
  return {};
};

var dispatchToProps = function (dispatch) {
  return {
    register: function (visitor) {
      return dispatch(actions.register(visitor));
    }
  };
};

module.exports = connect(stateToProps, dispatchToProps)(Home);