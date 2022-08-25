import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./spinner.scss";

const Spinner = () => {
  return <FontAwesomeIcon className="spinner" icon={faSpinner} size="lg" />;
};

export default Spinner;
