"use client";
import PageMessage from "@/features/ui/page-message/page-message";
import useInfiniteUsers from "@/features/users/queries";
import CardGrid from "@/features/users/ui/card-grid/card-grid";
import Card from "@/features/users/ui/card/card";
import SearchInput from "@/features/users/ui/search-input/search-input";
import React, { useCallback, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDebounceValue, useMediaQuery } from "usehooks-ts";

const Home = () => {
  // TODO GLOBAL implement react aria for accessibility
  // TODO evaluate moving fetching/ grid logic
  // TODO Implement ssr first page
  // TODO Implement skeletons
  // TODO Move page content to a separate component

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch] = useDebounceValue(searchTerm, 1000);
  const isMobile = useMediaQuery("(max-width: 30rem)");
  const isTablet = useMediaQuery("(max-width: 48rem)");
  const perPage = useMemo(() => {
    return isMobile ? "6" : isTablet ? "12" : "15";
  }, [isMobile, isTablet]);
  const {
    data: users,
    error: isError,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteUsers(debouncedSearch, perPage);
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
  const isNoResults = useMemo(() => {
    return flattenedUsers.length === 0 && !isFetching;
  }, [flattenedUsers, isFetching]);
  const isLoading = useMemo(() => {
    return isFetching && flattenedUsers.length === 0;
  }, [isFetching, flattenedUsers]);
  const isMore = useMemo(() => {
    return hasNextPage && !isFetching;
  }, [hasNextPage, isFetching]);

  return (
    <>
      <SearchInput
        value={searchTerm}
        onChange={handleSearchChange}
        autoFocus
        placeholder="Search users..."
      />
      {isError ? (
        <PageMessage message="error" />
      ) : isLoading ? (
        <PageMessage message="loading" />
      ) : isNoResults ? (
        <PageMessage message="noResults" />
      ) : (
        <InfiniteScroll
          pageStart={0}
          loadMore={handleLoadMore}
          hasMore={isMore}
        >
          <CardGrid>
            {flattenedUsers.map((user, i) => (
              <Card key={user.id ?? i} user={user} />
            ))}
          </CardGrid>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Home;
