import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);
  return (
    <>
      <h1>Hello Sameer {counter}</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </>
  );
}

export default App;
