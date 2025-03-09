// const arr=[1,2,3,4,5];

// arr.reduce((acc,el) = > {
//     return 100 ;
// },0);

// const obj = { aa: 123, bb: 456, cc: "hello", 1: 1111, 2: 2222 };
// console.log(obj);
// obj.hello = 333;
// console.log(obj);
// obj["dd"] = 888;
// console.log(obj);

//fetch
// const url = "https://jsonplaceholder.typicode.com/posts";
// const response = fetch(url);
// response
//     .then((resp) => {
//         return resp.json();
//     })

//     .then((posts) => {
//         posts.forEach((post) => {
//             console.log(post.title);
//         });
//     })
//     .catch((err) => {
//         console.log("ERROR", err);
//     });

// const hero = { name: "cc", hp: 100, mp: 200, attack: 80 };
// const { name: heroName, hp } = hero;
// console.log(heroName);

// const url =
//     "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
// const response = fetch(url);
// response
//     .then((resp) => {
//         return resp.json();
//     })

//     .then((station) => {
//         station.forEach((sna) => {
//             console.log(station.sna);
//         });
//     })
//     .catch((err) => {
//         console.log("ERROR", err);
//     });

// const url =
//     "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
// const response = fetch(url);
// response
//     .then((resp) => resp.json();)
//     .then((stations) => {
//     const all=stations
//          .filter(({ar,available_rent_bikes}) => {
//         return ar.includes("民生東路")&&station.available_rent_bikes>=5
//          })
//     });
// console.log(all);

// const url =
//     "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
// const response = fetch(url);
// response
//     .then((resp) => {
//         return resp.json();
//     })

//     .then((station) => {
//         station.forEach((station) => {
//             console.log(station.sna);
//         });
//     })
//     .catch((err) => {
//         console.log("ERROR", err);
//     });

// const url =
//     "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
// try {
//     const response = await fetch(url);
//     const stations = await response.json();
//     stations
//         .filter(({ ar, available_rent_bikes }) => {
//             return ar.includes("民生東路") && available_rent_bikes >= 5;
//         })
//         .forEach(({ sna, ar }) => {
//             console.log(sna, ar);
//         });
// } catch (err) {
//     console.log("ERROR:", err);
// }

// console.log(1);
// setTimeout(() => {
//     console.log("2");
// }, 3000);
// console.log(3);

// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     });
// }

// const ii = document.getElementById("hi");
// console.log(ii);

function xmas(n = 3) {
    for (let i = 0; i < n; i++) {
        let space = " ".repeat(n - i);
        let star = "*".repeat(2 * i + 1);
        console.log(`${space}${star}`);
    }
    for (let k = 0; k < 2; k++) {
        let tree = " ".repeat(n - 1);
        console.log(`${tree}*`);
    }
}
xmas(4);

const arr = [1, 2, 3, 4, 5];
function lastN(list, n = 1) {
    const lastIndex = list.length - n;
    return list[lastIndex];
}
const el = lastN(arr, 2);
console.log(el);
