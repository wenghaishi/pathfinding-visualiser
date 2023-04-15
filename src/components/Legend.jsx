import React from "react";
import { VscDebugStart, VscTarget } from "react-icons/vsc";
import Node from "./Node";

const Legend = () => {
  return (
    <div className="flex flex-row justify-evenly my-6">
      <div className="flex flex-col items-center">
        <h1>Start node</h1>
        <VscDebugStart />
      </div>
      <div className="flex flex-col items-center">
        <h1>End node</h1>
        <VscTarget />
      </div>
      <div className="flex flex-col items-center">
        <h1>Unvisited node</h1>
        <div className="bg-slate-200 h-4 w-4">
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1>Visited node</h1>
        <div className="bg-emerald-400 h-4 w-4">
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1>Shortest path</h1>
        <div className="bg-yellow-400 h-4 w-4">
        </div>
      </div>
    </div>
  );
};

export default Legend;
