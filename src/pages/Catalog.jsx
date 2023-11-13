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
import Loader from 'components/Loader/Loader';
import ButtonScrollToTop from 'components/ButtonScrollToTop/ButtonScrollToTop';

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
      dispatch(fetchFirstPage());
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
      <Filter setFiltering={setFiltering} setShowButton={setShowButton} />
      {filtering ? (
        filterCars.length === 0 ? (
          <p>
            Oops, nothing found here. Try changing your search parameters...
          </p>
        ) : (
          <CarsList carsArray={filterCars} />
        )
      ) : (
        <CarsList carsArray={cars} />
      )}

      {!filtering &&
        (isLoading ? (
          <Loader />
        ) : (
          showButton && (
            <ButtonLoadMore
              page={page}
              setPage={setPage}
              setShowButton={setShowButton}
            />
          )
        ))}
      <ButtonScrollToTop />
    </section>
  );
};

export default Catalog;
