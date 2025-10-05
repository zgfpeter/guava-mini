// ok
import Header from "../components/Header.jsx";
import FiltersBar from "../components/FiltersBar.jsx";
import ProductCard from "../components/ProductCard.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer.jsx";
import { useEffect, useState, useMemo } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useSearch } from "../context/SearchContext";
// placeholder cards
const SkeletonCard = () => (
  <div
    className="w-full bg-gray-200 rounded-lg animate-pulse h-60"
    aria-hidden="true"
  ></div>
);

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [showScroll, setShowScroll] = useState(false);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useSearch();

  // for the infinity scroll
  // number of products currently visible
  const [visibleCount, setVisibleCount] = useState(12); // initial products to show
  const loadMoreStep = 12; // products to load per click, 2 on small devices, 3 on medium, 4 on large

  // fetch products, so far from local json file
  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log("fetching");
        const response = await fetch(
          `${import.meta.env.BASE_URL}products_data.json`
        );

        if (!response.ok) throw new Error("Network response was not ok"); // Prevents silent failures

        // await new Promise((resolve) => setTimeout(resolve, 2000));
        const data = await response.json();
        setProducts(data);
        setProductCategories(["ALL", ...new Set(data.map((p) => p.category))]);
      } catch (error) {
        console.log("Error while fetching data: ", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // throttling, prevents too many updates per frame.
  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
  // needed for large data, but for small data (<200 items?) React is usually faster /than the memo overhead

  const filteredProducts = useMemo(() => {
    let result =
      selectedCategory !== "ALL"
        ? products.filter((p) => p.category === selectedCategory)
        : products;
    // when searching for products, search both title and description for the term
    if (searchTerm.trim()) {
      result = result.filter((p) => {
        const lowerSearch = searchTerm.toLowerCase();
        return (
          (typeof p.title === "string" &&
            p.title.toLowerCase().includes(lowerSearch)) ||
          (typeof p.category === "string" &&
            p.category.toLowerCase().includes(lowerSearch))
        );
      });
    }

    return result;
  }, [products, selectedCategory, searchTerm]);

  // get only currently visible products
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  // Load more handler
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + loadMoreStep);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PromoBanner bgColor="bg-rose-700" />
        <FiltersBar
          categories={productCategories}
          onSelect={(cat) => {
            setSelectedCategory(cat);
            setVisibleCount(12); // reset visible count when changing category
          }}
          selectedCategory={selectedCategory}
        />
        <div
          role="list"
          aria-live="polite"
          aria-label="Product list"
          className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4"
        >
          {loading && (
            <p className="sr-only" role="status" aria-live="polite">
              Loading products...
            </p>
          )}
          {loading
            ? Array.from({ length: 12 }).map((_, idx) => (
                <SkeletonCard key={idx} role="role" />
              ))
            : visibleProducts.map((product, idx) => (
                <ProductCard
                  role="listitem"
                  key={product.id}
                  {...product}
                  eager={idx === 0}
                />
              ))}

          {!loading && filteredProducts.length === 0 && (
            <p
              className="text-center text-gray-600 col-span-full"
              role="status"
            >
              No products found in this category.
            </p>
          )}
        </div>
        {/*Load more / No more products */}
        {!loading && filteredProducts.length > visibleProducts.length && (
          <div className="flex justify-center">
            <button
              aria-label="Load more products"
              onClick={handleLoadMore}
              className="px-5 py-3 my-20 text-white bg-teal-800 rounded hover:bg-teal-900 hover:cursor-pointer"
            >
              Load more
            </button>
          </div>
        )}

        {/* no more products */}
        {!loading &&
          filteredProducts.length > 0 &&
          filteredProducts.length <= visibleProducts.length && (
            <p className="my-20 text-center text-gray-600" role="status">
              No more products to show.
            </p>
          )}
      </main>

      {/* scroll to top  */}
      {showScroll && (
        <button
          aria-label="Scroll to top"
          className="fixed p-3 text-white rounded-full shadow-lg bottom-5 right-5 bg-cyan-700 hover:bg-cyan-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}

      <Footer />
    </div>
  );
}
