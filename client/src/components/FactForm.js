import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import BorderedDiv from "./BorderedDiv";

const FactForm = (props) => {
  const [error, setError] = useState(null);
  const [text, setText] = useState("");
  const [stars, setStars] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  // lets do a axios call on mount to grab the data
  useEffect(() => {
    // don't get fact for new form, only edit
    if (params.id) {
      getFact();
    }
  }, []);

  const getFact = async () => {
    try {
      let res = await axios.get(`/api/facts/${params.id}`);
      setText(res.data.text);
      setStars(res.data.stars);
    } catch (err) {
      alert("err occurred getting fact");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fact = { text, stars };
    // do axios call to create fact to DB
    try {
      // reset error to null before i try to add to db
      setError(null);
      if (params.id) {
        //update
        let res = await axios.put(`/api/facts/${params.id}`, fact);
        // naviagate back to facts
        navigate("/");
      } else {
        //create
        let res = await axios.post("/api/facts", fact);
        props.addFact(res.data);
      }
      setText("");
      setStars("");
      // want to add res.data(new created fact) to our facts state
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
        <button type="submit">{params.id ? "update" : "add"}</button>
      </form>
    </BorderedDiv>
  );
};

export default FactForm;
