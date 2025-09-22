import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="grid gap-5 p-3 text-xs mt-auto">
      <nav
        aria-label="Social Media Links"
        className="max-w-xl w-full justify-self-center border-b border-stone-200"
      >
        <ul className="flex justify-between flex-wrap w-full max-w-xxl p-5">
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              INSTAGRAM
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              FACEBOOK
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              YOUTUBE
            </a>
          </li>
          <li>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              PINTEREST
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LINKEDIN
            </a>
          </li>
        </ul>
      </nav>
      <nav aria-label="Footer links">
        <ul className="grid gap-5">
          <li>
            <Link to="/about" className="hover:underline">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/help" className="hover:underline">
              HELP
            </Link>
          </li>
          <li>
            <Link to="/shippingAndReturns" className="hover:underline">
              SHIPPING & RETURN
            </Link>
          </li>
          <li>
            <Link to="/privacyAndCookies" className="hover:underline">
              PRIVACY AND COOKIES POLICY
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <p className="text-center pt-5 pb-5 text-gray-500 ">
        All rights reserved - © 2025
      </p>
    </footer>
  );
}
