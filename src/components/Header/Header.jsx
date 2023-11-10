import { motion } from 'framer-motion';

import carLogo from 'assets/rental-car-logo.png';
import { HeaderStyles, Link, Logo, LogoImg, Navi } from './Header.styled';
// import { useEffect, useRef } from 'react';
// import { useSpring, animated } from 'react-spring';

const Header = () => {
  // const logoRef = useRef(null);

  // useEffect(() => {
  //   const logo = logoRef.current;

  //   if (logo) {
  //     // Додаємо клас для зміни позиції логотипу
  //     logo.classList.add('animate-logo');

  //     // При необхідності видаліть клас після закінчення анімації
  //     const handleAnimationEnd = () => {
  //       logo.classList.remove('animate-logo');
  //     };

  //     logo.addEventListener('animationend', handleAnimationEnd);

  //     return () => {
  //       // Прибираємо слухача події при видаленні компонента
  //       logo.removeEventListener('animationend', handleAnimationEnd);
  //     };
  //   }
  // }, []);

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
            // style={animationProps}
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
