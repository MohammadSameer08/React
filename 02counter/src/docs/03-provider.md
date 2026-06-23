# 3. Context.Provider - Putting Data in the Safe

## What is Provider?

`<Context.Provider>` is a **component that puts data into the context**.

Think of it as locking data in the safe.

---

## Syntax

```jsx
<MyContext.Provider value={data}>
  {children}
</MyContext.Provider>
```

---

## Breaking It Down

| Part | What it does |
|------|------------|
| `MyContext.Provider` | The safe (unlocked) |
| `value={data}` | Data to put in the safe |
| `{children}` | Components that can access the data |

---

## Example

```jsx
import { createContext } from "react";

const CountContext = createContext();

function MyProvider({ children }) {
  const count = 0;
  
  return (
    <CountContext.Provider value={{ count }}>
      {children}
    </CountContext.Provider>
  );
}
```

Now any child can access `count`!

---

## Real World Example

```jsx
function App() {
  const [user, setUser] = useState({ name: "John" });
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />      {/* Can access user */}
      <Profile />     {/* Can access user */}
      <Settings />    {/* Can access user */}
    </UserContext.Provider>
  );
}
```

---

## Important Rules

✅ **DO THIS:**
```jsx
<Context.Provider value={data}>
  <App />
</Context.Provider>
```

❌ **DON'T DO THIS:**
```jsx
<div value={data}>  // ❌ DIV doesn't work!
  <App />
</div>
```

---

## Key Points

- **Provider = Required** to share data
- **value = Data to share** (can be object, string, number)
- **children = Components inside** that can access data
- **Multiple levels** can be stacked

```jsx
<ThemeProvider>
  <UserProvider>
    <App />
  </UserProvider>
</ThemeProvider>
```

**Next:** [Learn about useContext()](./04-useContext.md)
