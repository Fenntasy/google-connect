import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { signOut } from "./store/user/actions";
import { getUserState } from "./store/user/selectors";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {this.props.user.id ? (
            <div className="signout" onClick={this.props.signOut}>
              Sign out
            </div>
          ) : (
            <div
              className="g-signin2"
              data-onsuccess="googleConnectCallback"
              data-theme="dark"
            />
          )}
        </div>

        {this.props.user.id ? (
          <div>
            <img alt={this.props.user.fullname} src={this.props.user.avatar} />
            <span>{this.props.user.fullname}</span>
          </div>
        ) : null}
      </div>
    );
  }
}

export default connect(getUserState, signOut)(App);
