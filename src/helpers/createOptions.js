export const creatOptions = array => {
  const options = array.map((option, idx) => ({
    // value: `value${idx + 1}`,
    value: option,
    label: option,
  }));
  return options;
};
