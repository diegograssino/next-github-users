import { AnchorProps } from "@/types";
import Link from "next/link";
import Typography from "../typography/typography";
import styles from "./anchor.module.css";

const { anchor } = styles;

const Anchor = ({
  children,
  weight = "normal",
  size = "md",
  ...otherProps
}: AnchorProps) => {
  return (
    <Link {...otherProps} className={anchor}>
      <Typography weight={weight} size={size} as="span">
        {children}
      </Typography>
    </Link>
  );
};

export default Anchor;
