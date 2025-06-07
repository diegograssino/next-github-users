import { ElementType, HTMLAttributes, JSX } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

export type IconNames = "star-empty" | "star";

export type Variants = "primary" | "secondary";

export interface IconProps {
  name: IconNames;
  variant?: Variants;
  size?: number;
}

export type Icons = {
  [key in IconNames]: JSX.Element;
};
