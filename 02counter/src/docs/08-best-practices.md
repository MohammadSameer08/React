# 8. Best Practices - Do's and Don'ts

## Practice 1: Separate Context and Provider into Different Files

✅ **GOOD:**
```
src/context/
  ├─ CountContext.jsx      (only context & hook)
  ├─ CountProvider.jsx     (only provider component)
  └─ index.js              (export both)
```

**CountContext.jsx**
```jsx
import { createContext, useContext } from "react";

export const CountContext = createContext();

export function useCount() {
  return useContext(CountContext);
}
```

**CountProvider.jsx**
```jsx
import { useState } from "react";
import { CountContext } from "./CountContext";

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}
```

---

## Practice 2: Create Custom Hooks

✅ **GOOD:**
```jsx
export function useCount() {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within CountProvider");
  }
  return context;
}
```

**Benefits:**
- Error handling
- Cleaner code
- Reusable everywhere

---

## Practice 3: Optimize with useMemo

✅ **GOOD:**
```jsx
import { useMemo } from "react";

export function CountProvider({ children }) {
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

## Practice 4: Organize Providers

✅ **GOOD:**
```jsx
function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <MainApp />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
```

Or create a wrapper:
```jsx
function Providers({ children }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

function App() {
  return (
    <Providers>
      <MainApp />
    </Providers>
  );
}
```

---

## Practice 5: Add Error Handling

✅ **GOOD:**
```jsx
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider. " +
      "Wrap your component with <AuthProvider>"
    );
  }
  
  return context;
}
```

Helps developers understand what went wrong!

---

## Practice 6: Document Your Context

✅ **GOOD:**
```jsx
/**
 * ThemeContext provides theme management for the entire app
 * 
 * @example
 * function MyComponent() {
 *   const { theme, toggleTheme } = useTheme();
 *   return <button onClick={toggleTheme}>{theme}</button>;
 * }
 */
export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
```

---

## Practice 7: Use TypeScript (Optional)

✅ **GOOD:**
```tsx
interface CountContextType {
  count: number;
  setCount: (count: number) => void;
}

export const CountContext = createContext<CountContextType | undefined>(
  undefined
);

export function useCount(): CountContextType {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error("useCount must be used within CountProvider");
  }
  return context;
}
```

---

## Practice 8: Avoid Unnecessary Re-renders

❌ **BAD:**
```jsx
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // All in one context = re-renders when any changes
  return (
    <UserContext.Provider value={{ user, loading, error, setUser, setLoading, setError }}>
      {children}
    </UserContext.Provider>
  );
}
```

✅ **GOOD:**
```jsx
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
```

---

## Practice 9: Check When to Use Context vs Props

**Use Context for:**
- ✅ Global state (theme, auth, language)
- ✅ Infrequently changing data
- ✅ Data needed in many nested components

**Use Props for:**
- ✅ Component-specific data
- ✅ Data that changes frequently
- ✅ Direct parent-child communication

---

## Practice 10: File Structure Example

```
src/
├─ context/
│  ├─ theme/
│  │  ├─ ThemeContext.jsx
│  │  └─ ThemeProvider.jsx
│  ├─ auth/
│  │  ├─ AuthContext.jsx
│  │  └─ AuthProvider.jsx
│  └─ index.js
├─ components/
│  └─ ...
└─ App.jsx
```

**index.js**
```jsx
export { ThemeContext, useTheme } from "./theme/ThemeContext";
export { ThemeProvider } from "./theme/ThemeProvider";
export { AuthContext, useAuth } from "./auth/AuthContext";
export { AuthProvider } from "./auth/AuthProvider";
```

---

## Checklist: Best Practices Summary

- ✅ Separate context and provider
- ✅ Create custom hooks
- ✅ Use useMemo for optimization
- ✅ Organize multiple providers
- ✅ Add error handling
- ✅ Document with comments
- ✅ Use TypeScript if possible
- ✅ Split contexts to avoid re-renders
- ✅ Use appropriate tool (context vs props)
- ✅ Follow folder structure

**You now know React Context API! 🎉**
