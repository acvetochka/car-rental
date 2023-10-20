export const removeDuplicatesAndSort = (array) =>  {
  const uniqueArray = array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

  return uniqueArray.sort();
}
