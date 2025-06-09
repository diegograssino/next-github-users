import { usersMock } from "@/__mocks__/users";
import CardGrid from "@/features/users/ui/card-grid/card-grid";
import Card from "@/features/users/ui/card/card";

const Home = () => {
  return (
    <>
      <CardGrid>
        {usersMock.map((user, i) => (
          <Card key={i} user={user} />
        ))}
      </CardGrid>
    </>
  );
};

export default Home;
