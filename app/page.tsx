"use client";
import Typography from "@/features/ui/typography/typography";
import useInfiniteUsers from "@/features/users/queries";
import CardGrid, {
  CardGridSkeleton,
} from "@/features/users/ui/card-grid/card-grid";
import Card from "@/features/users/ui/card/card";
import SearchInput from "@/features/users/ui/search-input/search-input";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDebounceValue, useMediaQuery } from "usehooks-ts";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch] = useDebounceValue(searchTerm, 1000);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMobile = useMediaQuery("(max-width: 30rem)");
  const isTablet = useMediaQuery("(max-width: 48rem)");
  const perPage = isMobile ? "6" : isTablet ? "12" : "15";

  const {
    data: users,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteUsers(debouncedSearch, perPage);

  if (error)
    return (
      <Typography weight="bold" size="xl" as="h2">
        An error has occurred while fetching users. Try again later.
      </Typography>
    );

  return (
    <>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
        placeholder="Search users..."
      />
      {isFetching && !users ? (
        isClient ? (
          <CardGridSkeleton cards={Number(perPage)} />
        ) : null
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={() => hasNextPage && !isFetching && fetchNextPage()}
          hasMore={hasNextPage}
          loader={
            <CardGridSkeleton cards={Number(perPage)} key="card-skeleton" />
          }
        >
          <CardGrid>
            {users?.pages
              .map((page) => page.users)
              .flat()
              .map((user, i) => (
                <Card key={user.id ?? i} user={user} />
              ))}
          </CardGrid>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Home;
