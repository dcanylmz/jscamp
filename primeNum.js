let sayilar = [];

for (let i = 1; i <= 1000; i++) {
  sayilar.push(i);
}

checkPrime(...sayilar);

function checkPrime(...sayilar) {
  for (let i = 0; i < sayilar.length; i++) {
    let counter = 0;

    if (sayilar[i] <= 1) {
      console.log(sayilar[i] + " sayısı asal değildir");
      continue;
    }

    for (let j = 2; j < sayilar[i]; j++) {
      if (sayilar[i] % j == 0) {
        counter++;
      }
    }
    if (counter == 0) {
      console.log(sayilar[i] + " sayısı asaldır.");
    } else {
      console.log(sayilar[i] + " sayısı asal değildir.");
    }
  }
}

checkPrime();
