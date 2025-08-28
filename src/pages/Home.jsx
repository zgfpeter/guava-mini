import Navbar from "../components/Navbar.jsx";
import ProductCard from "../components/ProductCard.jsx";
function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-flow-row gap-4 p-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default Home;
