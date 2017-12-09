import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";

class Admin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  render() {
    return (
      <div className="container">
        <h2>Admin Component</h2>
      </div>
    );
  }
}

const stateToProps = state => {
  return {};
};

const dispatchToProps = dispatch => {
  return {};
};

export default connect(stateToProps, dispatchToProps)(Admin);
