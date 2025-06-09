import Link from "next/link";
import Container from "../container/container";
import FavsAnchor from "../favs-anchor/favs-anchor";
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
              <FavsAnchor />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
