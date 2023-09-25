import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitors",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thanks for subs!",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subs</button>
      </div>
    );
  }
}

export default Message;
