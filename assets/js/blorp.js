import p5 from './p5/p5'
import './p5/addons/p5.sound'
import Labels from './displayLabels'
import Slider from './slider';
import Oscillator from './oscillator';
import Keyboard from './keyboard';


let keyboardPositionRight;
let keyboardPositionDown;

let sliders;
let oscillators;
let keyboard;

const browserWidth = window.innerWidth;
const browserHeight = window.innerHeight;

const s = (sketch) => {
    sketch.setup = () => {
        sketch.frameRate(1);

        keyboardPositionRight = 10;
        keyboardPositionDown = browserHeight - (Math.min(((browserWidth - 10) / 15) - 2, 50) * 4);

        sketch.createCanvas(browserWidth - 20, browserHeight - 20);
        sketch.background('#23543c');
        Labels.displayLabels(sketch, browserWidth);
        sliders = new Slider(sketch, browserWidth);
        oscillators = new Oscillator(sliders);
        oscillators.buildOscillators();
        keyboard = new Keyboard(sketch, browserWidth, keyboardPositionDown, keyboardPositionRight);
    };

    sketch.draw = () => {
        sketch.background('#23543c');
        sketch.cursor('CROSS'); // Draw cursor as cross
        keyboard.drawKeyboard(sketch, keyboardPositionDown, keyboardPositionRight);
    };

    sketch.mousePressed = () => {
        if (sketch.getAudioContext().state !== 'running') {
            sketch.getAudioContext().resume();
        }
        if (sketch.mouseY > keyboardPositionDown && sketch.mouseY < keyboardPositionDown + keyboard.majorKeyHeight && sketch.mouseX > keyboardPositionRight && sketch.mouseX < keyboardPositionRight + (keyboard.majorKeyWidth * 15)) {
            keyboard.keyPressed(oscillators, sliders, sketch.mouseX, sketch.mouseY, keyboardPositionRight, keyboardPositionDown);
        }
    }
};

let blorp = new p5(s, 'blorp');