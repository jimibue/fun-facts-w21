import React from "react";
import { Link } from "react-router-dom";
import BorderedDiv from "./BorderedDiv";

const Fact = (props) => {
  const { text, stars, id, username, source, deleteFact } = props;
  return (
    <BorderedDiv color="red">
      <p>text: {text}</p>
      <p>stars: {stars}</p>
      <p>id: {id}</p>
      <p>username: {username}</p>
      <p>source: {source}</p>
      <Link to={`/facts/${id}`}>view</Link>
      <Link to={`/facts/${id}/edit`}>edit</Link>
      <button onClick={() => deleteFact(id)}>delete</button>
    </BorderedDiv>
  );
};

export default Fact;
