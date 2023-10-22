let priceArray = [];

const priceOptions = () => {
  for (let i = 30; i <= 500; i += 10) {
    priceArray.push(i);
  }
  return priceArray;
};

priceOptions();

export { priceArray };
