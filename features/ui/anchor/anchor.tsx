import { AnchorProps } from "@/types";
import Link from "next/link";
import Typography from "../typography/typography";
import styles from "./anchor.module.css";

const Anchor = ({
  children,
  weight = "normal",
  variant = "secondary",
  size = "md",
  ...otherProps
}: AnchorProps) => {
  return (
    <Link {...otherProps} className={styles["anchor"]}>
      <Typography weight={weight} variant={variant} size={size} as="span">
        {children}
      </Typography>
    </Link>
  );
};

export default Anchor;
