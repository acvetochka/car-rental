import CarItem from 'components/CarItem/CarItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/carsOperations';
import { selectCars } from 'redux/cars/carsSelectors';
import { List, ListItem } from './CarsList.styled';

const CarsList = () => {
  const dispatch = useDispatch();
  const { cars, isLoading, error } = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <List>
      {isLoading && <p>Loading cars...</p>}
      {error && <p>{error}</p>}
      {cars.map(item => (
        <ListItem key={item.id}>
          <CarItem car={item} />
        </ListItem>
      ))}
    </List>
  );
};

export default CarsList;
