import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Node from "./components/Node";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      <Node />
    </div>
  );
}

export default App;
