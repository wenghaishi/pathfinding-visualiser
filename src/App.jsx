import "./App.css";
import Node from "./components/Node";
import Nav from "./components/Nav";
import Legend from "./components/Legend";
import Main from "./components/Main";

function App() {
  return (
    <div className=" flex flex-col items-center">
      <Nav />
      <Legend />
      <Main />
    </div>
  );
}

export default App;
