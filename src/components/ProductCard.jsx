import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProductImage from "./ProductImage";
export default function ProductCard({
  id,
  title,
  price,
  colors,
  image,
  eager,
}) {
  const formatPrice = (value) =>
    new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  return (
    <section>
      <Link to={`/product/${id}`} className="flex flex-col gap-y-2 h-full">
        <div className="w-full aspect-square overflow-hidden rounded">
          <ProductImage src={image} alt={title} eager={eager} />
        </div>

        <div className="grid">
          <div className="flex truncate items-center place-content-between p-2">
            <h2 className="truncate">{title}</h2>
            {colors.length > 1 && (
              <div className="flex items-center gap-2 pl-3 pr-2">
                <div
                  className="w-4 h-4 border-[0.2px]"
                  style={{ backgroundColor: colors[1] }}
                ></div>
                <div className="w-5 h-5 flex items-center justify-center text-xs">
                  +{colors.length - 1}
                </div>
              </div>
            )}
          </div>
          <p className="w-full p-2">{formatPrice(price)}</p>

          <button
            aria-label="Add to cart"
            className="pr-5 justify-self-start pl-3 pt-2 pb-2 text-cyan-700 text-lg mb-2 hover:text-teal-600 hover:cursor-pointer"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </Link>
    </section>
  );
}
