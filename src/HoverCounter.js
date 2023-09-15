import React from "react";
import wrapperComponent from "./wrapperComponent";

const HoverCounter = ({ count, handleCounter }) => {
  return (
    <div>
      {/*If the user hovers over this button, then increment 'count'*/}
      <button onMouseOver={handleCounter}>Hover Increment</button>
      <p>Clicked: {count}</p>
    </div>
  );
};
export default wrapperComponent(HoverCounter);
