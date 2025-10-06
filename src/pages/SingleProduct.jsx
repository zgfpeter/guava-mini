// ok
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "../components/useLocalStorage";
import { Link } from "react-router-dom";
export default function SingleProduct() {
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
    ? `${window.location.origin}${import.meta.env.BASE_URL}#/product/${
        product.id
      }`
    : "";

  // fetch product based on product id
  useEffect(() => {
    async function fetchProduct() {
      try {
        window.scrollTo(0, 0);
        const response = await fetch(
          `${import.meta.env.BASE_URL}products_data.json`
        );

        const data = await response.json();
        const found = data.find((p) => String(p.id) === id);
        // find products in the same category
        // used for similar products
        //exclude current product from similar products
        const similar = data.filter(
          (p) => String(p.category) === found.category && String(p.id) !== id
        );

        setProduct(found);
        setSimilarProducts(similar);
      } catch (err) {
        console.log(`Error ${err} while fetching product`);
      }
    }
    fetchProduct();
  }, [id]);

  // addToCart opens the sizes menu
  const addToCart = () => {
    //check if product is already in cart
    //const exists = cart.find((item) => item.id === product.id);
    setOpenSizes((prev) => !prev);
  };

  // adds a product to card, after size is selected
  const confirmAddToCart = (size) => {
    const productWithSize = { ...product, size };
    setCart([...cart, productWithSize]);

    setAdded(true);
    setOpenSizes(false);

    // shows a message when product added to cart, for 2 secs
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };
  function slugify(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with -
      .replace(/(^-|-$)+/g, ""); // trim - from start/end
  }

  const showProductDetails = () => {
    setShowDetails((prev) => !prev);
  };

  //product hasn't loaded yet...
  if (!product) {
    return (
      <div>
        <Header />
        <main className="flex items-center justify-center min-h-screen">
          <p>Loading product...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className="w-full min-h-auto ">
        <article className="relative md:flex md:mb-20">
          <div className="w-full h-96 md:h-[500px] overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="relative flex flex-col md:place-content-center md:items-center md:w-full md:gap-3">
            <p className="self-end mt-5 mr-5 md:mr-80">{product.colors[0]}</p>
            <p className="pb-3 pl-3 text-xs text-stone-600">
              {product.category}
            </p>
            <h1 className="pb-3 pl-3">{product.title}</h1>
            <p className="pb-3 pl-3 mb-5">€ {product.price}</p>

            {openSizes && (
              <div className="absolute bottom-0 left-0 flex flex-col items-center w-full h-auto p-5 bg-neutral-50 min-h-100 z-25">
                <button
                  onClick={() => setOpenSizes(false)}
                  className="self-start p-2 mt-5 mb-3 ml-20 hover:cursor-pointer hover:underline"
                  aria-label="Close sizes selection"
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> Back
                </button>
                <h2 className="mb-5 text-xs text-gray-600">
                  Please select your size
                </h2>
                <ul className="flex flex-col gap-3 align-self-center">
                  {product.sizes.map((size) => (
                    <li
                      key={size}
                      onClick={() => confirmAddToCart(size)}
                      className="p-2 text-center border border-stone-200 w-100 hover:cursor-pointer hover:bg-stone-200"
                    >
                      {size}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              aria-label="Add to cart"
              onClick={addToCart}
              disabled={added}
              className={`w-full max-w-md self-center rounded md:w-[30%] mb-10 p-3 text-white hover:cursor-pointer 
    ${added ? "bg-emerald-700" : "bg-teal-800 hover:bg-teal-900"}`}
            >
              {added ? "Added to cart" : "Add"}
            </button>

            <div className="flex items-center px-10 py-3 place-content-between md:gap-50">
              <div className="relative w-full min-w-[110px]">
                <button
                  className="underline hover:cursor-pointer"
                  onClick={showProductDetails}
                >
                  {showDetails ? "Hide Details" : "Show Details"}
                </button>
              </div>
              <div>
                <button
                  aria-label="Share product"
                  onClick={() => setShareOpen(true)}
                >
                  <FontAwesomeIcon icon={faArrowUpFromBracket} />
                  Share
                </button>
                {shareOpen && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <div className="p-5 bg-white rounded-lg shadow-lg w-80">
                      <h2 className="mb-3 text-lg font-semibold">
                        Share this product
                      </h2>
                      <input
                        type="text"
                        value={productUrl}
                        readOnly
                        className="w-full px-2 py-1 mb-3 text-sm border rounded bg-stone-100"
                      />
                      <div className="flex justify-between gap-3">
                        <button
                          aria-label="Share this product"
                          onClick={() => {
                            navigator.clipboard.writeText(productUrl);
                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000); // revert after 2 seconds
                          }}
                          className="flex-1 p-2 text-white bg-teal-700 rounded hover:bg-teal-800 hover:cursor-pointer"
                        >
                          {copied ? "Copied!" : "Copy Link"}
                        </button>
                        <button
                          aria-label="Close share window"
                          onClick={() => setShareOpen(false)}
                          className="flex-1 p-2 rounded bg-stone-300 hover:bg-stone-400"
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
        {showDetails && (
          <div className=" bg-stone-50  z-20 p-5 mt-5  border border-stone-300 text-stone-700 text-[0.9em]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
            veritatis voluptate earum natus mollitia excepturi maxime deserunt
            incidunt modi cum! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Autem consequuntur, quidem, nobis cupiditate ullam
            eum voluptas perferendis quaerat necessitatibus quia recusandae non
            excepturi nam quo praesentium nemo optio in? Consequatur?
          </div>
        )}
        <section
          className="my-20 overflow-x-auto md:flex md:place-content-center"
          role="list"
        >
          {similarProducts && similarProducts.length > 0 && (
            <section role="listitem">
              <h2 className="mb-10 text-xs text-center">SIMILAR PRODUCTS</h2>
              <ul className="flex gap-1 w-max">
                {similarProducts.map((p, i) => (
                  <li
                    key={i}
                    className="relative flex-shrink-0 overflow-hidden h-50 w-50"
                  >
                    <Link
                      aria-label={`Go to ${p.title}`}
                      to={`/product/${slugify(p.title)}/${p.id}`}
                    >
                      <div className="overflow-hidden h-50 w-50">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="absolute inset-0 transition-opacity opacity-0 bg-emerald-800 hover:opacity-30 hover:cursor-pointer "></div>
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
