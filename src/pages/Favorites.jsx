import CarsList from 'components/CarsList/CarsList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorite/favoriteSelectors';

const Favorites = () => {
  const { favoriteCars } = useSelector(selectFavorite);

  return (
    <section>
      <CarsList carsArray={favoriteCars} />
    </section>
  );
};

export default Favorites;
