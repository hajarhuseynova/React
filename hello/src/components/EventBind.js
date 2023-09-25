import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Helloush kizlaar",
      /* bindin in constructor */
    };
    //   this.clickHandler = this.clickHandler.bind(this);
  }
  //   //it doesnt work, this is undifined
  //   clickHandler() {
  //     this.setState({
  //       message: "GoodBye!!!",
  //     });
  //   }

  //class property as arrow function
  clickHandler = () => {
    this.setState({
      message: "Goodbye",
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        {/* binding in render*/}
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* arrow function */}
        {/* <button onClick={() => this.clickHandler()}>click</button> */}
        {/* bindin in constructor */}
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default EventBind;

//bind method or arrow function method
