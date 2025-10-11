import { TypographyProps } from "@/types";
import styles from "./typography.module.css";

const Typography = ({
  children,
  as: Tag = "p",
  weight = "normal",
  variant = "secondary",
  size = "md",
  hasEllipsis = false,
  ...otherProps
}: TypographyProps) => {
  return (
    <Tag
      {...otherProps}
      className={`${styles[variant]} ${styles[weight]} ${styles[size]} ${
        hasEllipsis ? styles.ellipsis : ""
      }`}
    >
      {children}
    </Tag>
  );
};
export default Typography;
