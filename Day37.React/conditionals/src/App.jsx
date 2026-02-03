import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import FeedbackForm from "./components/FeedbackForm";
import LivePreviewForm from "./components/LivePreviewForm";
import ValidationForm from "./components/ValidationForm";

function App() {
  return (
    <div>
      <LoginForm />
      <RegistrationForm />
      <FeedbackForm />
      <LivePreviewForm />
      <ValidationForm />
    </div>
  );
}
export default App

// // What is a Controlled Component?
// //A controlled component is an input field whose value is controlled by React state.

// //Why do we use onChange?
// //Because React must know when the user types.
// //onChange → updates state → UI updates.

// //Name Input Field
// const [name, setName] = useState("");

// <input type="text"placeholder="Enter name"value={name}
//   onChange={(e) => setName(e.target.value) }/>

//  // Handle Two Inputs Using One State
// const [formData, setFormData] = useState({
//   email: "",password: ""});

// //<input type="email" placeholder="Enter email" value={formData.email}
// //onChange={(e) => setFormData((prevState) => ({...prevState, email: e.target.value})) }/>

// <input type="password" placeholder="Enter password" value={formData.password}
//   onChange={(e) => setFormData((prevState) => ({...prevState, password: e.target.value})) }/>

// //Prevent Form Refresh
// const handleSubmit = (e) => {
//   e.preventDefault(); // stops page reload
// };
