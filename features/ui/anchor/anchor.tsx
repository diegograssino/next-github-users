import { AnchorProps } from "@/types";
import Link from "next/link";
import Typography from "../typography/typography";
import styles from "./anchor.module.css";

const Anchor = ({
  children,
  weight = "normal",
  variant = "secondary",
  size = "md",
  withAccent = true,
  ...otherProps
}: AnchorProps) => {
  return (
    <Link
      {...otherProps}
      className={`${styles["anchor"]} ${
        withAccent ? styles["anchor__with-accent"] : ""
      }`}
    >
      <Typography weight={weight} variant={variant} size={size} as="span">
        {children}
      </Typography>
    </Link>
  );
};

export default Anchor;
