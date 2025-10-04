// ok
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import { useSearch } from "../context/SearchContext";
import { useNavigate, useLocation } from "react-router-dom";

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
  const { searchTerm, setSearchTerm } = useSearch();
  const location = useLocation(); // get current path

  const inputRef = useRef(null);
  const burgerMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const searchProducts = () => {
    setIsSearchOpen((prev) => !prev);
  };

  //focus input when search window is open
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // reset search term when on homepage
  useEffect(() => {
    if (location.pathname === "/landingPage") {
      setSearchTerm("");
    }
  }, [location.pathname, setSearchTerm]);

  // handle esc key for closing menu/search

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const [cart] = useLocalStorage("cart", []);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 flex items-center p-5 bg-white navbar_container place-content-between">
      {isMenuOpen && (
        <nav className="fixed bottom-0 left-0 right-0 top-[4.5rem] bg-stone-100 max-w-xl">
          <ul className="flex flex-col justify-center h-full gap-10 p-5">
            <li>
              <Link to="/home" className="font-bold hover:underline">
                SHOP
              </Link>
            </li>
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
      )}

      <div className="relative flex items-center gap-2">
        <button
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={burgerMenu}
          className="flex p-1 hover:cursor-pointer"
        >
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
      <nav className="flex items-center gap-3">
        {isSearchOpen && (
          <div
            role="dialog"
            aria-modal
            className="fixed bottom-0 left-0 right-0 flex flex-col items-center p-5 top-18 bg-stone-50"
          >
            <form
              className="flex w-full max-w-xl"
              onSubmit={(e) => {
                e.preventDefault();
                setIsSearchOpen(false); // close overlay
                navigate("/search"); // go to SearchResults page
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for products..."
                className="w-full p-3 rounded-l border-1 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Search for products"
                className="pl-5 pr-5 text-white rounded-r bg-emerald-800 hover:cursor-pointer hover:bg-emerald-900"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>
          </div>
        )}
        <button
          aria-label="Search for products"
          className="p-3 hover:cursor-pointer"
          onClick={searchProducts}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <Link
          to="/userProfile"
          aria-label="open user profile"
          className="p-3 hover:cursor-pointer"
        >
          <FontAwesomeIcon icon={faUser} />
        </Link>

        <Link
          to="/cart"
          aria-label="Go to cart"
          aria-live="polite"
          className="flex items-center gap-1 p-3 hover:cursor-pointer "
        >
          <FontAwesomeIcon icon={faCartShopping} />
          {cart.length}
        </Link>
      </nav>
    </header>
  );
}
