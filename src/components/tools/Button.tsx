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
  id?: string
}

const Button: React.FC<Props> = ({ 
    label,
    onClick, 
    icon,
    type,
    options,
    id
  }) => {

  const className = "tools-button" as string; 
  //const faIcon = icon ? icon : faInfo;

  const styles = {
    container: {
      margin: options?.margin || ButtonDefaults.MARGIN,
      backgroundColor: options?.background || ButtonDefaults.BACKGROUND,
      color: options?.color || ButtonDefaults.COLOR,
      padding: options?.padding || ButtonDefaults.PADDING,
      border: options?.border || ButtonDefaults.BORDER,
    } as React.CSSProperties,
  };  

  if(type == ButtonType.ICON_ONLY && icon) {
    return (
      <button 
        onClick={onClick}
        className={className}
        style={styles.container}
        id={id}
      >
      <FontAwesomeIcon icon={icon} size="lg"/> 
      </button>
    );
  }  
  return (
    <button 
      onClick={onClick}
      className={className}
      style={styles.container}
    >
    {icon ? <FontAwesomeIcon icon={icon} size="lg"/> : ''}
    <span>{label}</span>
    </button>
  );
}

export default Button;