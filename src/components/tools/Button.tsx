import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ButtonType, ButtonDefaults, ButtonOptions } from "./settings";
import {
  faInfo
} from "@fortawesome/free-solid-svg-icons";
import './tools.scss';

interface Props {
  label?: string;
  onClick: any;
  icon?: IconProp
  type?: ButtonType,
  options?: ButtonOptions
}

const Button: React.FC<Props> = ({ 
    label,
    onClick, 
    icon,
    type,
    options
  }) => {

  const className = "tools-button" as string; 
  const faIcon = icon ? icon : faInfo;

  const styles = {
    container: {
      margin: options?.margin || ButtonDefaults.MARGIN,
      backgroundColor: options?.background || ButtonDefaults.BACKGROUND,
      color: options?.color || ButtonDefaults.COLOR,
      padding: options?.padding || ButtonDefaults.PADDING,
      border: options?.border || ButtonDefaults.BORDER,
    } as React.CSSProperties,
  };  

  if(type == ButtonType.ICON_ONLY) {
    return (
      <button 
        onClick={onClick}
        className={className}
        style={styles.container}
      >
      <FontAwesomeIcon icon={faIcon} size="lg"/> 
      </button>
    );
  }  
  return (
    <button 
      onClick={onClick}
      className={className}
      style={styles.container}
    >
    {faIcon ? <FontAwesomeIcon icon={faIcon} size="lg"/> : ''}
    <span>{label}</span>
    </button>
  );
}

export default Button;