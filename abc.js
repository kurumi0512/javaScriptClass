const arr = ["a", "b", "c"];
console.log(arr[0]);
arr[0] = "x";
console.log(arr[0]);

const age = 16;
const id = true;

if (age >= 18 && id) {
    console.log("可以進場");
} else {
    console.log("不能進場");
}

const holiday = false;
const weekend = false;
if (holiday || weekend) {
    console.log("可以放假");
} else {
    console.log("今天要上班");
}

const password = "125";

if (password != "12345") {
    console.log("密碼不正確");
} else {
    console.log("密碼正確");
}

const agge = 18;
const gender = "female";

if (agge >= 18 || gender == "male") {
    console.log("已成年");
} else {
    console.log("未成年");
}

const n = 28;
if (n % 4 == 0 && n % 7 == 0) {
    console.log("可以被4和7整除");
} else {
    console.log("不能被整除");
}

const years = 2024;
if (years % 4 == 0) {
    if (years % 100 == 0) {
        if (years % 400 == 0) {
            console.log("閏年");
        } else {
            console.log("平年");
        }
    } else {
        console.log("閏年");
    }
} else {
    console.log("平年");
}

const year2 = 1700;
if (year2 % 4 !== 0) {
    console.log("平");
} else if (year2 % 100 !== 0) {
    console.log("閨");
} else if (year2 % 400 !== 0) {
    console.log("平");
} else {
    console.log("閏");
}

for (let n = 1; n <= 20; n++) {
    if (n % 2 !== 0) {
        console.log(n);
    }
}

let i = 1;
while (i <= 20) {
    console.log(i);
    i += 2;
}

let age3 = 18;
console.log("I'm " + age3 + " years old");
console.log(`I'm ${age3} years old`);

for (let s = 1; s < 10; s++) {
    for (let q = 1; q < 10; q++) {
        console.log(`${s}x${q}=${s * q}`);
    }
}

function calc(a, b, c) {
    const total = a + b + c;
    return total;
}
//calc 123是引數 arguments
console.log(calc(1, 2, 3));

function calc(a, b, c) {
    const total = a + b + c;
    return total; //這是undfined
}
console.log(calc(1, 2, 3));

let hight1 = 5;
let width1 = 11;
let tree = "";

for (let k = 0; k < hight1; k++) {
    tree += " ".repeat(Math.floor(width1 / 2) - k);
    tree += "*".repeat(1 + k * 2);
    tree += "\n";
}

for (let f = 0; f < 2; f++) {
    tree += " ".repeat(Math.floor(width1 / 2));
    tree += "*";
    tree += "\n";
}
console.log(tree);

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

for (let i = 1; i <= 4; i++) {
    let star = "*".repeat(2 * i - 1);
    let space = " ".repeat(4 - i);
    console.log(`${space}${star}`);
}
console.log("2");

function makeTree(n) {
    for (let i = 1; i <= n; i++) {
        let star = "*".repeat(2 * i - 1);
        let space = " ".repeat(n - i);
        console.log(`${space}${star}`);
    }
}
makeTree(2);
console.log("3");

function makeTree(f) {
    if (n == undefined) {
        console.log("請輸入參數");
    } else {
        for (let i = 1; i <= n; i++) {
            let star = "*".repeat(2 * i - 1);
            let space = " ".repeat(n - i);
            console.log(`${space}${star}`);
        }
    }
}
makeTree();

for (let i = 1; i <= 4; i++) {
    let star = "*".repeat(2 * i - 1);
    let space = " ".repeat(4 - i);
    let tree = space + star;
    console.log(tree);
    //console.log(`${space}${star}`);
}

makeTree1();
function makeTree1(n = 3) {
    console.log();
}

makeTree2();
const makeTree2 = function (n = 3) {};
