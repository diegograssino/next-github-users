"use client";
import Typography from "@/features/ui/typography/typography";
import useInfiniteUsers from "@/features/users/queries";
import CardGrid, {
  CardGridSkeleton,
} from "@/features/users/ui/card-grid/card-grid";
import Card from "@/features/users/ui/card/card";
import InfiniteScroll from "react-infinite-scroller";
import { useMediaQuery } from "usehooks-ts";

const Home = () => {
  const {
    data: users,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useInfiniteUsers();

  const isMobile = useMediaQuery("(max-width: 480px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  if (isFetching && !users)
    return <CardGridSkeleton cards={isTablet && !isMobile ? 2 : 3} />;

  if (error)
    return (
      <Typography weight="bold" size="xl" as="h2">
        An error has occurred while fetching users. Ty Again later.
      </Typography>
    );

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => hasNextPage && !isFetching && fetchNextPage()}
        hasMore={hasNextPage}
        loader={
          <CardGridSkeleton
            cards={isTablet && !isMobile ? 2 : 3}
            key="card-skeleton"
          />
        }
      >
        <CardGrid>
          {users?.pages
            .map((page) => page.users)
            .flat()
            .map((user, i) => (
              <Card key={i} user={user} />
            ))}
        </CardGrid>
      </InfiniteScroll>
    </>
  );
};

export default Home;
