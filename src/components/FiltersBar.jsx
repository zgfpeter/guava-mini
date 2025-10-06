// ok
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function FiltersBar({ categories, onSelect, selectedCategory }) {
  const [menuOpen, setMenuOpen] = useState(false); // track if filters menu is open

  // map products
  // buttons so that categories can be tabbed with keyboard
  function openFilters() {
    return categories.map((category) => (
      <li key={category} className="">
        <button
          onClick={() => {
            onSelect(category);
            setMenuOpen((prev) => !prev);
          }}
          className={`hover:cursor-pointer hover:underline ${
            selectedCategory === category ? "underline font-bold" : ""
          }`}
        >
          {category
            .split(" ")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ")}
        </button>
      </li>
    ));
  }

  return (
    <div>
      <button
        onClick={() => setMenuOpen((prev) => !prev)} // toggle filters menu
        className="p-5 hover:cursor-pointer"
      >
        <FontAwesomeIcon icon={faFilter} className="text-[1.2em]" />
        FILTER
      </button>
      {menuOpen && (
        <ul className="flex flex-wrap py-7 px-3 gap-3">
          {openFilters(categories)}
        </ul>
      )}
    </div>
  );
}
