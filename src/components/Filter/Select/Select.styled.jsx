import styled from '@emotion/styled';
import Select from 'react-select';

export const SelectWrapper = styled.div`
  width: ${props => props.width};
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const SelectInput = styled(Select)`
  height: 48px;
  .custom-select-arrow {
    transition: transform 0.5s; 
  }

  .custom-select.is-open .custom-select-arrow {
    transform: rotate(180deg); 
  }

  .custom-select.is-open.custom-select-menu::-webkit-scrollbar {
    width: 8px; 
    background-color: red;
  }

  #react-select-2-listbox,
  #react-select-3-listbox {
    border-radius: 14px;
    overflow: hidden;
  }
`;
