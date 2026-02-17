import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${form.email}, Password: ${form.password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <input type="email"placeholder="Email"value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}/>
      <input type="password"placeholder="Password"value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}/>
      <button type="submit">Login</button>
    </form>
  );
}