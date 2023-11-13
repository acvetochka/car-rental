import { useEffect, useState } from 'react';
import { Button } from './ButtonScrollToTop.styled';
import { FaArrowUp } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

const ButtonScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener('scroll', handleScrollButtonVisibility);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonVisibility);
    };
  });

  const toTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence>
      {showButton && (
        <Button
          key="button"
          type="button"
          show={`${showButton}`}
          onClick={toTop}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
          exit={
            !showButton && {
              opacity: 0,
              transform: 'translateY(25px)',
              scale: 0,
            }
          }
        >
          <FaArrowUp />
        </Button>
      )}
    </AnimatePresence>
  );
};

export default ButtonScrollToTop;
