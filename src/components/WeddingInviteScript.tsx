"use client";

import { useEffect } from "react";

export default function WeddingInviteScripts() {
  useEffect(() => {
    const lazyScript = document.createElement("script");
    lazyScript.id = "script_lazyload";
    lazyScript.type = "text/javascript";
    lazyScript.src = "/js/lazyload.js";
    document.body.appendChild(lazyScript);

    return () => {
      document.body.removeChild(lazyScript);
    };
  }, []);

  return null;
}
