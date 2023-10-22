import { FooterStyle, Link } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyle>
      <span>Copyright &copy; 2023 | </span>
      <Link
        href="https://github.com/acvetochka"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alona Kuznietsova
      </Link>
    </FooterStyle>
  );
};

export default Footer;
