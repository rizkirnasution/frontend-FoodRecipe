import { fn } from "moment";
import { useEffect, useRef } from "react";

export const useDidUpdate = (callbackFunc, dependencies) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      callbackFunc();
    } else {
      mounted.current = true;
    }
  }, dependencies);
};
