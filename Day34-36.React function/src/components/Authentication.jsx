/* Auth Button */
function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
export default AuthButton;
