import { ContainerProps } from "@/types";
import styles from "./container.module.css";

const Container = ({
  children,
  as: Tag = "div",
  ...otherProps
}: ContainerProps) => {
  return (
    <Tag {...otherProps} className={styles.container}>
      {children}
    </Tag>
  );
};

export default Container;
