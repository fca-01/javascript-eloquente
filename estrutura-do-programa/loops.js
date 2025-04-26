
var number = 0;

while (number <= 12) {
  console.log(number);
  number = number + 2;
}


for (var current = 12; ; current++) {
  if (current % 7 == 0)
    break;
}
console.log(current);