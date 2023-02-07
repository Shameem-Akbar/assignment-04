function findingBadData() {
  if (Array.isArray(inputValue) == false) {
    return "Please Input Number";
  }
  let badData = 0;
  for (i = 0; i < inputValue.length; i++) {
    if (inputValue[i] < 0) {
      badData = badData + 1;
    }
  }
  return badData;
}

const inputValue = "shameem";
const result = findingBadData(inputValue);
console.log(result);
