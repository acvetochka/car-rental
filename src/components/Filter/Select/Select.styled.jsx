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
  /* border-radius: 14px;
  background-color: var(--input-bg-color); */
  height: 48px;
  .custom-select-arrow {
    transition: transform 0.5s; /* Анімація для зміни повороту */
  }

  .custom-select.is-open .custom-select-arrow {
    transform: rotate(180deg); /* Перевернути іконку при відкритті */
  }

  .custom-select.is-open.custom-select-menu::-webkit-scrollbar {
    width: 8px; /* Ширина скролбара */
    background-color: red;
  }

  #react-select-2-listbox,
  #react-select-3-listbox {
    border-radius: 14px;
    overflow: hidden;
  }

  /* #react-select-2-listbox::-webkit-scrollbar-thumb {
    background-color: red; 
    border-radius: 4px; 
  }

  .custom-select.custom-select-menu::-webkit-scrollbar-track {
    background: red !important; 
  }

  .custom-select.custom-select-menu::-webkit-scrollbar-thumb:active {
    background-color: red; 
  }

  .custom-select.custom-select-menu::-webkit-scrollbar {
    width: 8px;
    background-color: red !important;
  } */
`;
