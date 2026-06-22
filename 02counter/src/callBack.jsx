import React, { useState, useCallback } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Click Me</button>;
});

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <Child onClick={handleClick} />
    </>
  );
}

export default App;
