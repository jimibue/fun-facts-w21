import React, { useState } from "react";
import BorderedDiv from "./BorderedDiv";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <BorderedDiv>
      <p>counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </BorderedDiv>
  );
};
export default Counter;
