import Container from "../container/container";
import Typography from "../typography/typography";
import styles from "./footer.module.css";

const { footer, footerContainer, footerHighlighted } = styles;

const Footer = () => {
  return (
    <footer className={footer} data-testid="footer">
      <Container>
        <div className={footerContainer}>
          <Typography as="h2" size="lg" weight="bold">
            Github <span className={footerHighlighted}>Users</span>
          </Typography>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
