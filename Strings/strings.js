import { countLetters, countSpaces, everyOtherLetter, reverseIt, wordCount } from './strings-utils.js';

const exerciseButton1 = document.getElementById('submit1');
const input1 = document.getElementById('input1');
const answer1 = document.getElementById('exercise-box-1');

const exerciseButton2 = document.getElementById('submit2');
const input2 = document.getElementById('input2');
const answer2 = document.getElementById('exercise-box-2');

const exerciseButton3 = document.getElementById('submit3');
const input3 = document.getElementById('input3');
const answer3 = document.getElementById('exercise-box-3');

const exerciseButton4 = document.getElementById('submit4');
const input4 = document.getElementById('input4');
const answer4 = document.getElementById('exercise-box-4'); 

const exerciseButton5 = document.getElementById('submit5');
const input5 = document.getElementById('input5'); 
const answer5 = document.getElementById('exercise-box-5');


exerciseButton1.addEventListener('click', () => { 
    answer1.innerHTML += countLetters(input1);
});

exerciseButton2.addEventListener('click', () => {
    // console.log('im in the button2');
    answer2.innerHTML += countSpaces(input2);

});

exerciseButton3.addEventListener('click', () => {

    answer3.innerHTML += everyOtherLetter(input3);

});

exerciseButton4.addEventListener('click', () => {

  
    answer4.innerHTML += reverseIt(input4);
});

exerciseButton5.addEventListener('click', () => {
  

    answer5.innerHTML += wordCount(input5);
});

