import { SimpleContext } from "./CreateContext";

export function CreateProvider({ children }) {
  return (
    <SimpleContext.Provider value={{ money: 5000 }}>
      {children}
    </SimpleContext.Provider>
  );
}
