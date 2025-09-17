import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  colors,
  image,
}) {
  return (
    <div>
      <Link to={`/product/${id}`} className="flex flex-col gap-y-2 gap-x-3">
        <img
          className="w-full h-48 object-cover object-top"
          src={image}
          alt={description}
        />
        <div className="grid">
          <div className="flex truncate items-center place-content-between p-2">
            <h2 className="truncate">{title}</h2>
            {colors.length > 1 && (
              <div className="flex items-center align-center gap-2 pl-3 pr-2">
                <div className="w-4 h-4 border-[0.2px] bg-cyan-800"></div>
                <div className="w-5 h-5 flex items-center justify-center text-xs">
                  +{colors.length - 1}
                </div>
              </div>
            )}
          </div>
          <p className="w-full p-2">€ {price}</p>

          <button className="pr-5 justify-self-start pl-3 pt-2 pb-2 text-cyan-700 text-lg mb-2 hover:text-teal-600 hover:cursor-pointer">
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </Link>
    </div>
  );
}
