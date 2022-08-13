import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ButtonType, ButtonDefaults, ButtonOptions } from "./settings";
import './button.scss';

interface Props {
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  icon?: IconProp
  type?: ButtonType,
  options?: ButtonOptions,
  id?: string,
  disabled?: boolean
}

const Button: React.FC<Props> = ({ 
    label,
    onClick, 
    icon,
    type,
    options,
    id,
    disabled
  }) => {

  const className = "tools-button" as string; 

  const styles = {
    container: {
      margin: options?.margin || ButtonDefaults.MARGIN,
      backgroundColor: options?.background || ButtonDefaults.BACKGROUND,
      color: options?.color || ButtonDefaults.COLOR,
      padding: options?.padding || ButtonDefaults.PADDING,
      border: options?.border || ButtonDefaults.BORDER,
    } as React.CSSProperties,
  };  
  const onlyIcon = type == ButtonType.ICON_ONLY;

  return (
    <button 
      onClick={onClick}
      className={className}
      style={styles.container}
      id={id}
      disabled={disabled}
    >
    { icon ? <FontAwesomeIcon icon={icon} size="lg"/> : '' }
    { onlyIcon ? '' : <span>{label}</span> }
    </button>
  );
}

export default Button;