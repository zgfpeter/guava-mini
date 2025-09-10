import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="bottom-0 grid gap-5 p-3 text-xs">
      <div className="sm_links flex flex-wrap p-5 gap-4">
        <a href="https://www.instagram.com" className="hover:underline">
          INSTAGRAM
        </a>
        <a href="https://www.facebook.com" className="hover:underline">
          FACEBOOK
        </a>
        <a href="https://www.pinterest.com" className="hover:underline">
          PINTEREST
        </a>
        <a href="https://www.youtube.com" className="hover:underline">
          YOUTUBE
        </a>
        <a href="https://www.linkedin.com" className="hover:underline">
          LINKEDIN
        </a>
        <a href="https://www.x.com" className="hover:underline">
          X
        </a>
        <a href="https://www.tiktok.com">TIKTOK</a>
      </div>
      <div className="footer_about grid gap-4">
        <Link to="/about" className="hover:underline">
          ABOUT
        </Link>
        <Link to="/help" className="hover:underline">
          HELP
        </Link>
        <Link to="/shippingAndReturns" className="hover:underline">
          SHIPPING & RETURN
        </Link>
        <Link to="/privacyAndCookies" className="hover:underline">
          PRIVACY AND COOKIES POLICY
        </Link>
        <Link to="/contact" className="hover:underline">
          CONTACT
        </Link>
        <p className="text-center pt-5 pb-5 text-gray-500">
          All rights reserved - © 2025
        </p>
      </div>
    </div>
  );
}
