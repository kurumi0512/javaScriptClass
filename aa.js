function makeTree(n) {
    for (let i = 1; i <= n; i++) {
        let star = "*".repeat(2 * i - 1);
        let space = " ".repeat(n - i);
        console.log(`${space}${star}`);
    }
}
makeTree(4);

makeTree1();
function makeTree1(n = 3) {}

let t = 1;

function hi() {
    console.log(a);
    t = 2;
}

hi();
console.log(a);

let a = 1;

function hi() {
    a = 2;
    console.log(a);
}

hi();
console.log(a);

makeTree1();
function makeTree1(n = 3) {}
