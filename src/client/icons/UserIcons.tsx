import React from "react";
import { IconComponentProps } from "./shared/IconComponent";
import { fontAwesomeZoomClass } from "./shared/utils";


export const UserIcons = {
  SolidUser: (props: IconComponentProps): JSX.Element => <i className={`${fontAwesomeZoomClass(props.zoom)} fa-solid fa-user`} />,
  LivingIcecream: (props: IconComponentProps): JSX.Element => <i className={`${fontAwesomeZoomClass(props.zoom)} fa-solid fa-poo`} />,
  Ninja: (props: IconComponentProps): JSX.Element => <i className={`${fontAwesomeZoomClass(props.zoom)} fa-solid fa-user-ninja`} />,
  // <i className="fa-brands fa-github-square" />
};
