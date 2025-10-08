// component to scroll to top of the page
// otherwise if i click on a link to go to a new page, the new page opens at the position i scrolled to in the previous page
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
