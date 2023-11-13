import { useRef } from 'react';
import { AnimatePresence, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle/MenuToggle';
import { useDimensions } from 'helpers/use-dimensios';
import { MobNav } from './MobNav/MobNav';
import { Nav, Wrapper } from './MobileMenu.styled';
import { useEffect } from 'react';

const sidebar = {
  open: (height = 500) => ({
    clipPath: `circle( ${height * 2 + 200}px at 100% 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: (distanceFromRight = 40) => ({
    clipPath: `circle(30px at calc(100% - ${distanceFromRight}px) 40px)`,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  }),
};

const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      <Nav
        key="mobileMenu"
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        exit="closed"
        custom={height}
        ref={containerRef}
        width={isOpen ? '100%' : '80px'}
        height={isOpen ? '100vh' : '80px'}
      >
        <Wrapper className="background" initial={false} variants={sidebar} />
        <MobNav onClose={() => toggleOpen()} />
        <MenuToggle toggle={() => toggleOpen()} />
      </Nav>
    </AnimatePresence>
  );
};

export default MobileMenu;
