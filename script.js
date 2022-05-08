"use strict";

const button = document.getElementsByClassName('sub');
const rating = document.getElementsByClassName('nb');
const front = document.getElementsByClassName('card__front');
const backText = document.getElementsByClassName('text--selected');

let selectedNumber = 0;

(function addEventListeners() {
    for (let i = 0; i < rating.length; i++) {
        rating[i].addEventListener("click", () => {
            selectedNumber = rating[i].value;
        })
    }
    button[0].addEventListener("click", () => {
        backText[0].innerHTML = `You selected ${selectedNumber} out of 5`
        front[0].style.opacity = "0";
    });
})();
