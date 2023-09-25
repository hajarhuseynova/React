import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return <h1>class comp</h1>;
//   }
// }
//props
class Welcome extends Component {
  render() {
    const { name, heroman } = this.props;
    //const {state1,state2}=this.state;
    return (
      <h1>
        Welcome {name},{heroman}
      </h1>
    );
  }
}

export default Welcome;
