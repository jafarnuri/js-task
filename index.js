let data = +prompt("Reqem yazin");
let arr1 = [];
let arr2 = [];

for (let i = 1; i <= data; i++) {
  if (i == 2 || i == 3 || i == 5 || i == 7) {
    arr2.push(i);
  }
  if (
    i % 2 == 0 ||
    i % 3 == 0 ||
    i % 4 == 0 ||
    i % 5 == 0 ||
    i % 6 == 0 ||
    i % 7 == 0 ||
    i % 8 == 0 ||
    i % 9 == 0
  ) {
    arr1.push(i);
  } else {
    arr2.push(i);
  }
}

console.log(arr2);

for (let i = 1; i < 20; i++) {
  console.log("*".repeat(i));
}

for (let i = 1; i < 30; i++) {
  if (i <= 15) {
    console.log(" ".repeat(30 - i), "*".repeat(1));
  } else {
    console.log(" ".repeat(i - 2), "*".repeat(1));
  }
}
