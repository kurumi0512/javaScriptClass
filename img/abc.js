/*判斷數字n 是否為4以及7的倍數

const n = 28;

if (n % 4 == 0 && n % 7 == 0) {
  console.log("是4和7的倍數");
} else {
  console.log("不是4和7的倍數");
}

const year = 1200;
if (year % 4 == 0) {
  // 能被 4 整除
  if (year % 100 === 0) {
    // 能被 100 整除
    if (year % 400 === 0) {
      // 能被 400 整除
      console.log("閏年");
    } else {
      console.log("平年");
    }
  } else {
    // 能被 4 整除但不能被 100 整除
    console.log("閏年");
  }
} else {
  // 不能被 4 整除
  console.log("平年");
}

if (year % 4 == 0 && year % 100 !== 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("閏");
    } else {
      console.log("平");
    }
  } else {
    console.log("閏");
  }
} else {
  console.log("平");
}

const age = 20;
const gender = "male";

if (age >= 18 && gender != "male") {
  console.log("已成年");
} else {
  console.log("未成年");
}

//for
//for (起始; 結束條件; 每回合會做的事情) {}
for (let i = 1; i < 5; i++) {
  console.log(i);
}*/

//印出1~20的奇數

/*let i = 1;
while (i <= 20) {
  console.log(i);
  i += 2;
}*/
/*let age = 18;
console.log("I'm" + age + "years old");
console.log(`I'm ${age} years old`);
//backtick`把變數翻譯成你想要的
for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} x ${j} =${i * j}`);
  }
}

//input-process-output
//            abc是參數parametets
function calc(a, b, c) {
  const total = a + b + c;
  return console.log(total);
}
//引數 arguments
/*
console.log(calc(1, 2, 3));

const year = 2024;

if (year % 4 == 0) {
  if (year % 100 == 0) {
    if (year % 400 == 0) {
      console.log("閏");
    } else {
      console.log("平");
    }
  } else {
    console.log("閏");
  }
} else {
  console.log("平");
}

let i = 1;
while (i <= 5) {
  console.log(i);
  i += 1;
}

function calc(a, b, c) {
  const total = a + b + c;
  return total;
}
//引數 arguments
console.log(calc(1, 2, 3));
*/
let width = 10;
let height = 5;
s = "";
for (i = 0; i < height; i++) {
  s += " ".repeat(width / 2 - i) + "*".repeat(1 + i * 2);
  s += "\n";
}
console.log(s);

s = "";
for (i = 0; i < 2; i++) {
  s += " ".repeat(width / 2) + "*";
  s += "\n";
}
console.log(s);
