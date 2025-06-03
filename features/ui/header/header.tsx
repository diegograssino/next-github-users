import Container from "../container/container";
import styles from "./header.module.css";

const Header = () => {
  const { navbar, navbar__container } = styles;

  return (
    <header className={navbar} data-testid="header">
      <Container>
        <nav className={navbar__container}>Navbar</nav>
      </Container>
    </header>
  );
};

export default Header;
