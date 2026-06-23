import { useState } from "react";
import { SimpleContext } from "./SimpleContext";

export function SimpleProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <SimpleContext.Provider value={{ count, setCount }}>
      {children}
    </SimpleContext.Provider>
  );
}
