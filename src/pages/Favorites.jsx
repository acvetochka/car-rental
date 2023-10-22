import CarsList from 'components/CarsList/CarsList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorite/favoriteSelectors';
import NoCarsSection from 'components/NoCarsSection/NoCarsSection';
import Title from 'components/Title/Title';

const Favorites = () => {
  const { favoriteCars } = useSelector(selectFavorite);

  return (
    <section>
      <Title title="Your Favorite Cars" />
      {favoriteCars.length > 0 ? (
        <CarsList carsArray={favoriteCars} />
      ) : (
        <NoCarsSection />
      )}
    </section>
  );
};

export default Favorites;
