import Header from "../components/Header";
import Footer from "../components/Footer";
import useLocalStorage from "../components/useLocalStorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faX,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
export default function Cart() {
  const [cart, setCart] = useLocalStorage("cart", []);

  function removeFromCart(id) {
    setCart(
      (prevCart) =>
        prevCart.filter((item) => item.id !== id) && item.size === size
    );
  }
  const formatPrice = (value) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);

  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
  localStorage.setItem("cartTotal", totalPrice);
  //console.log(cart);

  return (
    <div>
      <Header />
      <main className="min-h-[50vh]">
        <h1 className="m-5">Cart ({cart.length})</h1>
        <section className="grid p-5 gap-5">
          {cart.map((product) => (
            <article key={product.id} className="relative flex gap-5">
              <img
                src={product.image}
                alt={product.title}
                className="w-50 h-60 object-cover"
              />
              <div>
                <h2 className="mr-8 mb-3 text-wrap">{product.title}</h2>
                {product.size && (
                  <p className="text-sm text-stone-500 mb-3">
                    Size: {product.size}
                  </p>
                )}
                <p>{formatPrice(product.price)}</p>
              </div>
              <button
                className="absolute right-0 top-0 hover:cursor-pointer"
                onClick={() => removeFromCart(product.id, product.size)}
              >
                <FontAwesomeIcon
                  icon={faX}
                  className="p-2 text-red-500 text-xs hover:text-[1.2em] transition-[font-size] duration-300 ease-in-out"
                />
              </button>
            </article>
          ))}
          {cart.length > 0 ? (
            <section className="grid p-3 mt-10 border border-stone-300 gap-2">
              <p className="flex place-content-between text-[0.85em]">
                Price <span>{formatPrice(totalPrice)} </span>
              </p>
              <p className="text-rose-500 font-thin text-[0.85em] flex place-content-between">
                Discount<span>{formatPrice(0)}</span>
              </p>
              <p className="flex place-content-between text-[0.85em]">
                Delivery <span>Free</span>
              </p>
              <div className="flex place-content-between mt-5 font-bold">
                <h3>TOTAL</h3>
                <p>{formatPrice(totalPrice)}</p>
              </div>
              <p className="text-[0.85em] text-stone-600">Taxes included</p>
              <Link
                to="/deliveryDetails"
                className="flex gap-2 items-center justify-center p-3 text-white mb-5 bg-rose-700 "
              >
                CHECKOUT
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </section>
          ) : (
            <div className="text-rose-500 text-center p-10 mb-10">
              Your cart is empty
            </div>
          )}
          <Link to="/home">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} /> Continue shopping
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
