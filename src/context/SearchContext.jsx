import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

// allows the user to search for a product from all pages
export function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
