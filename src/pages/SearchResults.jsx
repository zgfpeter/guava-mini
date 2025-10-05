import { useEffect, useState, useMemo } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { useSearch } from "../context/SearchContext";
import PromoBanner from "../components/PromoBanner.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
// Skeleton placeholder while loading
const SkeletonCard = () => (
  <div
    className="bg-gray-200 animate-pulse rounded-lg h-60 w-full"
    aria-hidden="true"
  ></div>
);

export default function SearchResults() {
  const { searchTerm } = useSearch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load products on mount
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

  // Filter products based on searchTerm (title OR category)
  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) return products;
    const lowerSearch = searchTerm.toLowerCase();
    return products.filter(
      (p) =>
        (typeof p.title === "string" &&
          p.title.toLowerCase().includes(lowerSearch)) ||
        (typeof p.category === "string" &&
          p.category.toLowerCase().includes(lowerSearch))
    );
  }, [products, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-5">
        <PromoBanner headingLevel="h2" bgColor="bg-rose-700" />
        <h2 className=" p-5">
          Showing results for:{" "}
          <span className="text-teal-800 font-bold">{searchTerm}</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading
            ? Array.from({ length: 12 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : filteredProducts.map((p) => <ProductCard key={p.id} {...p} />)}

          {!loading && filteredProducts.length === 0 && (
            <p className="text-center col-span-full text-gray-600 mt-10">
              No products found for "{searchTerm}".
            </p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
