/* =============
    Problem-01 
================ */

/* In mindGAme() function, I made a function validation where I can only input positive number and then I did some algebraic calculation in "const calculation" and returned "calculation" as the result of the function */

function mindGame(inputNumber) {
  if (typeof inputNumber != "number" || inputNumber < 0) {
    return "Please Input Positive Number";
  }
  const calculation = (inputNumber * 3 + 10) / 2 - 5;
  return calculation;
}

/* ================
       Problem-02
  ================== */

/* In evenOdd() function, I made a function validation where I can only input string and then I made some condition by "if" where if the string's length of my inputted data(string) can be divided by 2 and the remainder is equal to 0, then I said that the string has even number of characters otherwise the string has odd number of characters. */

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

/* ================
       Problem-03
  ================== */

/* In isLGSeven() function, I made a function validation where I can only input number and then I subtracted 7 from the inputValue and got "const calculation". Then I made a condition by 'if' where if the "calculation" is less than 7, I will return "calculation" as result of the function. Else (if calculation is greater than 7) I will double the value of calculation and then return as the result of the function. */

function isLGSeven(inputValue) {
  if (typeof inputValue != "number") {
    return "Please Input Number";
  }
  const calculation = inputValue - 7;
  if (calculation < 7) {
    return calculation;
  } else {
    return inputValue * 2;
  }
}

/* ================
       Problem-04
  ================== */

/* In findingData function, first I made a function validation where I can only input numbers an array. Then  I made a for loop where the loop start in index "0" and continues till its value is less than the length of the inputted array. Then inputted an "if" condition where if the inputted number is less than zero then the result is counted as badData. The loop continues and add +1 with badData if it finds any negative number in the array. Then finally loop stops and returns "badData" as a number where we get to know how many negative numbers there were in the array. */

function findingBadData(inputValue) {
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

/* ================
       Problem-05
  ================== */

/* In gemsToDiamond function, first I made a function validation where I can input only number. Then I converted the gems of each friend by multiplying the number gems they got (as inputted) with the corresponding numbers termed as power of gems of each person. Then I added each friends diamond numbers to get total diamond. Then I made a condition by "if" where if the totalDiamond is less than or equal to the double of 1000, then I returned totalDiamond as result of the function. Otherwise, (if the totalDiamond is greater than double of 1000) I subtracted 2000 from totalDiamond and then returned the calculation as the result of the function.  */

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
  if (totalDiamond <= 1000 * 2) {
    return totalDiamond;
  } else {
    const calculation = totalDiamond - 2000;
    return calculation;
  }
}
