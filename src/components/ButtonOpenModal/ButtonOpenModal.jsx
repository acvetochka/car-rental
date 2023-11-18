import PropTypes from 'prop-types';

import { Button } from './ButtonOpenModal.styled';

const ButtonOpenModal = ({ onClick }) => {
  return <Button onClick={onClick}>Learn more</Button>;
};

ButtonOpenModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonOpenModal;
