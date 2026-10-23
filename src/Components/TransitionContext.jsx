import { createContext } from "react";

export const TransitionContext = createContext({
  registerElement: () => {},
  unregisterElement: () => {},
  getElementRect: () => null,
});