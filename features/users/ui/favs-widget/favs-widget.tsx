"use client";
import Icon from "@/features/ui/icon/icon";
import { CardWidgetProps } from "@/types";
import { useContext } from "react";
import { FavsContext } from "../../contexts/favs-context";

const FavsWidget = ({ id }: CardWidgetProps) => {
  const { checkFav, addFav, removeFav } = useContext(FavsContext);
  const isFav = checkFav(id);

  const handleFav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (checkFav(id)) {
      removeFav(id);
    } else {
      addFav(id);
    }
  };

  return (
    <button onClick={handleFav} data-testid="card-widget">
      <Icon name={isFav ? "star" : "star-empty"} variant="accent" />
    </button>
  );
};

export default FavsWidget;
