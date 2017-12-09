import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  updateVisitor(attr, event) {
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
  }

  registerVisitor() {
    this.props
      .register(this.state)
      .then(data => {
        window.location.href = "/admin";
      })
      .catch(err => {
        alert("Error: " + err.message);
      });
  }

  render() {
    return (
      <div className="container">
        <h2>Welcome to Facebook Authentication</h2>
        <input
          onChange={this.updateVisitor.bind(this, "username")}
          type="text"
          placeholder="username"
        />
        <br />
        <input
          onChange={this.updateVisitor.bind(this, "password")}
          type="password"
          placeholder="password"
        />
        <br />
        <button onClick={this.registerVisitor.bind(this)}>Join</button>
      </div>
    );
  }
}

const stateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {
    register: visitor => dispatch(actions.register(visitor))
  };
};

export default connect(stateToProps, dispatchToProps)(Home);
