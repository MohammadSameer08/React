import { createContext, useContext } from "react";

export const SimpleContext = createContext();

export function useSimple() {
  return useContext(SimpleContext);
}
