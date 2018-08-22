import React, { Component } from "react";

class Messages extends Component {
  render() {
    return (
      <div className="thread">
        {messages.map(mes => {
          return (
            <div
              key={mes.id}
              className={`message-container ${mes.sender === user.name &&
                "right"}`}
            >
              <div className="time">{mes.time}</div>
              <div className="data">
                <div className="message">{mes.message}</div>
                <div className="name">{mes.sender}</div>
              </div>
            </div>
          );
        })}
        {typingUsers.map(name => {
          return (
            <div key={name} className="typing-user">
              {"${name} is typing..."}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Messages;
