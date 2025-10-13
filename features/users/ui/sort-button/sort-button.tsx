import Typography from "@/features/ui/typography/typography";
import { SortButtonProps } from "@/types";
import styles from "./sort-button.module.css";

const { sortButton } = styles;

const SortButton = ({ sortOrder, onSort }: SortButtonProps) => {
  return (
    <button onClick={onSort} className={sortButton}>
      <Typography size="lg" weight="bold">
        Sort {sortOrder ? "ASC" : "DESC"}
      </Typography>
    </button>
  );
};

export default SortButton;
