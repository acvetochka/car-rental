import styled from '@emotion/styled';

export const ModalContent = styled.div`
  padding: 40px;
  width: 541px;
`;

export const Image = styled.img`
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;
export const TitleWrapper = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  align-items: center;
  color: var(--primary-color);
  margin-bottom: 8px;
`;

export const Span = styled.span`
  color: var(--accent-color);
`;

export const DetailsWrapper = styled.div`
  margin-bottom: 14px;
`;

export const Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
  margin-bottom: 4px;
`;

export const DetailItem = styled.li`
  padding: 0 6px;
  font-size: 12px;
  line-height: 1.5;
  color: var(--secondary-color);
  :not(:last-child) {
    border-right: 1px solid var(--separator-color);
  }
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 24px;
`;

export const DescWrapper = styled.div`
  margin-bottom: 24px;
`;
export const DescTitle = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
`;

export const Conditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ConditionItem = styled.li`
  background-color: var(--condition-bg-color);
  color: var(--condition-color);
  padding: 7px 14px;
  border-radius: 35px;
  font-size: 12px;
  line-height: 1.5;

  span {
    font-weight: 600;
  }
`;

