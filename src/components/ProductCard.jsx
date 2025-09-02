import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard() {
  return (
    <div className="grid gap-y-2 gap-x-3">
      <img
        className=""
        src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
        alt="white instant print polaroid camera"
      />
      <div className="grid">
        <div className="flex place-content-between p-2">
          <h2 className="">MadeUp Camera </h2>
          <div className="flex align-center gap-2 pl-2 pr-2">
            <div className="bg-zinc-500 w-3 h-3 self-center border-1"></div>
            <p>+2</p>
          </div>
        </div>
        <p className="w-full p-2">€ 125.90</p>
        <button className="pr-5 justify-self-start pl-5 pt-2 pb-2 text-cyan-700 mb-2 hover:text-teal-600 hover:cursor-pointer">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
}
