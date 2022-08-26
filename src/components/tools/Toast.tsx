import {
  faCheck,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastType } from "./settings";
import "./toast.scss";

interface Props {
  content?: React.ReactNode;
  type?: ToastType;
}

const Toast: React.FC<Props> = ({ content, type }) => {
  const icon =
    type && type == ToastType.ERROR ? faExclamationTriangle : faCheck;
  const toastTypeClass = type && type == ToastType.ERROR ? "error" : "success";
  const toasClassName = `toast-container ${toastTypeClass}`;

  return (
    <div className={toasClassName}>
      <div className="toast-container-inner">
        <div className="toas-content">
          <FontAwesomeIcon className="toas-mgs-icon" icon={icon} size="lg" />
          {content ? content : ""}
        </div>
      </div>
    </div>
  );
};

export default Toast;
