import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, useState } from "react";
import "./styles/accordion.scss";

interface Props {
  content?: React.ReactNode;
  label?: string;
}

const Accordion: React.FC<Props> = ({ content, label }) => {
  const [myOpen, setMyOpen] = useState(false);

  const icon = myOpen ? faChevronUp : faChevronDown;
  const accordionClassContent = myOpen
    ? "accordion-content open"
    : "accordion-content";
  const accordionClassInner = myOpen
    ? "accordion-container-inner open"
    : "accordion-container-inner";

  const toggle: MouseEventHandler = (event) => {
    setMyOpen(!myOpen);
  };

  return (
    <div className="accordion-container">
      <div className={accordionClassInner}>
        <button onClick={toggle}>
          <span>{label ? label : label}</span>
          <FontAwesomeIcon className="toggle" icon={icon} size="lg" />
        </button>
        <div className={accordionClassContent}>{content ? content : ""}</div>
      </div>
    </div>
  );
};

export default Accordion;
