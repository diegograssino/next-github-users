"use client";
import { FavsContext } from "@/features/users/contexts/favs-context";
import { useContext } from "react";
import Anchor from "../anchor/anchor";

const FavsAnchor = () => {
  const { favs } = useContext(FavsContext);

  return (
    <Anchor variant="primary" href="./favs">
      Favs ({favs.length})
    </Anchor>
  );
};

export default FavsAnchor;
