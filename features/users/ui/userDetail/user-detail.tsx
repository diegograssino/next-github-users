import Anchor from "@/features/ui/anchor/anchor";
import Icon from "@/features/ui/icon/icon";
import Typography from "@/features/ui/typography/typography";
import { UserDetailProps } from "@/types";
import Image from "next/image";
import FavsWidget from "../favs-widget/favs-widget";
import styles from "./user-detail.module.css";

const UserDetail = ({ user, repos }: UserDetailProps) => {
  return (
    <article className={styles["detail"]}>
      <div className={styles["detail__info-section"]}>
        <header className={styles["detail__header"]}>
          <Typography weight="bold" size="lg" as="h2">
            {user.login}
          </Typography>
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={300}
            height={300}
          />
          <div>
            <FavsWidget id={user.id} />
          </div>
        </header>
        <div className={styles["detail__info"]}>
          <Typography as="h3" size="md" weight="bold">
            User Details
          </Typography>
          <div className={styles["detail__stats"]}>
            <Typography as="p" size="md">
              Followers: {user.followers}
            </Typography>
            <Typography as="p" size="md">
              Following: {user.following}
            </Typography>
            <Typography as="p" size="md">
              Public Repos: {user.public_repos}
            </Typography>
          </div>
          <div className={styles["detail__bio"]}>
            <Typography as="p" size="md">
              Bio: {user.bio || "No bio available"}
            </Typography>
          </div>
        </div>
      </div>
      <div className={styles["detail__repos"]}>
        <Typography as="h3" size="md" weight="bold">
          Repositories
        </Typography>
        {repos.length > 0 ? (
          <ul className={styles["detail__repos-list"]}>
            {repos.map((repo, i) => (
              <li key={repo.id + i} className={styles["detail__repos-item"]}>
                <Icon name="arrow-right" size="sm" variant="secondary" />
                <Anchor
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </Anchor>
              </li>
            ))}
          </ul>
        ) : (
          <Typography as="p" size="md">
            No repositories found.
          </Typography>
        )}
      </div>
    </article>
  );
};

export default UserDetail;
