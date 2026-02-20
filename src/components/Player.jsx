import { useState } from "react";
export default function Player() {
  const [enterdPlayerName, setEnterdPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleChange = function (e) {
    // setSubmitted(false);
    setEnterdPlayerName(e.target.value);
  };
  const handleClick = function () {
    setSubmitted(true);
  };
  return (
    <section id="player">
      <h2>Welcome {submitted ? enterdPlayerName : 'unknown entity'}</h2>
      <p>
        <input type="text" onChange={handleChange} value={enterdPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
