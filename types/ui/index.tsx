import { ElementType, HTMLAttributes } from "react";

export interface ContainerProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}
