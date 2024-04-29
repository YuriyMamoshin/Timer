import { useRef, useEffect } from "react";

export default function useRendersCounter() {
  const rendersCounter = useRef(0);

  useEffect(() => {
    rendersCounter.current++;
  });

  return rendersCounter.current;
}
