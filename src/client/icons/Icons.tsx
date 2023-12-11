import { ObjectIcons } from "./ObjectIcons";
import { UserIcons } from "./UserIcons";
import { IconComponentType, IconComponentProps } from "./shared/IconComponent";

const AllIcons = {
  ...UserIcons, ...ObjectIcons
};

export const RenderIcon = (icon: keyof typeof AllIcons): IconComponentType => AllIcons[icon];
export type Icon = keyof typeof AllIcons

export const IconComponent = (props:{ icon: keyof typeof AllIcons } & IconComponentProps) : JSX.Element =>
  RenderIcon(props.icon)(props)
