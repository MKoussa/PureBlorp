/*jshint esversion: 6 */
//First and last freq are the steps 
const majorKeys4 = [246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
const minorKeys4 = [233.08, 277.18, 311.13, 369.99, 415.30, 466.16, 554.37];

const majorKeys5 = [493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
const minorKeys5 = [466.16, 554.37, 622.25, 739.99, 830.61, 932.33, 1108.73];

const majorKeys6 = [987.77, 1046.50, 1174.66];

//
let majorKeyWidth = Math.min(((browserWidth - 10) / 15) - 2, 50);
let majorKeyHeight = majorKeyWidth * 3;
//


keyPressed = function (mouseX, mouseY, keyboardPositionRightPressedVar, keyboardPositionDown) {
    setOscParameters();
    let minorKeyWidth = majorKeyWidth / 1.6;
    let minorKeyHeight = majorKeyHeight / 2;
    let minorKeyPosition = majorKeyWidth;
    let minorKeyPositionRight = keyboardPositionRightPressedVar + (majorKeyWidth / 1.5);
    let minorKeysToSkip = [2, 6, 9, 13];
    let vco1PitchSliderValue = (vco1PitchSlider.value() / 100) / 2;
    let vco2PitchSliderValue = (vco2PitchSlider.value() / 100) / 2;

    for (keyPressedMajorKeyIterator = 0; keyPressedMajorKeyIterator < 15; keyPressedMajorKeyIterator++) {
        if (mouseX > minorKeyPosition * keyPressedMajorKeyIterator + minorKeyPositionRight && mouseX < (minorKeyPosition * keyPressedMajorKeyIterator + minorKeyPositionRight) + minorKeyWidth * 2 && mouseY < keyboardPositionDown + minorKeyHeight && !minorKeysToSkip.includes(keyPressedMajorKeyIterator)) {
            if (keyPressedMajorKeyIterator > 9) {
                osc1.freq(minorKeys5[keyPressedMajorKeyIterator - 7] + ((minorKeys5[keyPressedMajorKeyIterator - 6] - minorKeys5[keyPressedMajorKeyIterator - 7]) * vco1PitchSliderValue));
                osc2.freq(minorKeys5[keyPressedMajorKeyIterator - 7] + ((minorKeys5[keyPressedMajorKeyIterator - 6] - minorKeys5[keyPressedMajorKeyIterator - 7]) * vco2PitchSliderValue));
            }
            else if (keyPressedMajorKeyIterator > 6 && keyPressedMajorKeyIterator < 9) {
                osc1.freq(minorKeys5[keyPressedMajorKeyIterator - 6] + ((minorKeys5[keyPressedMajorKeyIterator - 5] - minorKeys5[keyPressedMajorKeyIterator - 6]) * vco1PitchSliderValue));
                osc2.freq(minorKeys5[keyPressedMajorKeyIterator - 6] + ((minorKeys5[keyPressedMajorKeyIterator - 5] - minorKeys5[keyPressedMajorKeyIterator - 6]) * vco2PitchSliderValue));
            }
            else if (keyPressedMajorKeyIterator > 2 && keyPressedMajorKeyIterator < 6) {
                osc1.freq(minorKeys4[keyPressedMajorKeyIterator] + ((minorKeys4[keyPressedMajorKeyIterator + 1] - minorKeys4[keyPressedMajorKeyIterator]) * vco1PitchSliderValue));
                osc2.freq(minorKeys4[keyPressedMajorKeyIterator] + ((minorKeys4[keyPressedMajorKeyIterator + 1] - minorKeys4[keyPressedMajorKeyIterator]) * vco2PitchSliderValue));
            }
            else {
                osc1.freq(minorKeys4[keyPressedMajorKeyIterator + 1] + ((minorKeys4[keyPressedMajorKeyIterator] - minorKeys4[keyPressedMajorKeyIterator + 1]) * vco1PitchSliderValue));
                osc2.freq(minorKeys4[keyPressedMajorKeyIterator + 1] + ((minorKeys4[keyPressedMajorKeyIterator] - minorKeys4[keyPressedMajorKeyIterator + 1]) * vco2PitchSliderValue));
            }
        }
        else if (mouseX > (majorKeyWidth * keyPressedMajorKeyIterator + keyboardPositionRightPressedVar) && mouseX < majorKeyWidth * (keyPressedMajorKeyIterator + 1) + keyboardPositionRightPressedVar && mouseY < majorKeyHeight + keyboardPositionDown) {
            if (keyPressedMajorKeyIterator == 14) {
                osc1.freq(majorKeys6[keyPressedMajorKeyIterator - 13] + ((majorKeys6[keyPressedMajorKeyIterator - 12] - majorKeys6[keyPressedMajorKeyIterator - 13]) * vco1PitchSliderValue));
                osc2.freq(majorKeys6[keyPressedMajorKeyIterator - 13] + ((majorKeys6[keyPressedMajorKeyIterator - 12] - majorKeys6[keyPressedMajorKeyIterator - 13]) * vco2PitchSliderValue));
            }
            else if (keyPressedMajorKeyIterator > 6 && keyPressedMajorKeyIterator <= 13) {
                osc1.freq(majorKeys5[keyPressedMajorKeyIterator - 6] + ((majorKeys5[keyPressedMajorKeyIterator - 5] - majorKeys5[keyPressedMajorKeyIterator - 6]) * vco1PitchSliderValue));
                osc2.freq(majorKeys5[keyPressedMajorKeyIterator - 6] + ((majorKeys5[keyPressedMajorKeyIterator - 5] - majorKeys5[keyPressedMajorKeyIterator - 6]) * vco2PitchSliderValue));
            }
            else if (keyPressedMajorKeyIterator <= 6) {
                osc1.freq(majorKeys4[keyPressedMajorKeyIterator + 1] + ((majorKeys4[keyPressedMajorKeyIterator + 2] - majorKeys4[keyPressedMajorKeyIterator + 1]) * vco1PitchSliderValue));
                osc2.freq(majorKeys4[keyPressedMajorKeyIterator + 1] + ((majorKeys4[keyPressedMajorKeyIterator + 2] - majorKeys4[keyPressedMajorKeyIterator + 1]) * vco2PitchSliderValue));
            }
        }
    }
    osc1Env.play(osc1);
    osc2Env.play(osc2);
};

drawKeyboard = function (keyboardPositionDown, keyboardPositionRightDrawlet) {
    fill(240);//Make the keys white

    let majorKeyIteration;
    for (majorKeyIteration = 0; majorKeyIteration < 15; majorKeyIteration++) {
        if (majorKeyIteration == 0) {
            rect((majorKeyWidth * majorKeyIteration) + keyboardPositionRightDrawlet, keyboardPositionDown, majorKeyWidth, majorKeyHeight, 10, 0, 7, 18);
        }
        else if (majorKeyIteration == 14) {
            rect((majorKeyWidth * majorKeyIteration) + keyboardPositionRightDrawlet, keyboardPositionDown, majorKeyWidth, majorKeyHeight, 0, 10, 7, 18);
        }
        else {
            rect((majorKeyWidth * majorKeyIteration) + keyboardPositionRightDrawlet, keyboardPositionDown, majorKeyWidth, majorKeyHeight, 0, 0, 7, 18);
        }

    }

    fill(20);//Make the keys black
    let minorKeyWidth = majorKeyWidth / 1.6;
    let minorKeyHeight = majorKeyHeight / 2;
    let minorKeyPosition = majorKeyWidth;
    let minorKeyPositionRight = keyboardPositionRight + (majorKeyWidth / 1.5);

    let minorKeysToSkip = [2, 6, 9, 13];
    let minorKeyIteration;
    for (minorKeyIteration = 0; minorKeyIteration < 14; minorKeyIteration++) {
        if (!minorKeysToSkip.includes(minorKeyIteration)) {
            rect(minorKeyPosition * minorKeyIteration + minorKeyPositionRight, keyboardPositionDown, minorKeyWidth, minorKeyHeight, 0, 0, 18, 7);
        }
    }
};
