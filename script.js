"use strict";

document.addEventListener("DOMContentLoaded", init);

function init(){
    document.querySelector("button").addEventListener("click", sortArray)
}

function sortArray(){
    let $length = document.querySelector("#length").value;
    let ul = document.querySelector("#output ul");
    let randomNumbers = randomNumbersArray($length);
    let sortedNumbers = bubbleSort(randomNumbers);

    console.log(sortedNumbers);
    
    ul.innerHTML = "";
    sortedNumbers.forEach(letter => {
        const li = `<li>${letter}</li>`;
        ul.insertAdjacentHTML("beforeend", li);
    });
    

}

function randomNumbersArray(length){
    return Array.from({ length }, () => Math.floor(Math.random() * 100));
}


function bubbleSort(array){
    let isSwapped = true;
    while(isSwapped){

        isSwapped = false;
        for (let i = 0; i < array.length-1; i++){
            if(array[i] > array[i + 1]){
                isSwapped = true;
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }

    }

    return array;
}


