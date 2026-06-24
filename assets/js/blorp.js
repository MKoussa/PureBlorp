import p5 from '../../priv/static/assets/js/p5'
import Labels from './displayLabels'

let keyboardPositionRight;
let keyboardPositionDown;

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
        // buildSliders();
        // buildOscillators();
    };

    sketch.draw = () => {


        sketch.background('#23543c');
        sketch.cursor('CROSS'); // Draw cursor as cross
        // drawKeyboard(keyboardPositionDown, keyboardPositionRight);
    };
};

let myp5 = new p5(s, 'blorp');