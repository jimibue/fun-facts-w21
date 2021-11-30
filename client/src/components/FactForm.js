import axios from "axios";
import React, { useState } from "react";
import BorderedDiv from "./BorderedDiv";

const FactForm = (props) => {
  const [error, setError] = useState(null);
  const [text, setText] = useState("");
  const [stars, setStars] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit clicked");
    console.log({ text, stars });
    const fact = { text, stars };
    // do axios call to create fact to DB
    try {
      // reset error to null before i try to add to db
      setError(null);
      let res = await axios.post("/api/facts", fact);
      setText("");
      setStars("");
      // want to add res.data(new created fact) to our facts state
      props.addFact(res.data);
    } catch (err) {
      // err.response they err is going to be
      // http error axios is organizing this
      // err.response
      // alert("err occured inspect console and rails server");
      console.log(err);
      err.response && setError(err.response.data.errors);
    }
  };
  return (
    <BorderedDiv color="purple">
      {/* {error && <p style={{ color: "red" }}>{JSON.stringify(error)}</p>} */}
      <form onSubmit={handleSubmit}>
        <p>text</p>
        {/* html validation, easiest, worst option */}

        {error && error.text && (
          <p style={{ color: "red" }}>{JSON.stringify(error.text)}</p>
        )}
        <input
          // required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>stars</p>
        {error && error.stars && (
          <p style={{ color: "red" }}>{JSON.stringify(error.stars)}</p>
        )}
        <input
          // type="number"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
          // min={0}
          // max={5}
        />
        <button type="submit">add</button>
      </form>
    </BorderedDiv>
  );
};

export default FactForm;
