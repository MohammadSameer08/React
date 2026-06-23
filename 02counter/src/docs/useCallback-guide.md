# useCallback Hook - Memoize Functions

## What is useCallback?

`useCallback` **caches a function** so it doesn't change on every render.

---

## Syntax

```jsx
import { useCallback } from "react";

const memoizedFunction = useCallback(() => {
  // Function body
}, [dependencies]);
```

---

## Problem It Solves

### Without useCallback

```jsx
function Parent() {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return <Child onClick={handleClick} />;
}

function Child({ onClick }) {
  // onClick is a NEW function every render!
  // Even if nothing changed, Child re-renders
  return <button onClick={onClick}>Click</button>;
}
```

---

### With useCallback

```jsx
function Parent() {
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);  // Function stays the same across renders

  return <Child onClick={handleClick} />;
}

function Child({ onClick }) {
  // onClick is the SAME function
  // Child doesn't re-render unnecessarily
  return <button onClick={onClick}>Click</button>;
}
```

---

## When to Use

✅ **When passing function to optimized child:**
```jsx
<OptimizedChild onClick={memoizedCallback} />
```

✅ **When function is a dependency:**
```jsx
useEffect(() => {
  // Use the callback
}, [memoizedCallback]);
```

❌ **For regular functions:**
```jsx
// useCallback not needed
const handleClick = () => { ... };
```

---

## Real Examples

### Optimize List Item

```jsx
import { useCallback, memo } from "react";

function ItemList({ items }) {
  const handleDelete = useCallback((id) => {
    console.log(`Delete ${id}`);
  }, []);

  return (
    <ul>
      {items.map(item => (
        <ListItem
          key={item.id}
          item={item}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

const ListItem = memo(({ item, onDelete }) => (
  <li>
    {item.name}
    <button onClick={() => onDelete(item.id)}>Delete</button>
  </li>
));
```

---

### With Dependencies

```jsx
function SearchBox({ initialQuery }) {
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = useCallback((searchTerm) => {
    // Depends on query
    console.log(`Searching for: ${query} - ${searchTerm}`);
  }, [query]);  // Re-create when query changes

  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => handleSearch("term")}>
        Search
      </button>
    </>
  );
}
```

---

## useCallback vs useMemo

| Feature | useCallback | useMemo |
|---------|------------|---------|
| Memoizes | Function | Value |
| Syntax | `useCallback(fn, deps)` | `useMemo(() => value, deps)` |
| Use case | Pass to child | Expensive calculation |

---

## Key Rules

✅ **DO:**
```jsx
const handleClick = useCallback(() => {
  // do something
}, [dependency]);
```

❌ **DON'T:**
```jsx
// useCallback has dependency mismatch
const handleClick = useCallback(() => {
  console.log(count);  // ❌ count is used but not in deps!
}, []);
```

---

## Important Note

⚠️ **useCallback is an optimization tool!** Don't overuse it:

```jsx
// ❌ Premature optimization
const add = useCallback((a, b) => a + b, []);

// ✅ Use only when needed (passing to optimized children)
const handleClick = useCallback(() => {
  // ...
}, []);
```

**Bottom line:** Use `useCallback` to optimize performance by preventing unnecessary re-renders of child components!
