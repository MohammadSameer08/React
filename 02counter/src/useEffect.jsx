import { useState, useEffect } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  // Runs after every render
  useEffect(() => {
    console.log("Effect ran! Count is:", count);
  });

  // Runs only once after initial render (empty dependency array)
  useEffect(() => {
    console.log("Component mounted!");
    return () => {
      console.log("Component will unmount!");
    };
  }, []);

  // Runs when count changes (dependency array with count)
  useEffect(() => {
    console.log("Count changed to:", count);
    document.title = `Count: ${count}`;
  }, [count]);

  // Fetch data example
  useEffect(() => {
    if (name.trim()) {
      console.log(`Fetching data for ${name}...`);
      // Simulating API call
      const timer = setTimeout(() => {
        setData({ user: name, timestamp: new Date().toLocaleTimeString() });
      }, 1000);

      // Cleanup function
      return () => clearTimeout(timer);
    }
  }, [name]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>useEffect Demo</h2>

      <div>
        <h3>Counter</h3>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <div>
        <h3>Fetch Data</h3>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />
        {data && (
          <p>
            Hello {data.user}! Current time: {data.timestamp}
          </p>
        )}
      </div>

      <hr />
      <p style={{ fontSize: "12px", color: "gray" }}>
        Open console to see useEffect logs
      </p>
    </div>
  );
}

export default UseEffectDemo;
