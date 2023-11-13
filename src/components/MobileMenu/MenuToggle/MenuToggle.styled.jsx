import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Button = styled.button`
  outline: none;
  border: none;
  /* -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none; */
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  color: var(--accent-color);

  &:hover {
    color: var(--accent-hover);
  }
`;

export const Path = styled(motion.path)`
  fill: transparent;
  stroke-width: 3;
  stroke: currentColor;
  stroke-linecap: round;
`;
