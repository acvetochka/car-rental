import PropTypes from 'prop-types';

import { Button } from './ButtonRentalCar.styled';

const ButtonRentalCar = ({ text }) => {
  return <Button to="tel:+380730000000">{text}</Button>;
};

ButtonRentalCar.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ButtonRentalCar;
