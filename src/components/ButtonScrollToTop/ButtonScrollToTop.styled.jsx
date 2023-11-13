import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: var(--accent-color);
  border-radius: 50%;
  border: none;
  color: var(--invert-color);
  width: 40px;
  height: 40px;
  cursor: pointer;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  box-shadow: inset 0 0 2px 4px #9fb6eb;

  opacity: ${props => (props.show ? 1 : 0)};
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${props => (props.show ? 'translateY(25px)' : 'translateY(0)')};
`;
