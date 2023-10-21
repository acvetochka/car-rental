import styled from '@emotion/styled';

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border: 1px solid #dce3e5cc;
  border-radius: 24px;
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
  z-index: 1000;
  transition: transform 250ms ease-in-out;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #12141780;
  z-index: 999;
  transition: transform 250ms ease-in-out;
`;

export const Content = styled.div`
  background-color: white;
  width: 541px;
  padding: 20px;
  border-radius: 5px;
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
  transition: color 250px ease-in-out;

  :hover {
    color: var(--accent-color);
  }
`;

