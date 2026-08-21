import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const homeScroll = sessionStorage.getItem("homeScroll");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (homeScroll) {
      sessionStorage.setItem("homeScroll", homeScroll);
    }
    window.removeEventListener("scroll", () => {});
  }, [pathname, homeScroll]);

  return null;
}
