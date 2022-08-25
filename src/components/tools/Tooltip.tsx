import React, { useState } from "react";
import { TooltipOptions, TooltipType } from "./settings";
import "./tooltip.scss";

interface Props {
  label?: React.ReactNode;
  content?: React.ReactNode;
  type: TooltipType;
  id?: string;
  options?: TooltipOptions;
}

const Tooltip: React.FC<Props> = ({ label, content, type, id, options }) => {
  const [visible, setVisible] = useState(false);
  let tooltipClass = "tooltip" as string;

  switch (type) {
    case TooltipType.RIGHT:
      tooltipClass += " right";
      break;
    case TooltipType.LEFT:
      tooltipClass += " left";
      break;
    case TooltipType.BOTTOM:
      tooltipClass += " bottom";
      break;
    default:
      tooltipClass += " top";
      break;
  }

  if (options?.fillBgColorMode) {
    tooltipClass += " fill-color-mode";
  }

  return (
    <div
      id={id}
      className="tooltip-container"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {label}
      {visible ? <div className={tooltipClass}>{content}</div> : ""}
    </div>
  );
};

export default Tooltip;
