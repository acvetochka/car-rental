const { Button } = require('./LinkToCatalog.styled');

const LinkToCatalog = ({ text }) => {
  return <Button to="/catalog">{text}</Button>;
};

export default LinkToCatalog;
