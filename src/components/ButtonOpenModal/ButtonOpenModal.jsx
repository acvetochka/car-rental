import PropTypes from 'prop-types';

import { Button } from './ButtonOpenModalstyled';

const ButtonOpenModal = ({ onClick }) => {
  return <Button onClick={onClick}>Learn more</Button>;
};

ButtonOpenModal.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonOpenModal;
