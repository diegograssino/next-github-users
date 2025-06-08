import { ContainerProps } from "@/types";
import styles from "./container.module.css";

const Container = ({
  children,
  as: Tag = "div",
  ...otherProps
}: ContainerProps) => {
  const { container } = styles;

  return (
    <Tag {...otherProps} className={container}>
      {children}
    </Tag>
  );
};

export default Container;
