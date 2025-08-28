import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChessKnight,
  faCoffee,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function ProductCard() {
  return (
    <div className="flex flex-col items-center justify-center content-center border-1 border-stone-200 rounded-[1vw] gap-5">
      <img
        className=" rounded-tl-[1vw] rounded-tr-[1vw]"
        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
        alt="round white watch with white band"
      />
      <h2 className="font-bold bg-stone-300 w-100 text-center rounded-[1vw] pt-2 pb-2">
        Product
      </h2>
      <p className="w-100 text-center bg-stone-200 rounded-[1vw] pt-2 pb-2">
        Product description
      </p>
      <button className="rounded-[1vw] bg-teal-600 pr-5 pl-5 pt-2 pb-2 font-bold text-stone-100 mb-2">
        Add to Cart
      </button>
    </div>
  );
}
