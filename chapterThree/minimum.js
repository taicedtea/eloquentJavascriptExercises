const minButton = document.querySelector("#minimum button");
const lowestNumber = document.querySelector("#lowestNumber");

const min = (a, b) => {
    a = document.querySelector("#minA").value;
    b = document.querySelector("#minB").value;
    let low = (a > b) ? b : a;
    lowestNumber.innerHTML = low;
}

minButton.addEventListener("click", min);