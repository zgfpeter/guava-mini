import Navbar from "../components/Header.jsx";
import FiltersBar from "../components/FiltersBar.jsx";
import ProductCard from "../components/ProductCard.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer.jsx";
import { useEffect, useState, useMemo } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/products_data.json");
        // test skeleton cards
        // await new Promise((resolve) => setTimeout(resolve, 2000));
        const data = await response.json();
        setProducts(data);
        setProductCategories(["All", ...new Set(data.map((p) => p.category))]);
      } catch (error) {
        console.log("Error while fetching data: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //memoization = speeds up the function by storig the results in a cache and
  // reusing them when the same inputs occur again
  // instead of recomputing, checks cache first for the given arguments
  const filteredProducts = useMemo(() => {
    return selectedCategory !== "All"
      ? products.filter((p) => p.category === selectedCategory)
      : products;
  }, [products, selectedCategory]);

  // placeholder cards
  const SkeletonCard = () => (
    <div className="bg-gray-200 animate-pulse rounded-lg h-60 w-full"></div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Navbar />
        <PromoBanner headingLevel="h2" bg_color="bg-rose-700" />
        <FiltersBar
          categories={productCategories}
          onSelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {loading
            ? Array.from({ length: 8 }).map((_, idx) => (
                <SkeletonCard key={idx} />
              ))
            : filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
        </div>
      </main>

      {showScroll && (
        <button
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 rounded-full bg-cyan-700 hover:bg-cyan-900 hover:cursor-pointer text-white p-3 shadow-lg"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}

      <Footer />
    </div>
  );
}
