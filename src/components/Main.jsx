import React from 'react'
import Node from './Node';

const Main = () => {

  const nodes = [];

  for (let i = 0; i < 25; i++) {
    for (let j = 0; j < 25; j++) {
      nodes.push(<Node key={`${i}-${j}`} />);
    }
  }

  return (
    <div className="grid grid-cols-25 gap-0 gap-x-0 max-w-screen-md	">
      {nodes}
    </div>
  );
};


export default Main