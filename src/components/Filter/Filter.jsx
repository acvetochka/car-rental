import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchFirstPage } from 'redux/cars/carsOperations';
import { setFilter } from 'redux/filter/filterSlice';
import Select from './Select/Select';
import {
  FilterForm,
  Input,
  InputWrapper,
  Label,
  LabelMileage,
  Mileage,
  MileageWrapper,
  SearchButton,
} from './Filter.styled';

const Filter = ({ setFiltering, setShowButton }) => {
  const [valuePrice, setValuePrice] = useState({
    value: '',
    label: 'To $',
  });
  const [valueBrand, setValueBrand] = useState({
    value: '',
    label: 'Enter the text',
  });
  const [price, setPrice] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [mileageMin, setMileageMin] = useState('');
  const [mileageMax, setMileageMax] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      valueBrand.label !== 'Enter the text' ||
      valuePrice.label !== 'To $' ||
      mileageMin !== '' ||
      mileageMax !== ''
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [valueBrand, valuePrice, mileageMin, mileageMax]);

  const handleChangePrice = selectedOption => {
    const formattedValue = `To ${selectedOption.value}$`;
    setValuePrice({ label: formattedValue, value: formattedValue });
    setPrice(selectedOption.value);
  };

  const handleChangeBrand = selectedOption => {
    setValueBrand({
      label: selectedOption.value,
      value: selectedOption.value,
    });
  };

  const handleChangeMileage = e => {
    const newValue = e.target.value;
    switch (e.target.name) {
      case 'mileageMin':
        setMileageMin(newValue);
        break;
      case 'mileageMax':
        setMileageMax(newValue);
        break;
      default:
        break;
    }
  };

  const handleSearchClick = async e => {
    e.preventDefault();
    const newFilterQuery = {
      make: valueBrand.value.toLowerCase().trim() || '',
      price: price || '500',
      mileageMin: mileageMin.split(',').join('') || 0,
      mileageMax: mileageMax.split(',').join('') || 99999,
    };
    dispatch(setFilter(newFilterQuery));
    setFiltering(true);
  };

  const handleClearClick = e => {
    e.preventDefault();
    dispatch(fetchFirstPage());
    setFiltering(false);
    setValuePrice({
      value: '',
      label: 'To $',
    });
    setValueBrand({
      value: '',
      label: 'Enter the text',
    });
    setMileageMin('');
    setMileageMax('');
    setShowButton(true);
  };

  return (
    <FilterForm>
      <Select
        textLabel="Car brand"
        name="make"
        brand
        value={valueBrand}
        handleChange={handleChangeBrand}
        width={'224px'}
      />
      <Select
        textLabel="Price/ 1 hour"
        name="price"
        value={valuePrice}
        handleChange={handleChangePrice}
        width={'125px'}
      />
      <MileageWrapper>
        <LabelMileage htmlFor="fromMileage">Сar mileage / km</LabelMileage>
        <Mileage>
          <InputWrapper>
            <Label>From</Label>
            <Input
              value={mileageMin}
              name="mileageMin"
              id="fromMileage"
              format="##,###"
              maxLength={6}
              decimalScale={3}
              thousandSeparator={true}
              onChange={handleChangeMileage}
              padding="65px"
            />
          </InputWrapper>
          <InputWrapper>
            <Label>To</Label>
            <Input
              name="mileageMax"
              id="toMileage"
              padding="45px"
              format="##,###"
              maxLength={6}
              decimalScale={3}
              thousandSeparator={true}
              value={mileageMax}
              onChange={handleChangeMileage}
            />
          </InputWrapper>
        </Mileage>
      </MileageWrapper>
      <SearchButton onClick={handleSearchClick} disabled={isDisabled}>
        Search
      </SearchButton>
      <SearchButton onClick={handleClearClick} disabled={isDisabled}>
        Clear
      </SearchButton>
    </FilterForm>
  );
};

Filter.propTypes = {
  setFiltering: PropTypes.func.isRequired,
  setShowButton: PropTypes.func.isRequired,
};

export default Filter;
