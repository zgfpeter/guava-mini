import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({
  id,
  title,
  price,
  description,
  category,
  image,
}) {
  return (
    <div className="flex flex-col gap-y-2 gap-x-3">
      <img
        className="w-full object-fit"
        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
        alt="white instant print polaroid camera"
      />
      <div className="grid">
        <div className="flex truncate items-center place-content-between p-2">
          <h2 className="truncate">{title}</h2>
          <div className="flex items-center align-center gap-2 pl-3 pr-2">
            <div className="bg-zinc-500 w-3 h-3 border-1"></div>
            <p className="">+2</p>
          </div>
        </div>
        <p className="w-full p-2">€ {price}</p>
        <button className="pr-5 justify-self-start pl-3 pt-2 pb-2 text-cyan-700 text-lg mb-2 hover:text-teal-600 hover:cursor-pointer">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
}
