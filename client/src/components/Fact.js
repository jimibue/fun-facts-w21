import React from "react";
import { Link } from "react-router-dom";
import BorderedDiv from "./BorderedDiv";

const Fact = (props) => {
  return (
    <BorderedDiv color="red">
      <p>text: {props.text}</p>
      <p>stars: {props.stars}</p>
      <p>id: {props.id}</p>
      <p>username: {props.username}</p>
      <p>source: {props.source}</p>
      <Link to={`/facts/${props.id}`}>view</Link>
      <Link to={`/facts/${props.id}/edit`}>edit</Link>
    </BorderedDiv>
  );
};

export default Fact;
