import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { tablet, max } from 'styles/media';

export const Container = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 1px solid #dce3e5cc;
  border-radius: 24px;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  z-index: 1000;
  ${max(500)} {
    width: 90%;
    top: 10px;
  }
  ${max(tablet)} {
    top: 20px;
    overflow-y: auto;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #12141780;
  z-index: 999;
`;

export const Content = styled.div`
  background-color: var(--bg-color);
  width: 541px;
  padding: 20px;
  border-radius: 5px;

  ${max(tablet)} {
    overflow-y: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 24px;
  padding: 0;
  transition: color 500px ease-in-out;

  :hover {
    color: var(--accent-color);
  }

  ${max(500)} {
    top: 4px;
    right: 4px;
  }
`;

