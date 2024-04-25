import React, { useState } from "react";
import "./styles.css";

const Counter = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  const handleFirstName = (e) => {
    if (e == "") setSubmit(false);
    setFirstName(e);
  };
  const handleLastName = (e) => {
    if (e == "") setSubmit(false);
    setLastName(e);
  };

  return (
    <div className="Container">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          minLength={1}
          value={firstName}
          onChange={(e) => handleFirstName(e.target.value)}
          required
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          minLength={1}
          value={lastName}
          onChange={(e) => handleLastName(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {submit && (
        <p>
          Full Name: {firstName} {lastName}
        </p>
      )}
    </div>
  );
};

export default Counter;
