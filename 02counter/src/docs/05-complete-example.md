# 5. Complete Example - Putting It All Together

## The Full Picture

Let's create a complete counter example step by step.

---

## File 1: Create Context

**SimpleContext.jsx**
```jsx
import { createContext, useContext } from "react";

// Step 1: Create context
export const SimpleContext = createContext();

// Step 2: Create custom hook
export function useSimple() {
  return useContext(SimpleContext);
}
```

---

## File 2: Create Provider

**SimpleProvider.jsx**
```jsx
import { useState } from "react";
import { SimpleContext } from "./SimpleContext";

// Step 3: Create Provider component
export function SimpleProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <SimpleContext.Provider value={{ count, setCount }}>
      {children}
    </SimpleContext.Provider>
  );
}
```

---

## File 3: Component That Changes Data

**Counter.jsx**
```jsx
import { useSimple } from "./SimpleContext";

// Step 4: Use context to CHANGE data
function Counter() {
  const { count, setCount } = useSimple();

  return (
    <div style={{ border: "2px solid blue", padding: "10px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Counter;
```

---

## File 4: Component That Reads Data

**Display.jsx**
```jsx
import { useSimple } from "./SimpleContext";

// Step 5: Use context to READ data
function Display() {
  const { count } = useSimple();

  return (
    <div style={{ border: "2px solid green", padding: "10px" }}>
      <h2>Display: {count}</h2>
      <p>Count is shared without props!</p>
    </div>
  );
}

export default Display;
```

---

## File 5: Main App

**BasicContextExample.jsx**
```jsx
import { SimpleProvider } from "./SimpleProvider";
import Counter from "./Counter";
import Display from "./Display";

// Step 6: Wrap everything with Provider
function BasicContextExample() {
  return (
    <SimpleProvider>
      <div style={{ padding: "20px" }}>
        <h1>Basic Context Example</h1>
        <Counter />
        <Display />
      </div>
    </SimpleProvider>
  );
}

export default BasicContextExample;
```

---

## The Flow

```
Step 1: SimpleProvider wraps everything
  ↓
Step 2: Provides count=0 and setCount function
  ↓
Step 3: Counter uses useSimple() to get count & setCount
  ↓
Step 4: User clicks + button
  ↓
Step 5: setCount(1) updates context
  ↓
Step 6: Display uses useSimple() to get NEW count
  ↓
Step 7: Both components re-render with count=1 ✅
```

---

## What Happened

✅ **No prop drilling** - Counter and Display are siblings but share state
✅ **Automatic sync** - When one changes count, other updates instantly
✅ **Clean code** - No need to pass props through Dad/Son to get to Grandson

---

## Key Takeaways

1. Create context with `createContext()`
2. Wrap with Provider to share data
3. Use `useContext()` to access data anywhere
4. Components automatically re-render when data changes

**Next:** [Real World Examples](./06-real-world-examples.md)
