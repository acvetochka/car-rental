import styled from '@emotion/styled';
import { BiHeart, BiSolidHeart } from 'react-icons/bi';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  border-radius: 14px;
  width: 274px;
  height: 268px;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  transition: transform 500ms ease-in-out, box-shadow 500ms ease-in-out;
  cursor: pointer;
  margin-bottom: 14px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 1px 10px black;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    );
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 500ms ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;

export const Icon = styled(BiHeart)`
  fill: #ffffff;
  width: 100%;
  height: 100%;
`;

export const IconFavorite = styled(BiSolidHeart)`
  fill: var(--accent-color);
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--primary-color);
`;

export const Span = styled.span`
  color: var(--accent-color);
`;

export const Details = styled.p`
  color: var(--secondary-color);
  font-size: 12px;
  line-height: 1.5;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 90%;
  text-align: left;
`;

export const Separator = styled.span`
  color: var(--separator-color);
`;
