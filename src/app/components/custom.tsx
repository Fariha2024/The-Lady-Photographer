import React, { useEffect } from "react";

const CustomComponent = () => {
  useEffect(() => {
    const someNode = document.getElementById("some-node");
    console.log("Node added:", someNode);

    return () => {
      if (someNode && someNode.parentNode) {
        console.log("Cleaning up node:", someNode);
        someNode.parentNode.removeChild(someNode);
      }
    };
  }, []);

  return <div id="some-node">I am a node!</div>;
};

export default CustomComponent;
