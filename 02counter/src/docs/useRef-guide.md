# useRef Hook - Access DOM Directly

## What is useRef?

`useRef` lets you directly access DOM elements or store values that **don't cause re-renders**.

---

## Syntax

```jsx
import { useRef } from "react";

function MyComponent() {
  const inputRef = useRef(null);
  
  return <input ref={inputRef} />;
}
```

---

## Use Cases

### 1. Focus Input Element

```jsx
import { useRef } from "react";

function TextInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}
```

---

### 2. Get Input Value

```jsx
function GetInputValue() {
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(inputRef.current.value);  // Get the value
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Get Value</button>
    </>
  );
}
```

---

### 3. Store Value Without Re-render

```jsx
function Timer() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
    // Component does NOT re-render!
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

---

## useRef vs useState

| Feature | useRef | useState |
|---------|--------|----------|
| Updates cause re-render | ❌ No | ✅ Yes |
| Access DOM | ✅ Yes | ❌ No |
| Store values | ✅ Yes | ✅ Yes |
| Initial value | `useRef(initial)` | `useState(initial)` |
| Access value | `ref.current` | `value` |

---

## Key Rules

✅ **DO:**
```jsx
const inputRef = useRef(null);
inputRef.current.focus();  // Access with .current
```

❌ **DON'T:**
```jsx
const inputRef = useRef(null);
inputRef.focus();  // ❌ Missing .current
```

---

## Real Examples

### Clear Input on Button Click
```jsx
function ClearInput() {
  const inputRef = useRef(null);

  const handleClear = () => {
    inputRef.current.value = "";
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClear}>Clear</button>
    </>
  );
}
```

### Play/Pause Video
```jsx
function VideoPlayer() {
  const videoRef = useRef(null);

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();

  return (
    <>
      <video ref={videoRef} src="video.mp4"></video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
}
```

**Bottom line:** Use `useRef` for DOM access or storing values without re-renders!
