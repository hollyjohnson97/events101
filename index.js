'use strict';

/**
 * Add your functions here...
 */

//when clicked, the text within the button is displayed on the screen
function targetTextToConsole(event) {
    console.log(event.target.textContent);
}

function tttcAttacher() {
    const button0 = document.querySelector('#button0');
    button0.addEventListener('click', targetTextToConsole);
}


//attaches toggle to paragraph when clicked.
function lovelyParaAttacher() {
    const para = document.querySelector('#thisisalovelyparagraph');
    para.addEventListener('click', lovelyToggle)
}


//attaches lovelyToggle to button1 when clicked
function lovelyButtonAttacher() {
    const button1 = document.querySelector('#button1');
    button1.addEventListener('click', lovelyToggle);
}

//this and concatAttacher take 2 input values and concatenate them
function handleInput() {
    const out = document.querySelector('#out1');
    const input1 = document.querySelector('#in1').value;
    const input2 = document.querySelector('#in2').value;
    if (input1 && input2) {
        out.textContent = input1 + input2;
    }
}

function concatAttacher() {
    const input1 = document.querySelector('#in1');
    const input2 = document.querySelector('#in2');
    input1.addEventListener('change', handleInput);
    input2.addEventListener('change', handleInput);
}


function snitchAttacher() {
    const mouseWatcher = document.querySelector('#mousewatcher');
    mouseWatcher.addEventListener('mouseover', snitchUpdater);
    mouseWatcher.addEventListener('mouseout', snitchUpdater);
}
