import { createContext, useContext } from "react";

export const SimpleContext = createContext();

export function useSimpleContext() {
  return useContext(SimpleContext);
}
