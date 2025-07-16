"use client";

import { useLayoutEffect, useState } from "react";

function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  } as T;
}

export const useBottomPadding = () => {
  const [bottomBarPadding, setBottomBarPadding] = useState<number>(0);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    const updatePadding = debounce(() => {
      // Create a temporary element to measure 100vh in pixels
      const temp = document.createElement("div");
      temp.style.height = "100vh";
      temp.style.position = "absolute";
      temp.style.visibility = "hidden";
      temp.style.pointerEvents = "none";
      document.body.appendChild(temp);
      const vh100 = temp.offsetHeight;
      document.body.removeChild(temp);

      const innerHeight = window.innerHeight;
      // Calculate the bottom bar padding based on the difference between 100vh and window.innerHeight
      if (vh100 - innerHeight > 0) {
        setBottomBarPadding(vh100 - innerHeight);
      } else {
        setBottomBarPadding(0);
      }
    }, 100);

    window.addEventListener("resize", updatePadding);
    updatePadding();

    return () => {
      window.removeEventListener("resize", updatePadding);
    };
  }, []);

  return bottomBarPadding;
};
