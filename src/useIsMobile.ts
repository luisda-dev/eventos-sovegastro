import { useEffect, useState } from "react";

const BREAKPOINT = 860;

/** True when the viewport is narrow enough that the fixed 1920x1080
 * "stage" layout would be illegible if simply scaled down — switches
 * each screen to its dedicated mobile layout instead. */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < BREAKPOINT
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
