export function formatNumberWithCommas(number) {
  if (!Number.isInteger(number)) {
    return 'Invalid number';
  }
  const numberString = number.toString();

  let formattedNumber = '';
  for (let i = numberString.length - 1, j = 1; i >= 0; i--, j++) {
    formattedNumber = numberString[i] + formattedNumber;
    if (j % 3 === 0 && i > 0) {
      formattedNumber = ',' + formattedNumber;
    }
  }

  return formattedNumber;
}
