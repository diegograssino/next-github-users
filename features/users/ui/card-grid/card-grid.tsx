import { CardGridProps, CardGridSkeletonProps } from "@/types";
import styles from "./card-grid.module.css";

export const CardGridSkeleton = ({ cards = 3 }: CardGridSkeletonProps) => {
  return (
    <div className={styles["card-grid"]} data-testid="card-grid-skeleton">
      {Array.from({ length: cards }).map((_, i) => (
        <div
          className={styles["card-grid__skeleton"]}
          key={"card-skeleton-" + i}
        />
      ))}
    </div>
  );
};

const CardGrid = ({ children }: CardGridProps) => {
  return (
    <div data-testid="card-grid" className={styles["card-grid"]}>
      {children}
    </div>
  );
};

export default CardGrid;
