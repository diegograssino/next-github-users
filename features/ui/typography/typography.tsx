import { TypographyProps } from "@/types";
import clsx from "clsx";
import styles from "./typography.module.css";

const { typography, typographyInverse, ellipsis } = styles;

const Typography = ({
  children,
  as: Tag = "p",
  weight = "normal",
  size = "md",
  hasEllipsis = false,
  hasInverseColors = false,
  ...otherProps
}: TypographyProps) => {
  return (
    <Tag
      {...otherProps}
      className={clsx(
        hasInverseColors ? typography : typographyInverse,
        styles[weight],
        styles[size],
        hasEllipsis && ellipsis
      )}
    >
      {children}
    </Tag>
  );
};
export default Typography;
