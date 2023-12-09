import { ObjectIcons } from "./ObjectIcons";
import { UserIcons } from "./UserIcons";
import { IconComponent } from "./shared/IconComponent";

const AllIcons = {
  ...UserIcons, ...ObjectIcons
};

export const RenderIcon = (icon: keyof typeof AllIcons): IconComponent => AllIcons[icon];
export type Icon = keyof typeof AllIcons
