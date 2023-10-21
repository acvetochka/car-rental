import CarsList from 'components/CarsList/CarsList';
import { useSelector } from 'react-redux';
import { selectFavorite } from 'redux/favorite/favoriteSelectors';
import NoCarsSection from 'components/NoCarsSection/NoCarsSection';

const Favorites = () => {
  const { favoriteCars } = useSelector(selectFavorite);

  return (
    <section>
      <h1>Your Favorite Cars</h1>
      {favoriteCars.length > 0 ? (
        <CarsList carsArray={favoriteCars} />
      ) : (
        <NoCarsSection />
      )}
    </section>
  );
};

export default Favorites;
