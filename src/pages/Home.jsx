import Navbar from "../components/Navbar.jsx";
import FiltersBar from "../components/FiltersBar.jsx";
import ProductCard from "../components/ProductCard.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
function Home() {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/products_data.json");
        const data = await response.json();
        setProducts(data);
        setProductCategories(["All", ...new Set(data.map((p) => p.category))]);
        setSelectedCategory();
      } catch (error) {
        console.log("Error white fetching data: ", error);
      }
    }
    fetchProducts();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredProducts =
    selectedCategory && selectedCategory !== "All"
      ? products.filter((p) => p.category === selectedCategory)
      : products;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Navbar />
        <PromoBanner headingLevel={"h2"} />
        <FiltersBar
          categories={productCategories}
          onSelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <div className="grid grid-flow-row grid-cols-2 gap-x-1">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      <button
        className="self-center hover:cursor-pointer bg-cyan-700 hover:bg-cyan-900 w-full text-neutral-100 p-2"
        onClick={scrollToTop}
      >
        {" "}
        Back to Top <FontAwesomeIcon icon={faArrowUp} />
      </button>
      <Footer />
    </div>
  );
}

export default Home;
