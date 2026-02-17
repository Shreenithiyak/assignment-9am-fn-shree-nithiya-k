import { useState } from "react";

export default function ValidationForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid Email");
    } else {
      setError("");
      alert("Valid Email");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Validation Form</h2>
      <input onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Submit</button>
      <p style={{ color: "red" }}>{error}</p>
    </form>
  );
}
