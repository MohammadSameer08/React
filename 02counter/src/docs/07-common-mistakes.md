# 7. Common Mistakes - What NOT to Do

## Mistake 1: Using Context Outside Provider

❌ **WRONG:**
```jsx
function App() {
  return (
    <Counter />  {/* ❌ No Provider! */}
    <CountContext.Provider value={{count: 0}}>
      ...
    </CountContext.Provider>
  );
}
```

Error: `useContext must be used within Provider`

✅ **CORRECT:**
```jsx
function App() {
  return (
    <CountContext.Provider value={{count: 0}}>
      <Counter />  {/* ✅ Inside Provider */}
    </CountContext.Provider>
  );
}
```

---

## Mistake 2: Creating New Object Every Render

❌ **WRONG:**
```jsx
function Provider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
// Object is recreated every render! 🔄 Performance issue!
```

✅ **CORRECT:**
```jsx
import { useMemo } from "react";

function Provider({ children }) {
  const [count, setCount] = useState(0);

  const value = useMemo(() => ({ count, setCount }), [count]);

  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  );
}
```

---

## Mistake 3: Importing Context Incorrectly

❌ **WRONG:**
```jsx
import { CountContext } from "./CountProvider";  // Context is not here!
```

✅ **CORRECT:**
```jsx
// Separate file for context
import { CountContext } from "./CountContext";

// Separate file for provider
import { CountProvider } from "./CountProvider";
```

---

## Mistake 4: Named Export vs Default Export

❌ **WRONG:**
```jsx
// CountContext.jsx
export const CountContext = createContext();

// App.jsx
import CountContext from "./CountContext";  // ❌ Wrong import!
```

✅ **CORRECT:**
```jsx
// Option 1: Named export
export const CountContext = createContext();
import { CountContext } from "./CountContext";  // ✅

// Option 2: Default export
export default createContext();
import CountContext from "./CountContext";  // ✅
```

---

## Mistake 5: Not Creating Custom Hook

❌ **WRONG (Repetitive):**
```jsx
// Counter.jsx
const { count, setCount } = useContext(CountContext);

// Display.jsx
const { count } = useContext(CountContext);

// Button.jsx
const { setCount } = useContext(CountContext);
```

✅ **CORRECT (DRY - Don't Repeat Yourself):**
```jsx
// CountContext.jsx
export function useCount() {
  return useContext(CountContext);
}

// Counter.jsx
const { count, setCount } = useCount();  // ✅ Cleaner!

// Display.jsx
const { count } = useCount();

// Button.jsx
const { setCount } = useCount();
```

---

## Mistake 6: Using Context for Everything

❌ **WRONG:**
```jsx
// Bad: Using context for component-specific state
const [inputValue, setInputValue] = useState("");
// Should this be in global context? Usually NO!

<InputContext.Provider value={inputValue}>
  <Input />
</InputContext.Provider>
```

✅ **CORRECT:**
```jsx
// Good: Component-specific state stays in component
function Input() {
  const [inputValue, setInputValue] = useState("");
  return <input value={inputValue} onChange={e => setInputValue(e.target.value)} />;
}

// Global context only for truly global data (theme, user, cart, etc)
```

---

## Mistake 7: Replacing `<div>` with Provider

❌ **WRONG:**
```jsx
<div value={{ count }}>  {/* ❌ DIV doesn't work! */}
  {children}
</div>
```

✅ **CORRECT:**
```jsx
<CountContext.Provider value={{ count }}>
  {children}
</CountContext.Provider>
```

---

## Summary of Common Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| No Provider | useContext fails | Wrap with Provider |
| New object every render | Performance issue | Use useMemo |
| Wrong import | Module error | Check export type |
| Export/Import mismatch | Import error | Match export syntax |
| Repetitive useContext | Code duplication | Create custom hook |
| Context for everything | Overuse | Only for global data |
| Replace div with value | Doesn't work | Use Context.Provider |

**Next:** [Best Practices](./08-best-practices.md)
