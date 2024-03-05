function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let counter = 0;

    if (numbers[i] <= 1) {
      //1 ve -li sayılar için
      counter++;
    }

    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        counter++;
      }
    }
    if (counter > 0) {
      console.log(numbers[i] + " bir asal sayı değildir.");
    } else {
      console.log(numbers[i] + " bir asal sayıdır.");
    }
  }
}

findPrime(2, 5, 8, 21, 13);
findPrime(3, 5);
