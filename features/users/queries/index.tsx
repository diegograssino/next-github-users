import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services";

export const useInfiniteUsers = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    initialPageParam: "0",
    getNextPageParam: (lastPage) => lastPage.nextSince,
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
