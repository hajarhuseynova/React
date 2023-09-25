import logo from "./logo.svg";
import "./App.css";
//function
//if you want to change Greet to another name you must change also tag
// import Greet from "./components/Greet";
// import { Greet } from "./components/Greet";
// //class
// import Welcome from "./components/Welcome";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponents from "./components/ParentComponent";

// //jsx
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <Message /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      <ParentComponents />
      {/* <Greet name="Hajar" heroman="batman">
        <p>This is additional p</p>
      </Greet> */}
      {/* <Greet name="Huseyn" heroman="superman">
        <button>Delete</button>
      </Greet>
      <Greet name="Emilya" heroman="gentleman" />

      <Welcome name="Hajar" heroman="batman" />
    <Welcome name="Punhan" heroman="batman" /> */}
      {/* <Welcome name="Narmish" heroman="batman" /> */}

      {/* <Hello /> */}
    </div>
  );
}

export default App;
