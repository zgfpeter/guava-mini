import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  faSeedling,
  faSearch,
  faCartShopping,
  faUser,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const burgerMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const searchProducts = () => {
    setIsSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);
  return (
    <div className="bg-white navbar_container flex items-center place-content-between p-5 sticky top-0 z-50">
      {isMenuOpen && (
        <div className="fixed bottom-0 left-0 right-0 top-18 bg-stone-100">
          <div className="flex flex-col justify-center gap-10 p-5 h-full">
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
          </div>
        </div>
      )}

      <div className="relative flex gap-2 items-center">
        <button onClick={burgerMenu} className="flex p-1 hover:cursor-pointer">
          <FontAwesomeIcon
            icon={isMenuOpen ? faX : faBars}
            className="text-[25px]"
          />
        </button>

        <Link to="/landingPage" className="font-[DM_Serif_Display]">
          G U A V A
        </Link>
        <FontAwesomeIcon icon={faSeedling} className="text-green-700" />
      </div>
      <div className="flex gap-3 items-center">
        {isSearchOpen && (
          <div className="fixed bottom-0 left-0 right-0 top-18 bg-stone-50 p-5">
            <div className="flex">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search for products..."
                className="border-1 p-3 w-full rounded-l focus:outline-none"
              />
              <button className="bg-emerald-800 text-white pr-5 pl-5 rounded-r hover:cursor-pointer hover:bg-emerald-900">
                Search
              </button>
            </div>
          </div>
        )}
        <button className="hover:cursor-pointer" onClick={searchProducts}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <button className="hover:cursor-pointer">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="hover:cursor-pointer">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
}
