/* Define a React component
       A React component is just a function that shows something on the screen.
       real-life example:TV remote = same button can be used many times. */

/* Props explanation:
          - Props are arguments passed to components (like function parameters)
          - Props are read-only because React enforces unidirectional data flow
          - Modifying props directly would cause unpredictable behavior and bugs
          - Use state (useState) if you need to update values instead
      */
//  Explain what state is   
    // State is data that can change over time
    // EXAMPLE :Likes = Number

//Capture input value using state{already we used}
//User types something//React stores it in state//State remembers the value

import { useState } from "react";

import Greetings from "./components/Greetings.jsx";
import TodoList from "./components/TodoList.jsx";
import Authentication from "./components/Authentication.jsx";
import NumberList from "./components/NumberList.jsx";
import Login from "./components/Login.jsx";
import User from "./components/User.jsx";
import Product from "./components/product.jsx";

/* Greeting Component */
function Greeting({ name, age }) {
  return (
    <div>
      <p>I'M {name}</p>
      <p>I am {age} years old</p>
    </div>
  );
}

/* Card Component */
function Card({ children }) {
  return (
    <div style={{ border: "1px solid blue", width: "200px", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
}

/* Toggle Text Component */
function ToggleText() {
  const [name, setName] = useState("");
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Your name is: {name}</p>
      <button onClick={() => setShowText(!showText)}>Toggle Text</button>
      {showText && <p>This is the text to show or hide.</p>}
    </div>
  );
}

/* Main App */
function App() {
  const [count, setCount] = useState(0);
  const [likes, setLikes] = useState(0);
  const [isLightOn, setIsLightOn] = useState(false);

  return (
       <div style={{
      backgroundColor: isLightOn ? "#ffffff" : "#1e293b",color: isLightOn ? "#000000" : "#ffffff",
      minHeight: "100vh",padding: "20px",textAlign: "center"}}>
      <h1>React Working ✅</h1>

      <button onClick={() => setCount(count + 1)}>count is {count}</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <Greeting name="Shree Nithya.k" age={20} />
        <div>
        <h2>Like Feature</h2>
        <button onClick={() => setLikes(likes + 1)}>👍 Like {likes}</button>
      </div>
        <div>
        <h2>Light Switch</h2>
        <button onClick={() => setIsLightOn(!isLightOn)}>
          {isLightOn ? "Turn OFF Light" : "Turn ON Light"}
        </button>
      </div>
      <Card>
        <h2>Profile Card</h2>
        <h3>Tech Learner</h3>
        <p>Frontend Developer</p>
      </Card>

      <ToggleText />

      <Product />
      <TodoList />
      <NumberList />
      <Authentication />
      <Login />
      <User />
      <Greetings isLoggedIn={true} />
    </div>
  );
}


export default App;


