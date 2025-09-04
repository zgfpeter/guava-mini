import Navbar from "../components/Navbar.jsx";
import FiltersBar from "../components/FiltersBar.jsx";
import ProductCard from "../components/ProductCard.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import { useEffect, useState } from "react";
function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("Error white fetching data: ", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="grid">
      <Navbar />
      <PromoBanner headingLevel={"h2"} />
      <FiltersBar />
      <div className="grid grid-flow-row grid-cols-2 gap-x-1">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
