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


function handleInput(e) {
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
    input1.addEventListener('input', handleInput);
    input2.addEventListener('input', handleInput);
}

/*
function handleInput() {
    const out = document.querySelector('#greeting');
    const fn = document.querySelector('#fn')?.value;
    const sn = document.querySelector('#sn')?.value;
    const age = document.querySelector('#age')?.valueAsNumber;
    if (fn && sn && age) {
        out.textContent =
            `Hello ${fn} ${sn}!  Next year you'll be ${age + 1}`;
    }
}

const inputs = document.querySelectorAll('input');
for (const i of inputs) {
    i.addEventListener('input', handleInput);
}

 */


/*

 function handleClick(e) {
    const out = document.querySelector('#out');
    out.textContent = 'You clicked ' + e.target.textContent;
  }

  function switchElement(e) {
    e.target.classList.toggle('active');
  }

  const buttons = document.querySelectorAll('button');
  for (const b of buttons) {
    b.addEventListener('click', handleClick);
    b.addEventListener('click', switchElement);
  }


 */

