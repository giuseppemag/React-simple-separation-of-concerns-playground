import React from "react";
import { IconComponentProps } from "./shared/IconComponent";
import { fontAwesomeZoomClass } from "./shared/utils";



export const ObjectIcons = {
  Bed: (props: IconComponentProps): JSX.Element => <i className={`${fontAwesomeZoomClass(props.zoom)} fa-solid fa-bed`} />,
  Trash: (props: IconComponentProps): JSX.Element => <i className={`${fontAwesomeZoomClass(props.zoom)} fa-solid fa-trash`} />,
  Car: (props: IconComponentProps): JSX.Element => <i className={`${fontAwesomeZoomClass(props.zoom)} fa-solid fa-car`} />,
};
