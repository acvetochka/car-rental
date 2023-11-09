export const getFilteredCars = (payload, filter) => {
  const pars = str => parseInt(str.replace(/\D/g, ''), 10);
  const filteredCars = payload.filter(
    ({ make, rentalPrice, mileage }) =>
      make.toLowerCase().includes(filter.make) &&
      pars(rentalPrice) <= filter.price &&
      mileage > filter.mileageMin &&
      mileage < filter.mileageMax
  );
  return filteredCars;
};
