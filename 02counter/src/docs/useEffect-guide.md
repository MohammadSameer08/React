# useEffect Hook - Side Effects & Lifecycle

## What is useEffect?

`useEffect` lets you perform **side effects** in functional components (data fetching, subscriptions, DOM updates).

---

## Syntax

```jsx
import { useEffect } from "react";

useEffect(() => {
  // Your side effect code here
  
  return () => {
    // Cleanup (optional)
  };
}, [dependencies]); // Dependency array
```

---

## Three Different Behaviors

### 1. Run After EVERY Render (Empty array not needed)

```jsx
useEffect(() => {
  console.log("This runs after EVERY render!");
});
```

⚠️ **Warning:** Can cause infinite loops!

---

### 2. Run Only Once (On Mount)

```jsx
useEffect(() => {
  console.log("Component mounted!");
  
  return () => {
    console.log("Component will unmount!");
  };
}, []);  // Empty dependency array
```

✅ **Good for:** Fetching initial data, setting up subscriptions

---

### 3. Run When Dependencies Change

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed to: ${count}`);
  document.title = `Count: ${count}`;
}, [count]);  // Runs when count changes
```

---

## Real World Examples

### Fetch Data

```jsx
import { useEffect, useState } from "react";

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/users/${userId}`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }
    
    fetchUser();
  }, [userId]);  // Re-fetch when userId changes

  if (loading) return <p>Loading...</p>;
  return <div>{user.name}</div>;
}
```

---

### Update Document Title

```jsx
useEffect(() => {
  document.title = "My App";
  
  return () => {
    document.title = "React App";  // Reset on unmount
  };
}, []);
```

---

### Set Up Timer/Subscription

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick!");
  }, 1000);

  // Cleanup: clear timer when unmount
  return () => clearInterval(timer);
}, []);
```

---

## Cleanup Function

Important to prevent memory leaks:

```jsx
useEffect(() => {
  const subscription = subscribe(data);
  
  // Cleanup function
  return () => {
    unsubscribe(subscription);  // Clean up before unmount
  };
}, []);
```

---

## Dependency Array

| Array | When it runs |
|-------|------------|
| Not provided | After EVERY render |
| `[]` | Only once on mount |
| `[value]` | When `value` changes |
| `[a, b]` | When `a` or `b` changes |

---

## Common Mistakes

❌ **Forget cleanup:**
```jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  // ❌ Timer keeps running! Memory leak!
}, []);
```

✅ **Clean up:**
```jsx
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer);  // ✅ Clean up!
}, []);
```

**Bottom line:** Use `useEffect` for side effects like data fetching, subscriptions, and DOM updates!
