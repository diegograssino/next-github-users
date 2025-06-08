import Link from "next/link";
import { ElementType, HTMLAttributes, JSX } from "react";

export type Variants = "primary" | "secondary";

export type Sizes = "sm" | "md" | "lg" | "xl";
export interface ContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}

type TypographyElements =
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6";
export interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: TypographyElements;
  variant?: Variants;
  size?: Sizes;
  weight?: "normal" | "bold";
}

export interface AnchorProps extends React.ComponentProps<typeof Link> {
  variant?: Variants;
  size?: Sizes;
  weight?: "normal" | "bold";
}

export type IconNames = "star-empty" | "star";
export interface IconProps {
  name: IconNames;
  variant?: Variants;
  size?: Sizes;
}

export type Icons = {
  [key in IconNames]: JSX.Element;
};
