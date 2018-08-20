import React, { Component } from "react";
import SideBar from "./SideBar";

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      activeChat: null
    };
  }
  setActiveChat = activeChat => {
    this.setState({ activeChat });
  };
  render() {
    const { user, logout, chats, activeChat } = this.props;
    return (
      <div>
        <SideBar
          logout={logout}
          chats={chats}
          user={user}
          activeChat={activeChat}
          setActiveChat={this.setActiveChat}
          onSendPrivateMessage={this.sendOpenPrivateMessage}
        />
      </div>
    );
  }
}
