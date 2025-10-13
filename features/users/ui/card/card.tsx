import Typography from "@/features/ui/typography/typography";
import { CardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import FavsWidget from "../favs-widget/favs-widget";
import styles from "./card.module.css";

const Card = ({ user }: CardProps) => {
  // TODO Add more info to the card
  // TODO Improve card design
  // TODO The image should have a placeholder and a better loading strategy

  return (
    <Link href={`/${user.id}`} data-testid="card">
      <article className={styles["card"]}>
        <Image
          src={user.avatar_url}
          alt={user.login}
          width={150}
          height={150}
          priority
        />
        <div className={styles["card__content"]}>
          <Typography as="h3" weight="bold" size="lg" hasEllipsis>
            {user.login}
          </Typography>
        </div>
        <div className={styles["card__options"]}>
          <FavsWidget id={user.id} />
        </div>
      </article>
    </Link>
  );
};

export default Card;
