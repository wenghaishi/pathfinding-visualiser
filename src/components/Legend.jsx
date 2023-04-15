import React from "react";
import { useState } from "react";
import { VscDebugStart, VscTarget } from "react-icons/vsc";
import Node from "./Node";

const Legend = () => {
  const handleDragEndStartNode = (event) => {
    const targetElement = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
    if (targetElement.id === 'node') {
      targetElement.classList.add('start');
      targetElement.id = 'start'
    }
  };

  const handleDragEndEndNode = (event) => {
    const targetElement = document.elementFromPoint(
      event.clientX,
      event.clientY
    );
    if (targetElement.id === 'node') {
      targetElement.classList.add('end');
      targetElement.id = 'end'
    }
  };

  return (
    <div className="flex flex-row justify-evenly my-8 w-3/4">
      <div className="flex flex-col items-center">
        <h1>Start node</h1>
        <img
          src="../../public/assets/start.png"
          alt=""
          className="h-5 w-5 start-node"
          draggable
          onDragEnd={handleDragEndStartNode}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1>End node</h1>
        <img
          src="../../public/assets/end.png"
          alt=""
          className="h-5 w-5 start-node"
          draggable
          onDragEnd={handleDragEndEndNode}
        />
      </div>
      <div className="flex flex-col items-center">
        <h1>Unvisited node</h1>
        <div className="bg-slate-200 h-4 w-4"></div>
      </div>
      <div className="flex flex-col items-center">
        <h1>Visited node</h1>
        <div className="bg-emerald-400 h-4 w-4"></div>
      </div>
      <div className="flex flex-col items-center">
        <h1>Shortest path</h1>
        <div className="bg-yellow-400 h-4 w-4"></div>
      </div>
    </div>
  );
};

export default Legend;
