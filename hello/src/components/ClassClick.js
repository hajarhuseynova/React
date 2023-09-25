import React, { Component } from "react";

export class ClassClick extends Component {
  clickHandler() {
    console.log("class clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class click</button>
      </div>
    );
  }
}

export default ClassClick;
