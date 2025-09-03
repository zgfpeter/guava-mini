import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function FiltersBar() {
  return (
    <div className="p-5 flex gap-2">
      <i className="">
        <FontAwesomeIcon icon={faFilter} />
      </i>
      FILTER AND ORDER
    </div>
  );
}
