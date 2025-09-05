export default function Footer() {
  return (
    <div className="bottom-0 grid gap-2 p-3 text-xs">
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
        <a href="" className="hover:underline">
          ABOUT
        </a>
        <a href="" className="hover:underline">
          FAQ
        </a>
        <a href="" className="hover:underline">
          SHIPPING & RETURN
        </a>
        <a href="" className="hover:underline">
          PRIVACY AND COOKIES POLICY
        </a>
      </div>
    </div>
  );
}
