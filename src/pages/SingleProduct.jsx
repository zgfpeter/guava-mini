import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faA, faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "../components/useLocalStorage";
import { Link } from "react-router-dom";
export default function SingleProduct({}) {
  const [showDetails, setShowDetails] = useState(false);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart, setCart] = useLocalStorage("cart", []);
  const [added, setAdded] = useState(false);
  const [openSizes, setOpenSizes] = useState(false);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [shareOpen, setShareOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const productUrl = product
    ? `${window.location.origin}/product/${product.id}`
    : "";

  useEffect(() => {
    async function fetchProduct() {
      try {
        window.scrollTo(0, 0);
        const response = await fetch("/products_data.json");
        const data = await response.json();
        const found = data.find((p) => String(p.id) === id);
        //exclude current product from similar products
        const similar = data.filter(
          (p) => String(p.category) === found.category && String(p.id) !== id
        );

        setProduct(found);
        setSimilarProducts(similar);
      } catch (err) {
        console.log("Error fetching product");
      }
    }
    fetchProduct();
  }, [id]);

  const addToCart = () => {
    //check if product is already in cart
    //const exists = cart.find((item) => item.id === product.id);
    setOpenSizes((prev) => !prev);
  };

  const confirmAddToCart = (size) => {
    const productWithSize = { ...product, size };
    setCart([...cart, productWithSize]);

    setAdded(true);
    setOpenSizes(false);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const showProductDetails = () => {
    setShowDetails((prev) => !prev);
  };

  //product hasn't loaded yet...
  if (!product) {
    return (
      <div>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <p>Loading product...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="min-h-auto w-full ">
        <article className="relative md:flex md:mb-20">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover md:w-[50%]"
          />
          <div className="relative flex flex-col md:w-full md:px-10">
            <p className="self-end mr-5 mt-5">{product.colors[0]}</p>
            <p className="pl-3 pb-3 text-stone-600 text-xs">
              {product.category}
            </p>
            <h1 className="pl-3 pb-3">{product.title}</h1>
            <p className="pl-3 pb-3 mb-5">€ {product.price}</p>

            {openSizes && (
              <div className="absolute flex flex-col items-center justify-center w-full bg-neutral-50 h-auto min-h-100 left-0 bottom-0">
                <h2 className="mb-5 text-gray-600 text-xs">
                  Please select your size
                </h2>
                <ul className="flex align-self-center flex-col gap-3">
                  {product.sizes.map((size) => (
                    <li
                      key={size}
                      onClick={() => confirmAddToCart(size)}
                      className="border border-stone-200 w-100 p-2 hover:cursor-pointer hover:bg-stone-200 text-center"
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              onClick={addToCart}
              disabled={added}
              className={`w-full mb-10 p-3 text-white hover:cursor-pointer 
    ${added ? "bg-orange-700" : "bg-teal-800 hover:bg-teal-900"}`}
            >
              {added ? "Added to cart" : "Add"}
            </button>

            <div className="px-10 py-3 flex place-content-between items-center">
              <div className="relative w-full">
                <button
                  className="hover:cursor-pointer underline"
                  onClick={showProductDetails}
                >
                  {showDetails ? "Hide Details" : "Show Details"}
                </button>
                {showDetails && (
                  <div className="absolute bg-stone-50  z-20 py-5 px-3 mt-5  border border-stone-300 text-stone-700 text-[0.9em]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Illum veritatis voluptate earum natus mollitia excepturi
                    maxime deserunt incidunt modi cum!
                  </div>
                )}
              </div>
              <div>
                <button
                  aria-label="Share product"
                  //className="pl-3 mt-5 pb-3 flex items-center gap-1 hover:cursor-pointer"
                  onClick={() => setShareOpen(true)}
                >
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  Share
                </button>
                {shareOpen && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="bg-white p-5 rounded-lg shadow-lg w-80">
                      <h2 className="text-lg mb-3 font-semibold">
                        Share this product
                      </h2>
                      <input
                        type="text"
                        value={productUrl}
                        readOnly
                        className="w-full border px-2 py-1 text-sm rounded mb-3 bg-stone-100"
                      />
                      <div className="flex justify-between gap-3">
                        <button
                          aria-label="Share this product"
                          onClick={() => {
                            navigator.clipboard.writeText(productUrl);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000); // revert after 2 seconds
                          }}
                          className="flex-1 p-2 bg-teal-700 text-white rounded hover:bg-teal-800"
                        >
                          {copied ? "Copied!" : "Copy Link"}
                        </button>
                        <button
                          aria-label="Close share window"
                          onClick={() => setShareOpen(false)}
                          className="flex-1 p-2 bg-stone-300 rounded hover:bg-stone-400"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </article>
        <section className="my-20 overflow-x-auto md:my-0">
          {similarProducts && similarProducts.length > 0 && (
            <section>
              <h2 className="text-center mb-10 text-xs">SIMILAR PRODUCTS</h2>
              <ul className="flex w-max gap-2">
                {similarProducts.map((p, i) => (
                  <li
                    key={i}
                    className="relative h-50 w-50 flex-shrink-0 overflow-hidden"
                  >
                    <Link>
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-emerald-800 opacity-0 hover:opacity-30 transition-opacity hover:cursor-pointer "></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
