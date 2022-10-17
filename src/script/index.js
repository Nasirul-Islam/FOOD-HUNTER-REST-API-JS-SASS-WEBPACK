import first from "./test";
import "../style/style.scss";
import "../index.html";

let multiply = () => {
    let a = 10;
    let b = 20;
    return a * b;
}

let result1 = first();
let result2 = multiply();

console.log(result1);
console.log(result2);