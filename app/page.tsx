"use client";
import Typography from "@/features/ui/typography/typography";
import useInfiniteUsers from "@/features/users/queries";
import CardGrid from "@/features/users/ui/card-grid/card-grid";
import Card from "@/features/users/ui/card/card";
import SearchInput from "@/features/users/ui/search-input/search-input";
import React, { useCallback, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDebounceValue, useMediaQuery } from "usehooks-ts";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch] = useDebounceValue(searchTerm, 1000);
  const isMobile = useMediaQuery("(max-width: 30rem)");
  const isTablet = useMediaQuery("(max-width: 48rem)");
  const perPage = useMemo(() => {
    return isMobile ? "6" : isTablet ? "12" : "15";
  }, [isMobile, isTablet]);
  const {
    data: users,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteUsers(debouncedSearch, perPage);
  // TODO move fetching logic to a service and UI to page contents folder on features
  // TODO GLOBAL implement react aria for accessibility

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );
  const handleLoadMore = useCallback(() => {
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetching, fetchNextPage]);
  const flattenedUsers = useMemo(() => {
    return users?.pages.map((page) => page.users).flat() || [];
  }, [users]);

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
        onChange={handleSearchChange}
        autoFocus
        placeholder="Search users..."
      />
      {/* TODO Implement ssr first page */}
      {/* TODO Implement skeletons */}
      <InfiniteScroll
        pageStart={0}
        loadMore={handleLoadMore}
        hasMore={hasNextPage && !isFetching}
      >
        <CardGrid>
          {flattenedUsers.map((user, i) => (
            <Card key={user.id ?? i} user={user} />
          ))}
        </CardGrid>
      </InfiniteScroll>
      {/* )} */}
    </>
  );
};

export default Home;
