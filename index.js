
let count = 0; 
let othercount = 0// shared variable
let display = document.getElementById("sroe");
let otherDisplay = document.getElementById("sroee");

function plus1() {
    count += 1;
    display.innerText = count;
}

function plus2() {
    count += 2;
    display.innerText = count;
}

function plus3() {
    count += 3;
    display.innerText = count;
}


function plus11() {
    othercount += 1;
    otherDisplay.innerText = othercount;
}

function plus22() {
    othercount += 2;
    otherDisplay.innerText = othercount;
}

function plus33() {
    othercount += 3;
    otherDisplay.innerText = othercount;
}




