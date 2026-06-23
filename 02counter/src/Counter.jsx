import { useSimple } from "./SimpleContext";

function Counter() {
  const { count, setCount } = useSimple();

  return (
    <div style={{ padding: "20px", border: "2px solid blue" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
