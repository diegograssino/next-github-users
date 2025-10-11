import UserDetail from "@/features/users/ui/userDetail/user-detail";
import { UserDetailProps } from "@/types";

const userDetailPage = ({ user, repos }: UserDetailProps) => {
  return <UserDetail user={user} repos={repos} />;
};

export default userDetailPage;
