import styled from '@emotion/styled';
// import Select from 'react-select';

export const FilterForm = styled.form`
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 18px;
`;

// export const SelectInput = styled(Select)`
//   width: 224px;
//   text-align: left;
// `;

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

export const Input = styled.input`
  padding-left: ${props => props.padding};
  width: 160px;
  height: 48px;
  background-color: var(--input-bg-color);
  border: none;
  outline: none;
`;
