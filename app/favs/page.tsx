"use client";
import Typography from "@/features/ui/typography/typography";
import { FavsContext } from "@/features/users/contexts/favs-context";
import { fetchUser } from "@/features/users/services";
import CardGrid, {
  CardGridSkeleton,
} from "@/features/users/ui/card-grid/card-grid";
import Card from "@/features/users/ui/card/card";
import { useQueries } from "@tanstack/react-query";
import { useContext } from "react";

export default function Favs() {
  const { favs } = useContext(FavsContext);

  const users = useQueries({
    queries: favs.map((id) => ({
      queryKey: ["user", id],
      queryFn: () => fetchUser(id),
      staleTime: 1000 * 60 * 10,
    })),
  });

  if (favs.length === 0) {
    return (
      <Typography weight="bold" size="xl" as="h2">
        No favs!
      </Typography>
    );
  }

  const isLoading = users.some((q) => q.isLoading);
  if (isLoading) return <CardGridSkeleton />;

  const isError = users.some((q) => q.isError);
  if (isError)
    return (
      <Typography weight="bold" size="xl" as="h2">
        An error has occurred while fetching users. Try again later.
      </Typography>
    );

  return (
    <>
      <CardGrid>
        {users.map((u, i) => {
          const user = u.data;
          if (!user) return null;
          return <Card key={user.login + i} user={user} />;
        })}
      </CardGrid>
    </>
  );
}
