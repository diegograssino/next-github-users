import Link from "next/link";
import Container from "../container/container";
import FavsAnchor from "../favs-anchor/favs-anchor";
import Typography from "../typography/typography";
import styles from "./header.module.css";

const { navbar, navbarContainer, navbarHighlighted } = styles;

const Header = () => {
  return (
    <header className={navbar} data-testid="header">
      <Container>
        <nav className={navbarContainer}>
          <Link href="/">
            <Typography as="h1" size="lg" weight="bold">
              Github <span className={navbarHighlighted}>Users</span>
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
