import React from "react";

// function Greet() {
//   return <h1>Hello siri</h1>;
// }

//as arrow function

// const Greet = () => <h1>Hello Sir</h1>;
// export default Greet;

//you must use {} in app.js's import
// export const Greet = () => <h1>Hello Sir</h1>;

export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name}&&{props.heroman}
      </h1>
    </div>
  );
};

//destructing
// export const Greet = ({ name, heroman }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name}&&{heroman}
//       </h1>
//     </div>
//   );
// };

// export const Greet = (props) => {
//   const { name, heroman } = props;
//   return (
//     <div>
//       <h1>
//         Hello {name}&&{heroman}
//       </h1>
//     </div>
//   );
// };
