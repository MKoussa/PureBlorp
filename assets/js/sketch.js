/*jshint esversion: 6 */

let browserWidth = $(window).width();
let browserHeight = $(window).height();

//Set Keyboard position
let keyboardPositionRight;
let keyboardPositionDown;

function setup() {
    browserWidth = $(window).width();
    browserHeight = $(window).height();

    frameRate(1);

    keyboardPositionRight = 10;
    keyboardPositionDown = browserHeight - (Math.min(((browserWidth - 10) / 15) - 2, 50) * 4);

    createCanvas($(window).width() - 20, $(window).height() - 20);
    background('#23543c');
    displayLabels();
    buildSliders();
    buildOscillators();

}

function draw() {
    background('#23543c');
    cursor(CROSS); // Draw cursor as cross
    drawKeyboard(keyboardPositionDown, keyboardPositionRight);
}

function mousePressed() {
    if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    }
    if (mouseY > keyboardPositionDown && mouseY < keyboardPositionDown + majorKeyHeight && mouseX > keyboardPositionRight && mouseX < keyboardPositionRight + (majorKeyWidth * 15)) {
        keyPressed(mouseX, mouseY, keyboardPositionRight, keyboardPositionDown);
    }
}
