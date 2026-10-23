import { useRef } from "react";
import { TransitionContext } from "./TransitionContext";

export function TransitionProvider({ children }) {
  const elementsRef = useRef(new Map());

  const registerElement = (id, element) => {
    elementsRef.current.set(id, element);
  };

  const unregisterElement = (id) => {
    elementsRef.current.delete(id);
  };

  const getElementRect = (id) => {
    const el = elementsRef.current.get(id);
    return el ? el.getBoundingClientRect() : null;
  };

  return (
    <TransitionContext.Provider value={{ registerElement, unregisterElement, getElementRect }}>
      {children}
    </TransitionContext.Provider>
  );
}