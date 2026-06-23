import { useSimple } from "./SimpleContext";

function Display() {
  const { count } = useSimple();

  return (
    <div style={{ padding: "20px", border: "2px solid green" }}>
      <h2>Display: {count}</h2>
      <p>Count is shared without props!</p>
    </div>
  );
}

export default Display;
