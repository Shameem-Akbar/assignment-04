/* =============
    Problem-01 
================ */

function mindGame(inputNumber) {
  if (typeof inputNumber != "number" || inputNumber < 0) {
    return "Please Input Positive Number";
  }
  const calculation = (inputNumber * 3 + 10) / 2 - 5;
  return calculation;
}

// const result = mindGame(500);
// console.log(result);

/* ================
     Problem-02
================== */

function evenOdd(inputData) {
  if (typeof inputData != "string") {
    return "Please Input String";
  }
  if (inputData.length % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// const result = evenOdd("shameem");
// console.log(result);

/* ================
     Problem-03
================== */

function isLGSeven(inputValue) {
  const calculation = inputValue - 7;
  if (typeof inputValue != "number") {
    return "Please Input Number";
  }
  if (calculation < 7) {
    return calculation;
  } else {
    return inputValue * 2;
  }
}

// const result = isLGSeven(-15);
// console.log(result);

/* ================
     Problem-04
================== */

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

// const inputValue = [78, 789, -67, -688];
// const result = findingBadData(inputValue);
// console.log(result);

/* ================
     Problem-05
================== */

function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
  if (
    typeof firstFriendGem != "number" ||
    typeof secondFriendGem != "number" ||
    typeof thirdFriendGem != "number"
  ) {
    return "Please Enter A Number";
  }
  const firstFriendDiamond = firstFriendGem * 21;
  const secondFriendDiamond = secondFriendGem * 32;
  const thirdFriendDiamond = thirdFriendGem * 43;
  const totalDiamond =
    firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
  if (totalDiamond < 1000 * 2) {
    return totalDiamond;
  } else {
    const calculation = totalDiamond - 2000;
    return calculation;
  }
}

// const result = gemsToDiamond(20, 200, 50);
// console.log(result);
