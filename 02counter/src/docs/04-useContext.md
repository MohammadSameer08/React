# 4. useContext() - Getting Data from the Safe

## What is `useContext()`?

It **opens the safe and gets the data out**.

It's like a key that opens the context.

---

## Syntax

```jsx
import { useContext } from "react";
import { MyContext } from "./MyContext";

function MyComponent() {
  const data = useContext(MyContext);
  return <div>{data}</div>;
}
```

---

## Step by Step

```jsx
// Step 1: Import useContext
import { useContext } from "react";

// Step 2: Import the context
import { CountContext } from "./CountContext";

// Step 3: Use useContext to get data
function Counter() {
  const { count, setCount } = useContext(CountContext);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

---

## Common Pattern: Custom Hook

Instead of using `useContext()` everywhere, create a custom hook:

```jsx
// MyContext.jsx
export function useMyContext() {
  return useContext(MyContext);
}

// Counter.jsx
function Counter() {
  const { count, setCount } = useMyContext();  // ✅ Cleaner!
  // ...
}
```

---

## What You Get Back

Whatever you passed to `value` in Provider:

```jsx
// Provider puts this in:
<CountContext.Provider value={{ count: 0, setCount }}>

// Component gets this back:
const { count, setCount } = useContext(CountContext);
```

---

## Rules

✅ **Must be inside Provider**
```jsx
<CountContext.Provider>
  <Counter /> {/* ✅ Can use useContext here */}
</CountContext.Provider>
```

❌ **Won't work outside Provider**
```jsx
<Counter /> {/* ❌ No Provider = Error! */}

<CountContext.Provider>
  ...
</CountContext.Provider>
```

---

## Error Example

If you use `useContext()` outside Provider:

```
Error: useMyContext must be used within CountProvider
```

To fix: Wrap with Provider!

---

## Key Points

- **useContext = Gets data** from context
- **Must be inside Provider** to work
- **Can use in any nested component**
- **Custom hook = Best practice**

**Next:** [Complete Example - Putting it All Together](./05-complete-example.md)
