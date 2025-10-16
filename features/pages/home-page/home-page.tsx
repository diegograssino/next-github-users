"use client";
import PageMessage from "@/features/ui/page-message/page-message";
import useInfiniteUsers from "@/features/users/queries";
import CardGrid from "@/features/users/ui/card-grid/card-grid";
import Card from "@/features/users/ui/card/card";
import SearchInput from "@/features/users/ui/search-input/search-input";
import { HomePageProps } from "@/types";
import { useCallback, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDebounceValue, useMediaQuery } from "usehooks-ts";

const HomePage = ({ initialUsers }: HomePageProps) => {
  // TODO Implement skeletons
  // TODO evaluate moving grid logic or change grid layout to 1 per row to remove it

  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch] = useDebounceValue(searchTerm, 1000);
  const isMobile = useMediaQuery("(max-width: 30rem)");
  const isTablet = useMediaQuery("(max-width: 48rem)");
  // TODO move perPage logics to an utils file
  const perPage = useMemo(() => {
    return isMobile ? "6" : isTablet ? "12" : "15";
  }, [isMobile, isTablet]);
  const { users, isError, isLoading, isNoResults, isMore, handleLoadMore } =
    useInfiniteUsers(debouncedSearch, perPage, initialUsers);
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

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
          threshold={700}
        >
          <CardGrid>
            {users.map((user, i) => (
              <Card key={user.id ?? i} user={user} />
            ))}
          </CardGrid>
        </InfiniteScroll>
      )}
    </>
  );
};

export default HomePage;
