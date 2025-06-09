import { CardGridProps } from "@/types";
import styles from "./card-grid.module.css";

const CardGrid = ({ children }: CardGridProps) => {
  return (
    <div data-testid="card-grid" className={styles["card-grid"]}>
      {children}
    </div>
  );
};

export default CardGrid;
