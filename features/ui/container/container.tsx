import { ContainerProps } from "@/types";
import styles from "./container.module.css";

const { container } = styles;

const Container = ({
  children,
  as: Tag = "div",
  ...otherProps
}: ContainerProps) => {
  return (
    <Tag {...otherProps} className={container}>
      {children}
    </Tag>
  );
};

export default Container;
