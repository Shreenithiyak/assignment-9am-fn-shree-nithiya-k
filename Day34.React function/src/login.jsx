//Simple login form (UI only)
//Like button with count
//Color changer using buttons
import React, { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text" placeholder="Username"value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password" placeholder="Password"value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
            <button onClick={handleLikeClick}>Like <span className="badge bg-primary">{count}</span></button>
            <button value="blue" onClick={handleColorChange}>Red</button>
            <button value="red" onClick={handleColorChange}>Blue</button>
        </div>
    );
}       
export default Login;