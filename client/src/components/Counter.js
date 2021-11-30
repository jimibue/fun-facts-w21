import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BorderedDiv from "./BorderedDiv";

const Counter = () => {
  const [count, setCount] = useState(0);

  // this get called when component mounts
  useEffect(() => {
    console.log("counter mounted");

    return () => {
      console.log("counter unmounted");
    };
  }, []);
  return (
    <BorderedDiv>
      <Link to="/">goto home</Link>
      <p>counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>add</button>
    </BorderedDiv>
  );
};
export default Counter;
