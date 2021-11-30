import React, { useEffect, useState } from "react";
import axios from "axios";
import Fact from "./Fact";
import FactForm from "./FactForm";
import BorderedDiv from "./BorderedDiv";
import { Link } from "react-router-dom";

const Facts = () => {
  // keeping track of facts state here in this component
  const [facts, setFacts] = useState([]);

  // getting facts on mount(when component mounts to dom )
  useEffect(() => {
    console.log("facts mounted");
    getFacts();

    // callback on umount
    return () => {
      console.log("facts unmounted");
    };
  }, []);
  const getFacts = async () => {
    let response = await axios.get("/api/facts");
    setFacts(response.data);
  };

  const addFact = (fact) => {
    setFacts([fact, ...facts]);
  };
  const deleteFact = async (id) => {
    // remove from db
    await axios.delete(`/api/facts/${id}`);
    // remove from UI
    const filterFacts = facts.filter((fact) => fact.id !== id);
    setFacts(filterFacts);
  };

  // render our facts
  const renderFacts = () => {
    if (facts.length === 0) {
      return <p>No Facts</p>;
    }
    return facts.map((fact) => {
      return <Fact key={fact.id} deleteFact={deleteFact} {...fact} />;
    });
  };

  // return jsx
  return (
    <BorderedDiv color="yellow">
      <Link to="/counter">goto counter</Link>
      <h1>Facts</h1>
      <Link to="facts/new">new fact</Link>
      <FactForm addFact={addFact} />
      {renderFacts()}
    </BorderedDiv>
  );
};
export default Facts;
