import axios from "axios";
import React, { useEffect, useState } from "react";
import BorderedDiv from "./BorderedDiv";
import { useParams } from "react-router-dom";

const FactShow = (props) => {
  // v5/v6 react-router
  const params = useParams();
  const [fact, setFact] = useState({});

  // lets do a axios call on mount to grab the data
  useEffect(() => {
    getFact();
  }, []);

  const getFact = async () => {
    try {
      let res = await axios.get(`/api/facts/${params.id}`);
      setFact(res.data);
    } catch (err) {
      alert("err occurred getting fact");
    }
  };

  return (
    <BorderedDiv color="red">
      <p>fact show</p>
      <p>text: {fact.text}</p>
      <p>stars: {fact.stars}</p>
      <p>id: {fact.id}</p>
      <p>username: {fact.username}</p>
      <p>source: {fact.source}</p>
    </BorderedDiv>
  );
};

export default FactShow;
