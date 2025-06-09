"use client";
import Icon from "@/features/ui/icon/icon";
import { CardWidgetProps } from "@/types";
import { useContext } from "react";
import { FavsContext } from "../../contexts/favs-context";

const FavsWidget = ({ id }: CardWidgetProps) => {
  const { checkFav, addFav, removeFav } = useContext(FavsContext);
  const isFav = checkFav(id);

  const handleFav = () => (checkFav(id) ? removeFav(id) : addFav(id));

  return (
    <button onClick={handleFav} data-testid="card-widget">
      <Icon name={isFav ? "star" : "star-empty"} variant="accent" />
    </button>
  );
};

export default FavsWidget;
