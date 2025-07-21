import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView(); // 👈 instant scroll
          return;
        }
      }

      window.scrollTo(0, 0); // 👈 instant scroll to top
    }, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
