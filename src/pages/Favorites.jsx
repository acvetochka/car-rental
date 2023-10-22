import { useSelector } from 'react-redux';

import CarsList from 'components/CarsList/CarsList';
import NoCarsSection from 'components/NoCarsSection/NoCarsSection';
import Title from 'components/Title/Title';
import { selectFavorite } from 'redux/favorite/favoriteSelectors';

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
