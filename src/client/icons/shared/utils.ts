import { IconComponentProps } from "./IconComponent";

export const fontAwesomeZoomClass = (zoom: IconComponentProps["zoom"]): string => zoom == "1x" ? "" : zoom == "2x" ? "fa-2x" : "fa-3x";
