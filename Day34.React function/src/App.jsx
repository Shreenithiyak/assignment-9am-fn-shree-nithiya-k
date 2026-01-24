{/* Define a React component
       A React component is just a function that shows something on the screen.
       real-life example:TV remote = same button can be used many times. */}

{/* Props explanation:
          - Props are arguments passed to components (like function parameters)
          - Props are read-only because React enforces unidirectional data flow
          - Modifying props directly would cause unpredictable behavior and bugs
          - Use state (useState) if you need to update values instead
      */}
//  Explain what state is   
    // State is data that can change over time
    // EXAMPLE :Likes = Number

//Capture input value using state{already we used}
//User types something//React stores it in state//State remembers the value

import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login.jsx';

function Login(){
  return<Login />;
}
function Greeting({ name, age }) {
  return (
    <div>
      <p>I'M {name}</p>
      <p>I was {age} years old</p>
    </div>
  );
}

function Card({children}) {
  return (
    <Card style={{boder:"1px solid blue",width:"200px", padding:"10px", margin:"10px"}}>
     {children}
    </Card>
  );
}

function BlogPost(){
  return(
    <div>
      <BlogTitle />
      <BlogContent />
      <BlogAuthor />
    </div>
  );
}
function Button(){
  return <button>Click</button>;
} 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      
       <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
        </div>
      <h1>Vite + React</h1>
      <h2><Greeting name="Shree Nithya.k" age={20} /></h2>
      </div>

      <Card>
      <h2>profile Card</h2>
      <h3>Teach Learner</h3>
      <p>Frontend Developer</p>
      </Card>
       <Button />      
      <ToggleText />
    </>
  );
}
function ToggleText(){
  const[name,setname]=useState("")
  const[showText,setShowText]=useState(false);
  function handleClick(){
    setShowText(!showText);
  }
  return(
    <div>
      <input type="text" onChange={(e)=>setname(e.target.value)} />
      <p>Your name is:{name}</p>
      <button onClick={handleClick}>Toggle Text</button>
      {showText && <p>This is the text to show or hide.</p>}
    </div>
  );
}
export default App;



// Define a React component
// Create a functional component that shows your name
// Pass age as a prop and display it
// Identify props and children in a given code
// Explain why props are read-only

// Profile card using props (name, role)
// Product list component with price props
// Card component using children
1// Blog post layout using nested components
2// Simple dashboard layout using reusable components

// Explain what state is
// Create a counter using useState
// Handle button click event
// Capture input value using state
// Toggle text visibility

//Counter app with reset button
//Light ON/OFF switch

