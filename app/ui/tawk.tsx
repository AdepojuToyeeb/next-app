'use client'
import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/654ce17aa84dd54dc48a6dda/1heq51i98";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts (optional)
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkTo;
