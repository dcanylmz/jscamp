let sayilar = [];

for (let i = 1; i <= 1000; i++) {
  sayilar.push(i);
}

checkPerfect(...sayilar);

function checkPerfect(...sayilar) {
  for (let i = 0; i < sayilar.length; i++) {
    let perfectBolen = 0;

    for (let j = 1; j < sayilar[i]; j++) {
      if (sayilar[i] % j == 0) {
        perfectBolen += j;
      }
    }

    if (perfectBolen == sayilar[i]) {
      console.log(sayilar[i] + " sayısı bir mükemmel sayıdır.");
    } else {
      console.log(sayilar[i] + " sayısı mükemmel sayı değildir!");
    }
  }
}

checkPerfect();
