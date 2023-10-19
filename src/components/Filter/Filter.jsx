import makes from 'makes.json';

import {
  FilterForm,
  Input,
  InputWrapper,
  Label,
  LabelMileage,
  Mileage,
  MileageWrapper,
} from './Filter.styled';
import Select from './Select/Select';
import { creatOptions } from 'helpers/createOptions';
import { priceArray } from 'helpers/priceOptions';
import { useState } from 'react';

const Filter = () => {
  const [selectedValue, setSelectedValue] = useState({
    value: 'price',
    label: 'To $',
  });
  const [valueBrand, setValueBrand] = useState({
    value: 'brand',
    label: 'Enter the text',
  });

  const brandOptions = creatOptions(makes);
  const priceOptions = creatOptions(priceArray);
  const [value, setValue] = useState('');

  const handleChangePrice = selectedOption => {
    const formattedValue = `To ${selectedOption.value}$`;
    setSelectedValue({ label: formattedValue, value: formattedValue });
  };

  const handleChangeBrand = selectedOption => {
    setValueBrand({ label: selectedOption.value, value: selectedOption.value });
  };

  const handleChangeMileage = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <FilterForm>
      <Select
        textLabel="Car brand"
        name="brand"
        options={brandOptions}
        value={valueBrand}
        handleChange={handleChangeBrand}
        width={'224px'}
      />
      <Select
        textLabel="Price/ 1 hour"
        name="price"
        options={priceOptions}
        value={selectedValue}
        handleChange={handleChangePrice}
        width={'125px'}
      />
      <MileageWrapper>
        <LabelMileage htmlFor="fromMileage">Сar mileage / km</LabelMileage>
        <Mileage>
          <InputWrapper>
            <Label>From</Label>
            <Input
              type="text"
              name=""
              id="fromMileage"
              onChange={handleChangeMileage}
              //   value={value}
              value={value}
              padding="65px"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>To</Label>
            <Input type="text" name="" id="toMileage" padding="45px" />
          </InputWrapper>
        </Mileage>
      </MileageWrapper>
    </FilterForm>
  );
};

export default Filter;
