import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <h2>Login</h2>
      <input type="text"placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)}  />
      <p>Entered: {username}</p>
    </div>
  );
}
export default Login;


// Explain conditional rendering ?
//Conditional rendering means displaying different UI based on a condition.

// Write a ternary condition in JSX
//condition ? true : false

// Why are keys required?
//Keys allow React to keep track of elements if an item is updated or removed, 
// only that item will be re-rendered instead of the entire list.


// Correct way to use keys is to use a unique identifier from the data itself, 
// rather than the index, to avoid issues when the list changes. 