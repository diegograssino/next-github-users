import Link from "next/link";
import Anchor from "../anchor/anchor";
import Container from "../container/container";
import Typography from "../typography/typography";
import styles from "./header.module.css";

const Header = () => {
  const { navbar, navbar__container, navbar__highlighted } = styles;

  return (
    <header className={navbar} data-testid="header">
      <Container>
        <nav className={navbar__container}>
          <Link href="/">
            <Typography as="h1" size="lg" variant="primary" weight="bold">
              Github <span className={navbar__highlighted}>Users</span>
            </Typography>
          </Link>
          <ul>
            <li>
              <Anchor variant="primary" href="./favs">
                Favs
              </Anchor>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
