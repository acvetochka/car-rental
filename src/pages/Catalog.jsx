import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import CarsList from 'components/CarsList/CarsList';
import Filter from 'components/Filter/Filter';
import {
  fetchAllCarsForFilter,
  fetchFirstPage,
} from 'redux/cars/carsOperations';
import { selectCars } from 'redux/cars/carsSelectors';
import { selectFilter } from 'redux/filter/filterSelectors';
import { getFilteredCars } from 'helpers/getFilteredCars';

const Catalog = () => {
  const dispatch = useDispatch();
  const { cars, isLoading } = useSelector(selectCars);
  const [showButton, setShowButton] = useState(false);
  const [page, setPage] = useState(1);
  const filter = useSelector(selectFilter);
  const [filterCars, setFilterCars] = useState([]);
  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    if (page === 1) {
      // (async () => {
      //   await
      dispatch(fetchFirstPage());
      // })();
      setShowButton(true);
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (filtering) {
      (async () => {
        const { payload } = await dispatch(fetchAllCarsForFilter());
        const visibleCars = await getFilteredCars(payload, filter);
        setFilterCars(visibleCars);
      })();
    }
  }, [filtering, filter, dispatch]);

  return (
    <section>
      <Filter
        setFilterCars={setFilterCars}
        setFiltering={setFiltering}
        setShowButton={setShowButton}
      />
      <CarsList carsArray={filtering ? filterCars : cars} />
      {!filtering &&
        (isLoading ? (
          <div>Loading cars...</div>
        ) : (
          showButton && (
            <ButtonLoadMore
              page={page}
              setPage={setPage}
              setShowButton={setShowButton}
            />
          )
        ))}
    </section>
  );
};

export default Catalog;
