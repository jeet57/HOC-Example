import React, { useState } from "react";

const wrapperComponent = (PassedComponent) => {
  const WrapperComponent = (props) => {
    const [count, setCount] = useState(0);
    const handleCounter = () => {
      setCount((prev) => prev + 1);
    };
    return <PassedComponent count={count} handleCounter={handleCounter} />;
  };
  return WrapperComponent;
};

export default wrapperComponent;
