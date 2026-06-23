# 2. createContext() - Creating the Safe

## What is `createContext()`?

It **creates an empty context** - like building an empty safe.

---

## Syntax

```jsx
import { createContext } from "react";

const MyContext = createContext();
```

---

## What Happens?

```
Step 1: Import createContext
  ↓
Step 2: Call createContext() with NO arguments
  ↓
Step 3: Creates empty context object
  ↓
Step 4: Can now store data in it
```

---

## Real Example

```jsx
// Create Context
export const ThemeContext = createContext();
export const UserContext = createContext();
export const NotificationContext = createContext();
```

Now you have 3 empty "safes":
- One for theme (light/dark)
- One for user info
- One for notifications

---

## Parameters (Optional)

You can provide a default value:

```jsx
const MyContext = createContext("default value");
```

If no Provider wraps it, default value is used.

---

## What You Get Back

`createContext()` returns an object with:
- `.Provider` - Provides/shares data
- `.Consumer` - Consumes data (old way, don't use)

```jsx
const MyContext = createContext();

MyContext.Provider  // ← Use this
MyContext.Consumer  // ← Don't use (old way)
```

---

## Next Steps

The context is **empty**. Now we need to:
1. Put data in it using **Provider**
2. Get data out using **useContext**

**Next:** [Learn about Provider](./03-provider.md)
