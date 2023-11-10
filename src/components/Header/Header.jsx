import { motion } from 'framer-motion';

import carLogo from 'assets/rental-car-logo.png';
import { HeaderStyles, Link, Logo, LogoImg, Navi } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyles>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.15 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Logo to="/">
          <LogoImg
            src={carLogo}
            alt="logo"
            width="200"
            height="80"
          />
        </Logo>
      </motion.div>
      <Navi>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/favorites">Favorites</Link>
      </Navi>
    </HeaderStyles>
  );
};

export default Header;
