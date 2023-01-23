import { useCallback, useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const handleResize = () => setWindowWidth(window.innerWidth);

  const setListenerResize = useCallback(
    () => window.addEventListener("resize", handleResize),
    []
  );

  const cleanListener = useCallback(
    () => window.removeEventListener("resize", handleResize),
    []
  );

  useEffect(() => {
    handleResize();
    setListenerResize();
    return cleanListener;
  }, [cleanListener, setListenerResize]);

  return { windowWidth };
};

export default useWindowSize;
