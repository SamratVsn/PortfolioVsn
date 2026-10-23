import { useContext } from "react";
import { TransitionContext } from "./TransitionContext";

export function useTransitionContext() {
  return useContext(TransitionContext);
}