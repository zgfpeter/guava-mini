import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "../components/useLocalStorage";
export default function SingleProduct({}) {
  const [showDetails, setShowDetails] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [added, setAdded] = useState(false);
  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch("/products_data.json");
        const data = await response.json();
        const found = data.find((p) => String(p.id) === id);

        setProduct(found);
      } catch (err) {
        console.log("Error fetching product");
      }
    }
    fetchProduct();
  }, [id]);

  const addToCart = () => {
    //check if product is already in cart
    const exists = cart.find((item) => item.id === product.id);
    // if (exists) {
    //   console.log("product already exists");
    //   return;
    // }

    setCart([...cart, product]);
    //console.log("Cart updated", [...cart, product]);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const showProductDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const similarProducts = () => {};

  //product hasn't loaded yet...
  if (!product) {
    return (
      <div>
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <p>Loading product...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <main className="min-h-screen mb-20">
        <article className="flex flex flex-col aspect-[4/5]">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
          <p className="self-end pr-3 pt-3">{product.colors[0]}</p>
          <p className="pl-3 pb-3 text-stone-600 text-xs">{product.category}</p>
          <h1 className="pl-3 pb-3">{product.title}</h1>
          <p className="pl-3 pb-3">€ {product.price}</p>
          <button
            onClick={addToCart}
            disabled={added}
            className={`w-full mb-10 p-3 text-white hover:cursor-pointer 
    ${added ? "bg-orange-700" : "bg-teal-800 hover:bg-teal-900"}`}
          >
            {added ? "Added to cart" : "Add"}
          </button>

          <p className="pl-3 mb-3"></p>
          <button
            className="pl-3 mb-3 underline self-start hover:cursor-pointer"
            onClick={showProductDetails}
          >
            {" "}
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          {showDetails && (
            <div className="bg-stone-50 h-auto py-5 px-3 border border-stone-300 text-stone-700 text-[0.9em]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
              veritatis voluptate earum natus mollitia excepturi maxime deserunt
              incidunt modi cum!
            </div>
          )}
          <button className="pl-3 mt-5 pb-3 flex items-center gap-1 hover:cursor-pointer">
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
            Share
          </button>
        </article>
        <section className="mt-20">
          <h2 className="text-center p-3">Similar Products</h2>
          <div className="">{similarProducts()}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
