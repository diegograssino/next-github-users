import { TypographyProps } from "@/types";
import styles from "./typography.module.css";

const Typography = ({
  children,
  as: Tag = "p",
  weight = "normal",
  variant = "secondary",
  size = "md",
  ...otherProps
}: TypographyProps) => {
  return (
    <Tag
      {...otherProps}
      className={`${styles[Tag]} ${styles[variant]} ${styles[weight]} ${styles[size]}`}
    >
      {children}
    </Tag>
  );
};

export default Typography;
