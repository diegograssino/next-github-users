"use client";
import Icon from "@/features/ui/icon/icon";
import { CardWidgetProps } from "@/types";
import { useCallback, useContext, useMemo } from "react";
import { FavsContext } from "../../contexts/favs-context";

const FavsWidget = ({ id }: CardWidgetProps) => {
  const { isFav, addFav, removeFav } = useContext(FavsContext);
  const onFav = useMemo(() => isFav(id), [isFav, id]);

  const handleFav = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (onFav) {
        removeFav(id);
      } else {
        addFav(id);
      }
    },
    [onFav, addFav, removeFav, id]
  );

  return (
    <button onClick={handleFav} data-testid="card-widget">
      <Icon name={onFav ? "star" : "star-empty"} variant="accent" size="lg" />
    </button>
  );
};

export default FavsWidget;
