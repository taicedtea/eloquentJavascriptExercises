let input = document.querySelector("#recursionInput").value;
let recursionButton = document.querySelector("#recursionButton");
let answer = document.querySelector("#recursionAnswer");

let isEven = (a) => {
    //let a = input;
    if(a === 0) {
        return true;
    } else if (a===1) {
        return false;
    } else if (a < 0) {
        return isEven(-a);
    } else {
        return (isEven(a - 2));
    } 
}
