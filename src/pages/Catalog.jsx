import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import CarsList from 'components/CarsList/CarsList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchFirstPage } from 'redux/cars/carsOperations';
import { selectCars } from 'redux/cars/carsSelectors';

const Catalog = () => {
  const dispatch = useDispatch();
  const { cars } = useSelector(selectCars);
  const [showButton, setShowButton] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      dispatch(fetchFirstPage());
      setShowButton(true);
    }
  }, [dispatch, page]);


  return (
    <section>
      <CarsList carsArray={cars} />
      {
        showButton && (
          <ButtonLoadMore
            page={page}
            setPage={setPage}
            setShowButton={setShowButton}
          />
        )
      }
    </section>
  );
};

export default Catalog;
