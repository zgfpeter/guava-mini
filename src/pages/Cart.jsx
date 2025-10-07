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
import { useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useLocalStorage("cart", []);

  //const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);
  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * (product.quantity || 1),
    0
  );

  useEffect(() => {
    localStorage.setItem("cartTotal", totalPrice);
  }, [totalPrice]);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const formatPrice = (value) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);

  return (
    <div>
      <Header />

      <main className="min-h-[50vh] max-w-3xl p-5 md:flex md:flex-col md:items-center mx-auto">
        <h1 id="cart-heading" tabIndex="-1" className="mb-5 text-2xl font-bold">
          Cart ({cart.length})
        </h1>

        {cart.length > 0 ? (
          <section className="grid w-full gap-5">
            {cart.map((product) => (
              <article
                key={product.id}
                className="relative flex gap-5 p-3 border rounded-t border-zinc-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-[160px] h-[200px] object-cover"
                />
                <div className="flex flex-col justify-between">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  {product.size && (
                    <p className="text-sm text-stone-500">
                      Size: {product.size}
                    </p>
                  )}
                  <p className="font-bold">{formatPrice(product.price)}</p>
                </div>
                <button
                  className="absolute top-0 right-0 p-2"
                  onClick={() => removeFromCart(product.id)}
                >
                  <span className="sr-only">
                    Remove {product.title} from cart
                  </span>
                  <FontAwesomeIcon
                    icon={faX}
                    className="text-red-500 transition duration-300 hover:text-red-700"
                  />
                </button>
              </article>
            ))}

            <section className="grid gap-2 p-3 mt-10 border rounded-b border-zinc-300">
              <h2 className="sr-only">Order Summary</h2>
              <p className="flex justify-between text-sm">
                Price <span>{formatPrice(totalPrice)}</span>
              </p>
              <p className="flex justify-between text-sm font-thin text-rose-500">
                Discount <span>{formatPrice(0)}</span>
              </p>
              <p className="flex justify-between text-sm">
                Delivery <span>Free</span>
              </p>
              <div className="flex justify-between mt-5 text-lg font-bold">
                <h3>TOTAL</h3>
                <p>{formatPrice(totalPrice)}</p>
              </div>
              <p className="text-sm text-stone-600">Taxes included</p>

              <Link
                to="/deliveryDetails"
                className="flex items-center justify-center gap-2 p-3 text-white rounded bg-rose-700 hover:bg-rose-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
              >
                CHECKOUT
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </section>
          </section>
        ) : (
          <div className="p-10 mb-10 text-center text-rose-500">
            Your cart is empty
          </div>
        )}

        <Link
          to="/home"
          className="flex items-center gap-2 mt-5 text-emerald-700 hover:underline"
        >
          <FontAwesomeIcon icon={faArrowLeft} /> Continue shopping
        </Link>
      </main>

      <Footer />
    </div>
  );
}
