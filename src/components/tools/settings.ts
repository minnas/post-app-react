export enum ButtonType {
  ICON_ONLY,
  DEFAULT  
};

export type ButtonOptions = {
  margin?: String,
  padding?: String,
  color?: String,
  border?: String,
  background?: String,
  alignSelf?: String;
};

export enum ButtonDefaults{
  COLOR = "#000",
  MARGIN = ".2rem",
  PADDING = "2rem",
  BORDER = "none",
  BACKGROUND = "transparent",
  ALING_SELF = "unset",
  SELECTED = "#93615a"
};

export enum TooltipType {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM
};
 
