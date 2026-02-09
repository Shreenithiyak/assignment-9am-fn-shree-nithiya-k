import { useState, useEffect } from "react";

function CounterLogger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Count {count}</button>;
}

export default CounterLogger;