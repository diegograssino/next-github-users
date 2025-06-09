import Typography from "@/features/ui/typography/typography";
import { fetchUserDetail } from "@/features/users/services";
import UserDetail from "@/features/users/ui/userDetail/user-detail";

export default async function UserPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const { user, repos } = await fetchUserDetail(Number(id));

  if (!user) {
    return (
      <Typography weight="bold" size="xl" as="h2">
        An error has occurred while fetching users. Try again later.
      </Typography>
    );
  }

  return <UserDetail user={user} repos={repos} />;
}
