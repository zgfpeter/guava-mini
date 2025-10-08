import { useEffect, useState, useMemo } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { useSearch } from "../context/SearchContext";
import PromoBanner from "../components/PromoBanner.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FiltersBar from "../components/FiltersBar.jsx";

const SkeletonCard = () => (
  <div
    className="w-full bg-gray-200 rounded-lg animate-pulse h-60"
    aria-hidden="true"
  ></div>
);

export default function SearchResults() {
  const { searchTerm } = useSearch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);

  // Load products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `${import.meta.env.BASE_URL}products_data.json`
        );
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // reset number of visible products, otherwise it shows all at once
  useEffect(() => {
    setVisibleCount(12);
  }, [searchTerm, selectedCategory]);

  // get the categories for the filters bar
  // const categories = useMemo(() => {
  //   const unique = ["All"];
  //   products.forEach((p) => {
  //     if (p.category && !unique.includes(p.category)) unique.push(p.category);
  //   });
  //   return unique;
  // }, [products]);

  // looks for the user search term in both title and category (maybe add description?)
  const filteredProducts = useMemo(() => {
    const lowerSearch = searchTerm.trim().toLowerCase();

    return products.filter((p) => {
      const matchesSearch =
        !lowerSearch ||
        (typeof p.title === "string" &&
          p.title.toLowerCase().includes(lowerSearch)) ||
        (typeof p.category === "string" &&
          p.category.toLowerCase().includes(lowerSearch));

      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  // only show 12 at a time
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-5">
        <PromoBanner headingLevel="h2" bgColor="bg-rose-700" />

        {searchTerm.trim() ? (
          <h2 className="p-5">
            Showing results for:{" "}
            <span className="font-bold text-teal-800">{searchTerm}</span>
          </h2>
        ) : (
          <h2 className="p-5">All Products</h2>
        )}

        {/* <FiltersBar
          categories={categories}
          onSelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        /> */}

        {/* products cards */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? Array.from({ length: 12 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : visibleProducts.map((p) => <ProductCard key={p.id} {...p} />)}

          {!loading && filteredProducts.length === 0 && (
            <p className="mt-10 text-center text-gray-600 col-span-full">
              No products found.
            </p>
          )}
        </div>

        {/* load more button */}
        {!loading && visibleCount < filteredProducts.length && (
          <div className="mt-6 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="px-6 py-2 text-white transition-colors bg-teal-700 rounded-lg hover:bg-teal-800"
            >
              Load More
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
