import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

import carLogo from 'assets/rental-car-logo.png';
import { HeaderStyles, Logo, LogoImg } from './Header.styled';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <HeaderStyles>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.15 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Logo to="/">
          <LogoImg src={carLogo} alt="logo" width="200" height="80" />
        </Logo>
      </motion.div>
      {isMobile ? <MobileMenu /> : <Navigation />}
    </HeaderStyles>
  );
};

export default Header;
