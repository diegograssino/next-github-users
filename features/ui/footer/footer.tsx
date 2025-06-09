import Container from "../container/container";
import Typography from "../typography/typography";
import styles from "./footer.module.css";

const Footer = () => {
  const { footer, footer__container, footer__highlighted } = styles;

  return (
    <footer className={footer} data-testid="footer">
      <Container>
        <div className={footer__container}>
          <Typography as="h2" size="lg" variant="primary" weight="bold">
            Github <span className={footer__highlighted}>Users</span>
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
