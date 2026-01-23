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

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      </div>
      <h1>Vite + React</h1>
      <h2><Greeting name="Shree Nithya.k" age={20} /></h2>


      <Card>
      <h2>profile Card</h2>
      <h3>Teach Learner</h3>
      <p>Frontend Developer</p>
      </Card>
       <Button />      
  
  
    </>
  );
}

export default App



// Define a React component
// Create a functional component that shows your name
// Pass age as a prop and display it
// Identify props and children in a given code
// Explain why props are read-only

// Profile card using props (name, role)
// Product list component with price props
// Card component using children
// Blog post layout using nested components
// Simple dashboard layout using reusable components

// Explain what state is
// Create a counter using useState
// Handle button click event
// Capture input value using state
// Toggle text visibility
