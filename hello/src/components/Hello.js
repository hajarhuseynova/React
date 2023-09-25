import React from "react";

//jsx
// const Hello = () => {
//   return (
//     <div>
//       <h3>hello jsx</h3>
//     </div>
//   );
// };

//without jsx
const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "hel" },
    React.createElement("h1", null, "hello jsxisz")
  );
};

export default Hello;
