import { TypographyProps } from "@/types";
import styles from "./typography.module.css";

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
      className={`${
        hasInverseColors ? styles.typography : styles["typography-inverse"]
      } ${styles[weight]} ${styles[size]} ${
        hasEllipsis ? styles.ellipsis : ""
      }`}
    >
      {children}
    </Tag>
  );
};
export default Typography;
