import { useContext } from "react";
import { SkipDisplayContext } from "./SkipDisplayContext";

export function useSkipDisplayContext() {
  const context = useContext(SkipDisplayContext);
  if (!context) {
    throw new Error(
      "'useSkipDisplayContext' used outside of context provider."
    );
  }
  return context;
}
