//Проверка числа на палиндромность
const palindromCheck = (num) => {
  const arr = num.split("");
  const arrReverse = num.split("").reverse();
  return JSON.stringify(arr) === JSON.stringify(arrReverse);
};

//Суммирование двух чисел произвольной длины
const sumStrings = (num1, num2) => {
  const result = [];
  let temp = 0;
  const maxLength = Math.max(num1.length, num2.length);

  num1 = num1.padStart(maxLength, "0");
  num2 = num2.padStart(maxLength, "0");

  const arr1 = num1.split("").reverse();
  const arr2 = num2.split("").reverse();

  for (let i = 0; i < maxLength; i++) {
    result[i] = +arr1[i] + +arr2[i] + temp;
    if (result[i] >= 10) {
      temp = 1;
      result[i] = result[i] - 10;
    } else {
      temp = 0;
    }
  }
  if (temp != 0) {
    result.push(1);
  }
  return result.reverse().join("");
};

//Функция поиска палидрома
let steps = 0;
const findPalindrom = (num) => {
  if (palindromCheck(num)) {
    return {palindrom: num, steps: steps};
  } else {
    steps += 1;
    if (steps > 500) {
      return 'Палиндром не найден'
    }
    num = sumStrings(num, num.split("").reverse().join(""));
    return findPalindrom(num);
  }
};

console.log(findPalindrom("19246"));
