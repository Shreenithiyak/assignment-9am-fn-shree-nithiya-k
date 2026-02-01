//Simple login form (UI only)
//Like button with count
//Color changer using buttons

// Explain conditional rendering ?
//Conditional rendering means displaying different UI based on a condition.

// Write a ternary condition in JSX
//condition ? true : false
function Greeting(props) {
const isLoggedIn = props.isLoggedIn;
return (
  <div>
{isLoggedIn ? (<h1>Welcome back!</h1> ) : (<h1>Please sign up.</h1> )}
  </div>
);
}

// Render a list of 5 numbers
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
}

// Why are keys required?
//Keys allow React to keep track of elements if an item is updated or removed, 
// only that item will be re-rendered instead of the entire list.

// Identify error in list rendering code
function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <ul>
      {numbers.map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
}
// Correct way to use keys is to use a unique identifier from the data itself, 
// rather than the index, to avoid issues when the list changes. 

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

//Login / Logout UI toggle
function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
}
//Product list using array
function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 499 },
    { id: 3, name: "Tablet", price: 299 },
  ];

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}
//Show “No Data” message conditionally
function DataList({ data }) {
  return (
    <div> 
      {data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
}
//User list with unique keys
function UserList() {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
//Todo list UI (static data)
function TodoList() {
  const todos = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Build a project" },
    { id: 3, task: "Read documentation" },
  ];  

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}