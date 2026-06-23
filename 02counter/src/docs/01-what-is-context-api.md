# 1. What is Context API?

## Problem: Prop Drilling 😩

Imagine passing a prop through many components:

```
Grandpa (has data)
  ↓ pass to Dad
    ↓ pass to Son
      ↓ pass to Grandson
```

If Grandson needs data from Grandpa, it has to pass through Dad and Son even if they don't need it!

---

## Solution: Context API 🎉

Create a **global safe** that anyone can access:

```
Grandpa puts data in SAFE
↓
Grandson opens SAFE directly (no passing through Dad & Son!)
```

---

## Why Use Context API?

| Problem | Solution |
|---------|----------|
| 😩 Pass props through 10 components | ✅ Access directly with Context |
| 😩 Hard to maintain | ✅ Easy to read and manage |
| 😩 Prop drilling hell | ✅ No prop drilling |

---

## Real World Examples

- 🌙 **Theme** (Light/Dark mode)
- 👤 **User** (Logged-in user info)
- 🌐 **Language** (English/Spanish)
- 🛒 **Shopping cart** (E-commerce)
- 🔔 **Notifications** (Show alerts)

---

## How It Works (Simple)

```jsx
// Step 1: Create context
const MyContext = createContext();

// Step 2: Provide data
<MyContext.Provider value={{ data }}>
  <App />
</MyContext.Provider>

// Step 3: Use data anywhere
const data = useContext(MyContext);
```

**Next:** [Learn about createContext()](./02-createContext.md)
