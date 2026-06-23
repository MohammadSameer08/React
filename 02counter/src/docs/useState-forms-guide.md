# useState & Forms - Managing Form State

## What is useState?

`useState` lets you add **state** to functional components.

---

## Syntax

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

---

## Basic Example

```jsx
const [value, setValue] = useState(initialValue);

// value = current state
// setValue = function to update state
// initialValue = starting value
```

---

## Form Handling

### Single Input Field

```jsx
function LoginForm() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Enter username"
      />
      <p>You typed: {username}</p>
    </div>
  );
}
```

---

### Multiple Input Fields

```jsx
function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
  );
}
```

---

### Checkbox & Radio Buttons

```jsx
function Preferences() {
  const [preferences, setPreferences] = useState({
    newsletter: false,
    notifications: true,
    theme: "light"
  });

  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setPreferences({
      ...preferences,
      [name]: checked
    });
  };

  const handleRadio = (e) => {
    const { value } = e.target;
    setPreferences({
      ...preferences,
      theme: value
    });
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="newsletter"
          checked={preferences.newsletter}
          onChange={handleCheckbox}
        />
        Subscribe to newsletter
      </label>

      <label>
        <input
          type="radio"
          value="light"
          checked={preferences.theme === "light"}
          onChange={handleRadio}
        />
        Light Mode
      </label>
      <label>
        <input
          type="radio"
          value="dark"
          checked={preferences.theme === "dark"}
          onChange={handleRadio}
        />
        Dark Mode
      </label>
    </div>
  );
}
```

---

### Select Dropdown

```jsx
function CountrySelector() {
  const [country, setCountry] = useState("usa");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <select value={country} onChange={handleChange}>
      <option value="usa">USA</option>
      <option value="uk">UK</option>
      <option value="canada">Canada</option>
    </select>
  );
}
```

---

## Controlled vs Uncontrolled

### Controlled Component (with value)

```jsx
function ControlledInput() {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}  // ← React controls the value
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
```

✅ React manages state
✅ Can reset easily
✅ Best practice

---

### Uncontrolled Component (without value)

```jsx
function UncontrolledInput() {
  return (
    <input
      type="text"
      // React doesn't control the value
    />
  );
}
```

❌ DOM manages state
❌ Can't reset easily
❌ Avoid using

---

## Real Example: Login Form

```jsx
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      setError("Please fill all fields");
      return;
    }
    
    console.log("Logging in with:", formData);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}
```

---

## Key Concepts

| Concept | Description |
|---------|------------|
| State | Data that changes over time |
| setState | Function to update state |
| Re-render | Component updates when state changes |
| Controlled | React controls input value |
| Uncontrolled | DOM controls input value |

**Bottom line:** Use `useState` to manage form data and component state!
