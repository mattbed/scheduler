import { useState } from "react";

// manages the current status of the main appointment element (traversing through modes) 
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  const transition = (mode, replace = false) => {
    if (!replace) {
      setHistory((prev) => [...prev, mode]);
    }
    setMode(mode);
  };
  const back = () => {
    if (history.length <= 1) {
      return;
    }
    history.pop();
    setMode(history[history.length - 1]);
  };
  return {
    mode,
    transition,
    back,
  };
}
