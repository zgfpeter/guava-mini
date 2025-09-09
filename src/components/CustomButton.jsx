import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
export default function CustomButton({ text }) {
  return (
    <button className="pt-3 pb-3 pl-4 pr-4 bg-emerald-800 text-white self-center rounded hover:cursor-pointer hover:bg-emerald-900">
      {text} <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
}
