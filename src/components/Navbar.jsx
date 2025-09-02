import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faCoffee,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="bg-white navbar_container flex items-center place-content-around p-5 sticky top-0">
      <div className="flex gap-2 items-center">
        <h1>GUAVA</h1>
        <i className="rounded-md p-1 text-green-700">
          <FontAwesomeIcon icon={faSeedling} />
        </i>
      </div>
      <div className="flex gap-2 items-center">
        <FontAwesomeIcon icon={faSearch} />
        <p className="bg-teal-100 rounded-full pl-3 pr-3 pt-1 pb-1">0</p>
      </div>
    </div>
  );
}
