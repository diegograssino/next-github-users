import { pageMessages } from "@/features/ui/page-message/page-messages";
import Link from "next/link";
import { ElementType, HTMLAttributes, JSX } from "react";

export type Variants = "primary" | "secondary" | "accent";
export type TypographyColorVariants = "default" | "inverse";
export type TypographyWeightVariants = "normal" | "bold";

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
  size?: Sizes;
  weight?: TypographyWeightVariants;
  truncate?: boolean;
  variant?: TypographyColorVariants;
}

export interface AnchorProps extends React.ComponentProps<typeof Link> {
  variant?: Variants;
  size?: Sizes;
  weight?: "normal" | "bold";
  withAccent?: boolean;
}

export type IconNames =
  | "star-empty"
  | "star"
  | "arrow-right"
  | "search"
  | "spinner";
export interface IconProps {
  name: IconNames;
  size?: Sizes;
  hasInverseColors?: boolean;
  fill?: "accent" | "accent2" | null;
}

export type Icons = {
  [key in IconNames]: JSX.Element;
};

export interface PageMessageProps {
  message: keyof typeof pageMessages;
}
