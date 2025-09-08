import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function FiltersBar({ categories }) {
  const [menuOpen, setMenuOpen] = useState(false);
  function openFilters() {
    function filterItems(category) {
      console.log(category);
    }
    return categories.map((category) => (
      <li
        key={category}
        onClick={() => onselect(category)}
        className="hover:underline hover:cursor-pointer"
      >
        {category
          .split(" ")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join(" ")}
      </li>
    ));
  }

  return (
    <div>
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="p-5 hover:cursor-pointer"
      >
        <FontAwesomeIcon icon={faFilter} />
        FILTER AND ORDER
      </button>
      {menuOpen && (
        <ul className="w-full grid gap-3 p-5 bg-neutral-100">
          {openFilters(categories)}
        </ul>
      )}
    </div>
  );
}
