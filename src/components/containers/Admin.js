import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../actions";

class Admin extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props
      .currentUser()
      .then(data => {
        console.log("current user: ", data);
      })
      .catch(err => {
        console.log("no current user");
      });
  }

  updateCurrentUser(attr, event) {
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
  }

  sendUpdates() {
    const currentUser = this.props.user.currentUser;
    if (currentUser === null) {
      return;
    }
    this.props
      .updateCurrentUser(currentUser, this.state)
      .then(data => {
        console.log("User Updated: " + JSON.stringify(data));
      })
      .catch(err => {
        console.log("Error: " + err.message);
      });
  }

  render() {
    const currentUser = this.props.user.currentUser; // can be null
    return (
      <div className="container">
        {currentUser == null ? null : (
          <div>
            <h2>Welcome {currentUser.username}</h2>
            <hr />
            <p>Add more details to your profile:</p>
            <input
              style={{ marginBottom: 12 }}
              type="text"
              placeholder="First Name"
              onChange={this.updateCurrentUser.bind(this, "firstName")}
            />
            <br />
            <input
              style={{ marginBottom: 12 }}
              type="text"
              placeholder="Last Name"
              onChange={this.updateCurrentUser.bind(this, "lastName")}
            />
            <br />
            <input
              style={{ marginBottom: 12 }}
              type="email"
              placeholder="Email"
              onChange={this.updateCurrentUser.bind(this, "email")}
            />
            <br />
            <button onClick={this.sendUpdates.bind(this)}>
              Update Profile
            </button>
          </div>
        )}
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    user: state.user
  };
};

const dispatchToProps = dispatch => {
  return {
    currentUser: () => dispatch(actions.currentUser()),
    updateCurrentUser: (currentUser, params) =>
      dispatch(actions.updateCurrentUser(currentUser, params))
  };
};

export default connect(stateToProps, dispatchToProps)(Admin);
