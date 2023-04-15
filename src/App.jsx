import "./App.css";
import Node from "./components/Node";
import Nav from "./components/Nav";
import Legend from "./components/Legend";
import Main from "./components/Main";

function App() {
  return (
    <>
    <Nav />
    <div className="flex flex-col items-center">
      <Legend />
      <Main />
    </div>
    </>
  );
}

export default App;
