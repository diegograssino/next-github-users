import Typography from "@/features/ui/typography/typography";
import { SortButtonProps } from "@/types";
import styles from "./sort-button.module.css";

const SortButton = ({ sortOrder, onSort }: SortButtonProps) => {
  return (
    <button onClick={onSort} className={styles["sort-button"]}>
      <Typography size="lg" weight="bold">
        Sort {sortOrder ? "ASC" : "DESC"}
      </Typography>
    </button>
  );
};

export default SortButton;
