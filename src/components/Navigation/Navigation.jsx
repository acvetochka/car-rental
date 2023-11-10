const { Navi, Link } = require('./Navigation.styled');

const Navigation = () => {
  return (
    <Navi>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/favorites">Favorites</Link>
    </Navi>
  );
};

export default Navigation;
