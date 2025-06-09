import Icon from "@/features/ui/icon/icon";
import Typography from "@/features/ui/typography/typography";
import { CardProps } from "@/types";
import Image from "next/image";
import styles from "./card.module.css";

const Card = ({ user }: CardProps) => {
  return (
    <article className={styles["card"]} data-testid="card">
      <Image
        className={styles["card__image"]}
        src={user.avatar_url}
        alt={user.login}
        width={150}
        height={150}
      />
      <div className={styles["card__content"]}>
        <Typography as="h3" weight="bold" size="md">
          {user.login}
        </Typography>
      </div>
      <div className={styles["card__options"]}>
        <Icon name="star-empty" variant="accent" />
      </div>
    </article>
  );
};

export default Card;
