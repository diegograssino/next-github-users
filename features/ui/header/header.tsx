import Container from "../container/container";
import Icon from "../icon/icon";
import styles from "./header.module.css";

const Header = () => {
  const { navbar, navbar__container } = styles;

  return (
    <header className={navbar} data-testid="header">
      <Container>
        <nav className={navbar__container}>
          <Icon name="star" />
          <ul>
            <li>Favs</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
