import styled from '@emotion/styled';
import { NumericFormat } from 'react-number-format';

export const FilterForm = styled.form`
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
`;

export const MileageWrapper = styled.div`
  text-align: left;
`;

export const LabelMileage = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Mileage = styled.div`
  display: flex;
  gap: 1px;
  background-color: rgba(138, 138, 137, 0.2);

  border: none;
  border-radius: 14px;
  overflow: hidden;
`;
export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.p`
  position: absolute;
  left: 24px;
  top: 15px;
`;

export const Input = styled(NumericFormat)`
  padding-left: ${props => props.padding};
  width: 160px;
  height: 48px;
  background-color: var(--input-bg-color);
  border: none;
  outline: none;
`;

export const SearchButton = styled.button`
  align-self: end;
  padding: 14px 44px;
  height: 48px;
  border-radius: 12px;
  background-color: var(--accent-color);
  color: var(--invert-color);
  transition: background-color 250ms ease-in-out;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: var(--accent-hover);
  }
  &:disabled {
    background-color: var(--secondary-color);
    opacity: 0.8;
    cursor: auto;
  }
`;
