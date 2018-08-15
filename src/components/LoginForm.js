import React, { Component } from "react";
import { VERIFY_USER } from "../Events";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      error: ""
    };
  }

  setUser = ({ user, isUs }) => {
    console.log(user, isUs);
    if (isUs) {
      this.setError("User name taken");
    } else {
      this.props.setUser(user);
      this.setError("");
    }
  };

  handleChange = e => {
    this.setState({ nickname: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { socket } = this.props;
    const { nickname } = this.state;
    socket.emit(VERIFY_USER, nickname, this.setUser);
  };

  setError = error => {
    this.setState({ error });
  };

  render() {
    const { nickname, error } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="login-form">
          <label htmlFor="nickname">
            <h2>Nickname?</h2>
          </label>
          <input
            ref={input => {
              this.textInput = input;
            }}
            type="text"
            id="nickname"
            value={nickname}
            onChange={this.handleChange}
            placeholder={"Username"}
          />
          <div className="error">{error ? error : null}</div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
