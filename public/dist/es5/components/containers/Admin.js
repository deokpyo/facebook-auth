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

var Admin = (function (Component) {
  function Admin() {
    _classCallCheck(this, Admin);

    _get(Object.getPrototypeOf(Admin.prototype), "constructor", this).call(this);
    this.state = {};
  }

  _inherits(Admin, Component);

  _prototypeProperties(Admin, null, {
    componentDidMount: {
      value: function componentDidMount() {
        this.props.currentUser().then(function (data) {
          console.log("current user: ", data);
        })["catch"](function (err) {
          console.log("no current user");
        });
      },
      writable: true,
      configurable: true
    },
    updateCurrentUser: {
      value: function updateCurrentUser(attr, event) {
        if (attr === "firstName") {
          this.setState({
            firstName: event.target.value
          });
        }
        if (attr === "lastName") {
          this.setState({
            lastName: event.target.value
          });
        }
        if (attr === "email") {
          this.setState({
            email: event.target.value
          });
        }
      },
      writable: true,
      configurable: true
    },
    sendUpdates: {
      value: function sendUpdates() {
        var currentUser = this.props.user.currentUser;
        if (currentUser === null) {
          return;
        }
        this.props.updateCurrentUser(currentUser, this.state).then(function (data) {
          console.log("User Updated: " + JSON.stringify(data));
        })["catch"](function (err) {
          console.log("Error: " + err.message);
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var currentUser = this.props.user.currentUser; // can be null
        return React.createElement(
          "div",
          { className: "container" },
          currentUser == null ? null : React.createElement(
            "div",
            null,
            React.createElement(
              "h2",
              null,
              "Welcome ",
              currentUser.username
            ),
            React.createElement("hr", null),
            React.createElement(
              "p",
              null,
              "Add more details to your profile:"
            ),
            React.createElement("input", {
              style: { marginBottom: 12 },
              type: "text",
              placeholder: "First Name",
              onChange: this.updateCurrentUser.bind(this, "firstName")
            }),
            React.createElement("br", null),
            React.createElement("input", {
              style: { marginBottom: 12 },
              type: "text",
              placeholder: "Last Name",
              onChange: this.updateCurrentUser.bind(this, "lastName")
            }),
            React.createElement("br", null),
            React.createElement("input", {
              style: { marginBottom: 12 },
              type: "email",
              placeholder: "Email",
              onChange: this.updateCurrentUser.bind(this, "email")
            }),
            React.createElement("br", null),
            React.createElement(
              "button",
              { onClick: this.sendUpdates.bind(this) },
              "Update Profile"
            )
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Admin;
})(Component);

var stateToProps = function (state) {
  return {
    user: state.user
  };
};

var dispatchToProps = function (dispatch) {
  return {
    currentUser: function () {
      return dispatch(actions.currentUser());
    },
    updateCurrentUser: function (currentUser, params) {
      return dispatch(actions.updateCurrentUser(currentUser, params));
    }
  };
};

module.exports = connect(stateToProps, dispatchToProps)(Admin);