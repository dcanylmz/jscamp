function friendNum(number1, number2) {
  let counter1 = 0;
  let counter2 = 0;

  for (let i = 1; i < number1; i++) {
    if (number1 % i == 0) {
      counter1 += i;
    }
  }

  for (let j = 1; j < number2; j++) {
    if (number2 % j == 0) {
      counter2 += j;
    }
  }

  if (counter1 == number2 && number1 == counter2) {
    console.log(number1 + " ve " + number2 + " arkadaş sayılardır.");
  } else {
    console.log(number1 + " ve " + number2 + " arkadaş sayı değillerdir.");
  }
}

friendNum(12, 23);
friendNum(220, 284);
