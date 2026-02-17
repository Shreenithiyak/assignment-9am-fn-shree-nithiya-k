import { useState } from "react";

export default function RegistrationForm() {
  const [user, setUser] = useState({ name: "", email: "", age: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(user));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <input placeholder="Name" onChange={(e) => setUser({...user, name:e.target.value})} />
      <input placeholder="Email" onChange={(e) => setUser({...user, email:e.target.value})} />
      <input placeholder="Age" onChange={(e) => setUser({...user, age:e.target.value})} />
      <button type="submit">Register</button>
    </form>
  );
}
