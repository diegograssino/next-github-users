import HomePage from "@/features/pages/home-page/home-page";
import { fetchUsersAction } from "@/features/users/server/actions";

const Home = async () => {
  // TODO GLOBAL implement react aria for accessibility

  const initialUsers = await fetchUsersAction({
    perPageParam: "15",
    pageParam: "0",
  });
  return <HomePage initialUsers={initialUsers} />;
};

export default Home;
