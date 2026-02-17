/* Greeting */
function Greetings({ isLoggedIn }) {
  return <h2>{isLoggedIn ? "Welcome back!" : "Please sign up."}</h2>;
}
export default Greetings;
