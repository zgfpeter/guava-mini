import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function FiltersBar({ categories, onSelect, selectedCategory }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function openFilters() {
    return categories.map((category) => (
      <li
        key={category}
        onClick={() => {
          onSelect(category);
          setMenuOpen((prev) => !prev);
        }}
        className={`hover:cursor-pointer hover:underline p-2 ${
          selectedCategory === category ? "bg-cyan-800 text-white" : ""
        }`}
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
        <FontAwesomeIcon icon={faFilter} className="text-[1.2em]" />
        FILTER AND ORDER
      </button>
      {menuOpen && (
        <ul className="w-full grid gap-2 p-5 bg-stone-100 text-[0.9em] font-thin">
          {openFilters(categories)}
        </ul>
      )}
    </div>
  );
}
