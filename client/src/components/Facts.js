import React, { useEffect, useState } from "react";
import axios from "axios";
import Fact from "./Fact";
import FactForm from "./FactForm";
import BorderedDiv from "./BorderedDiv";

const Facts = () => {
  const [facts, setFacts] = useState([]);
  useEffect(() => {
    console.log("mounted");
    getFacts();
  }, []);
  const getFacts = async () => {
    let response = await axios.get("/api/facts");
    setFacts(response.data);
  };
  const renderFacts = () => {
    if (facts.length === 0) {
      return <p>No Facts</p>;
    }
    return facts.map((fact) => {
      return <Fact key={fact.id} {...fact} />;
    });
  };

  return (
    <BorderedDiv color="yellow">
      <h1>Facts</h1>
      <FactForm />
      {renderFacts()}
    </BorderedDiv>
  );
};
export default Facts;
