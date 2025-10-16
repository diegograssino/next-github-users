import { TypographyProps } from "@/types";
import clsx from "clsx";
import styles from "./typography.module.css";

const { ellipsis } = styles;

const Typography = ({
  children,
  as: Tag = "p",
  weight = "normal",
  size = "md",
  truncate = false,
  variant = "default",
  ...otherProps
}: TypographyProps) => {
  return (
    <Tag
      {...otherProps}
      className={clsx(
        styles[variant],
        styles[weight],
        styles[size],
        truncate && ellipsis
      )}
    >
      {children}
    </Tag>
  );
};
export default Typography;
