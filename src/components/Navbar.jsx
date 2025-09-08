import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faSearch,
  faCartShopping,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="bg-white navbar_container flex items-center place-content-between p-5 sticky top-0">
      <div className="flex gap-2 items-center">
        <a href="/home" className="font-[DM_Serif_Display]">
          G U A V A
        </a>
        <i className="rounded-md p-1 text-green-700">
          <FontAwesomeIcon icon={faSeedling} />
        </i>
      </div>
      <div className="flex gap-3 items-center">
        <i>
          <FontAwesomeIcon icon={faSearch} />
        </i>
        <i>
          <FontAwesomeIcon icon={faUser} />
        </i>
        <i>
          <FontAwesomeIcon icon={faCartShopping} />
        </i>
      </div>
    </div>
  );
}
