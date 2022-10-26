"use strict";

const imgOne = document.getElementById("img-one");
const imgTwo = document.getElementById("img-two");
const imgThree = document.getElementById("img-three");
const imgFour = document.getElementById("img-four");
const imgFive = document.getElementById("img-five");

let currentIndex = 0;

const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("previous-btn");

nextButton.addEventListener("click", function(){
    currentIndex++; 

    if(currentIndex === 5){
        currentIndex = 0;
        imgFive.classList.remove("active");
        imgOne.classList.add("active");
    }

    if(currentIndex === 1){
        imgOne.classList.remove("active");
        imgTwo.classList.add("active");
    }

    if(currentIndex === 2){
        imgTwo.classList.remove("active");
        imgThree.classList.add("active");
    }

    if(currentIndex === 3){
        imgThree.classList.remove("active");
        imgFour.classList.add("active");
    }

    if(currentIndex === 4){
        imgFour.classList.remove("active");
        imgFive.classList.add("active");
    }

});

previousButton.addEventListener("click", function(){

    if(currentIndex === 0){
        currentIndex = 4
        imgOne.classList.remove("active");
        imgFive.classList.add("active");
    }

    if(currentIndex === 1){
        currentIndex = 0;
        imgTwo.classList.remove("active");
        imgOne.classList.add("active");
    }

    if(currentIndex === 2){
        currentIndex = 1;
        imgThree.classList.remove("active");
        imgTwo.classList.add("active");
    }

    if(currentIndex === 3){
        currentIndex = 2;
        imgFour.classList.remove("active");
        imgThree.classList.add("active");
    }

    if(currentIndex === 4){
        currentIndex = 3;
        imgFive.classList.remove("active");
        imgFour.classList.add("active");
    }
});