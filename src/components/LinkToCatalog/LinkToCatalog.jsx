import PropTypes from 'prop-types';
import { Button } from './LinkToCatalog.styled';

const LinkToCatalog = ({ text }) => {
  return <Button to="/catalog">{text}</Button>;
};

LinkToCatalog.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LinkToCatalog;
