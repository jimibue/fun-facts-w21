import React from "react";
import BorderedDiv from "./BorderedDiv";

const Fact = (props) => {
  return (
    <BorderedDiv color="red">
      <p>text: {props.text}</p>
      <p>stars: {props.stars}</p>
      <p>id: {props.id}</p>
      <p>username: {props.username}</p>
      <p>source: {props.source}</p>
    </BorderedDiv>
  );
};

export default Fact;
