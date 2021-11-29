import React, { useState } from "react";
import BorderedDiv from "./BorderedDiv";

const FactForm = () => {
  const [text, setText] = useState("");
  const [stars, setStars] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit clicked");
    console.log({ text, stars });
  };
  return (
    <BorderedDiv color="purple">
      <form onSubmit={handleSubmit}>
        <p>text</p>
        {/* html validation, easiest, worst option */}
        <input
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>stars</p>
        <input
          type="number"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
          min={0}
          max={5}
        />
        <button type="submit">add</button>
      </form>
    </BorderedDiv>
  );
};

export default FactForm;
