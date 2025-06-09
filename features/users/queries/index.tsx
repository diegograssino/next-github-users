import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services";

export const useInfiniteUsers = (query = "", perPage = "20") => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["users", query, perPage],
    queryFn: ({ pageParam = query ? "1" : "0" }) =>
      fetchUsers({
        perPageParam: perPage,
        pageParam,
        queryParam: query,
      }),
    initialPageParam: query ? "1" : "0",
    getNextPageParam: (lastPage) => lastPage.nextSince,
    staleTime: 1000 * 60,
  });

  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export default useInfiniteUsers;
