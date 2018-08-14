import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      error: ""
    };
  }
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
            placeHolder={"Username"}
          />
        </form>
      </div>
    );
  }
}

export default LoginForm;
