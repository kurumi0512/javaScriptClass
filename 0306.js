// function bmiCalculator(height, weight) {
//     const h = height / 100;
//     const bmi = weight / (h * h);
//     return round(bmi, 4);
// }

// function round(num, n = 0) {
//     const ratio = Math.pow(10, n);
//     return Math.round(num * ratio) / ratio;
// }

// const bmi = bmiCalculator(170, 80);
// console.log(bmi);

// // const arr = ["a", "b", "c"];

// // function getLast(list) {
// //     const lastIndex = list.length - 1;
// //     return list[lastIndex];
// // }

// // const lastOne = getLast(arr);
// // console.log(lastOne);

// // const arr = ["a", "b", "c", "d", "e"];

// // function lastN(list, n = 1) {
// //     const lastindex = list.length - n;
// //     return list[lastindex];
// // }

// // const el = lastN(arr, 2);
// // console.log(el);

// // const arr = ["a", "b", "c", "d", "e"];
// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // const arr = [1, 2, 3, 4, 5];

// // arr.forEach((x,i) => {
// //     console.log(x);
// //     console.log(i);
// // });

// // const arr = [1, 2, 3, 4, 5];

// // const doubleArr1 = [];

// // arr.forEach(function (el) {
// //     doubleArr.push(el * 2);
// // });

// // console.log(doubleArr1);

// // const arr1 = [1, 2, 3, 4, 5];

// // const doubleArr = arr.map(function (el) {
// //     return el * 2;
// // });

// // console.log(doubleArr);

// // const arr = [1, 2, 3, 4, 5];
// // const result=arr.filter(function(el){
// //     return el>2
// // })

// // console.log(result);

// // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // //>5numbers,x2
// // //[12,14,16,18,20]
// // const a1 = arr
// //     .filter(function (el) {
// //         return el > 5;
// //     })
// //     .map(function (el) {
// //         return el * 2;
// //     });

// // console.log(a1);

// // const arr = [1, 2, 3, 4, 5];

// // const doubleArr = arr.map(function (el) {
// //     if (el > 2) {
// //         return el;
// //     }
// // });

// // console.log(doubleArr);

// // const data = [true, true, true];

// // const result = data.every(function (el) {
// //     return el;
// // });

// // console.log(result);

// for (let i = 0; i < 4; i++) {
//     console.log(i);
// }

// for (let i = 1; i <= 4; i++) {
//     let star = "*".repeat(2 * i - 1);
//     let space = "".repeat(4 - i);
//     console.log(`${space}${star}`);
// }

// hello1();
// function hello1() {
//     console.log("hi");
// }

// let a = 1;

let a = 1;

function hi() {
    let a = 2;
    function hey() {
        console.log(a);
    }
    hey();
}
hi();
