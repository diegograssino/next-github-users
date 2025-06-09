"use client";
import Typography from "@/features/ui/typography/typography";
import { FavsContext } from "@/features/users/contexts/favs-context";
import { fetchUser } from "@/features/users/services";
import CardGrid, {
  CardGridSkeleton,
} from "@/features/users/ui/card-grid/card-grid";
import Card from "@/features/users/ui/card/card";
import SortButton from "@/features/users/ui/sort-button/sort-button";
import { useQueries } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export default function Favs() {
  const { favs } = useContext(FavsContext);

  const isMobile = useMediaQuery("(max-width: 30rem)");
  const isTablet = useMediaQuery("(max-width: 48rem)");
  const perPage = isMobile ? "6" : isTablet ? "12" : "15";

  const [sortOrder, setSortOrder] = useState(true);

  const users = useQueries({
    queries: favs.map((id) => ({
      queryKey: ["user", id],
      queryFn: () => fetchUser(id),
    })),
  });

  if (favs.length === 0) {
    return (
      <Typography weight="bold" size="xl" as="h2">
        No favs!
      </Typography>
    );
  }

  const isLoading = users.some((user) => user.isLoading);
  if (isLoading) return <CardGridSkeleton cards={Number(perPage)} />;

  const isError = users.some((user) => user.isError);
  if (isError)
    return (
      <Typography weight="bold" size="xl" as="h2">
        An error has occurred while fetching users. Try again later.
      </Typography>
    );

  const loadedUsers = users.map((user) => user.data).filter(Boolean);

  const sortedUsers = [...loadedUsers].sort((a, b) =>
    sortOrder ? a.login.localeCompare(b.login) : b.login.localeCompare(a.login)
  );

  const handleSort = () => setSortOrder((prev) => !prev);

  return (
    <>
      <SortButton onSort={handleSort} sortOrder={sortOrder} />
      <CardGrid>
        {sortedUsers.map((user, i) => (
          <Card key={user.login + i} user={user} />
        ))}
      </CardGrid>
    </>
  );
}
