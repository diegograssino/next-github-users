import Container from "../container/container";
import styles from "./footer.module.css";

const Footer = () => {
  const { footer, footer__container } = styles;

  return (
    <footer className={footer} data-testid="footer">
      <Container>
        <div className={footer__container}>Footer</div>
      </Container>
    </footer>
  );
};

export default Footer;
