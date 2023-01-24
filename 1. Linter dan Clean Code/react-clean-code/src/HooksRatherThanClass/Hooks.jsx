import React, { useState } from "react";

const Counter = () => {
  const [counter, setCoutner] = useState(0);

  const handlePlusButtonClicked = () => {
    setCoutner((currentCounter) => currentCounter + 1);
  };

  const handleMinusButtonClicked = () => {
    setCoutner((currentCounter) => currentCounter - 1);
  };

  return (
    <div>
      <button onClick={handlePlusButtonClicked}>+</button>
      <p>{counter}</p>
      <button onClick={handleMinusButtonClicked}>-</button>
    </div>
  );
};

export default Counter;
