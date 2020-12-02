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


//when mouse enters the div mousewatcher, snitchUpdater is called which displays In or Out
function snitchAttacher() {
    const mouseWatcher = document.querySelector('#mousewatcher');
    mouseWatcher.addEventListener('mouseover', snitchUpdater);
    mouseWatcher.addEventListener('mouseout', snitchUpdater);
}


// The div `mousereporter` contains a paragraph `report`. When the mouse is anywhere over `mousereporter`, the
// `report` paragraph should be updated to include the position of the mouse within the screen, thus `x: 000 y: 000`.
// Write a function `reportAttacher` that associates the mousemove event with a `reportUpdater` function.
// Also write the `reportUpdater` function (you may wish to base this on `snitchUpdater`) which receives a single
// event object parameter and used the data in this object to update the `report` element. Hint: there are screenX
// and screenY properties in the event object.
function reportAttacher() {
    const mousereporter = document.querySelector('#mousereporter');
    mousereporter.addEventListener('mousemove', reportUpdater);
}

function reportUpdater(event) {
    const report = document.querySelector('#report');
    report.textContent = `x: ${event.screenX} y: ${event.screenY}`;
}

