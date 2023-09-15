import React from "react";
import wrapperComponent from "./wrapperComponent";

const ClickCounter = ({ count, handleCounter }) => {
  return (
    <div>
      <button onClick={handleCounter}>Click Increment</button>
      <p>Clicked: {count}</p>
    </div>
  );
};
export default wrapperComponent(ClickCounter);
