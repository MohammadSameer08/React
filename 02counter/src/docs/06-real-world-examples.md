# 6. Real World Examples

## Example 1: Theme Switcher (Light/Dark Mode)

**ThemeContext.jsx**
```jsx
import { createContext, useContext } from "react";

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}
```

**ThemeProvider.jsx**
```jsx
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

**Header.jsx**
```jsx
import { useTheme } from "./ThemeContext";

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  const bgColor = theme === "light" ? "#fff" : "#333";
  const textColor = theme === "light" ? "#000" : "#fff";

  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <h1>My App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
```

---

## Example 2: User Authentication

**AuthContext.jsx**
```jsx
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
```

**AuthProvider.jsx**
```jsx
import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
```

**Profile.jsx**
```jsx
import { useAuth } from "./AuthContext";

function Profile() {
  const { user, isLoggedIn, logout } = useAuth();

  if (!isLoggedIn) {
    return <p>Please log in</p>;
  }

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
```

---

## Example 3: Shopping Cart

**CartContext.jsx**
```jsx
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}
```

**CartProvider.jsx**
```jsx
import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotalPrice = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
```

**ShoppingCart.jsx**
```jsx
import { useCart } from "./CartContext";

function ShoppingCart() {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <div>
      <h2>Cart ({cart.length} items)</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotalPrice()}</h3>
    </div>
  );
}

export default ShoppingCart;
```

---

## When to Use Context

✅ **Good Use Cases:**
- Theme (Light/Dark mode)
- User authentication
- Language/Localization
- Shopping cart
- Notifications
- Global settings

❌ **NOT Good For:**
- Frequently changing data (use Redux instead)
- Very large data (performance issues)
- Component-specific props (use normal props)

**Next:** [Common Mistakes](./07-common-mistakes.md)
