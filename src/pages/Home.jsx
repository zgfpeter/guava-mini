import Navbar from "../components/Navbar.jsx";
import FiltersBar from "../components/FiltersBar.jsx";
import ProductCard from "../components/ProductCard.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
function Home() {
  return (
    <div className="grid">
      <Navbar />
      <PromoBanner headingLevel={"h2"} />
      <FiltersBar />
      <div className="grid grid-flow-row grid-cols-2 gap-x-1">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Home;
