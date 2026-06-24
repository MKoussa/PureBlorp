/*jshint esversion: 6 */
//First and last freq are the steps 
export default class Keyboard {

    constructor(sketch, browserWidth, keyboardPositionDown, keyboardPositionRight) {
        this.majorKeys4 = [246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25];
        this.minorKeys4 = [233.08, 277.18, 311.13, 369.99, 415.30, 466.16, 554.37];
        this.majorKeys5 = [493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];
        this.minorKeys5 = [466.16, 554.37, 622.25, 739.99, 830.61, 932.33, 1108.73];
        this.majorKeys6 = [987.77, 1046.50, 1174.66];
        this.majorKeyWidth = Math.min(((browserWidth - 10) / 15) - 2, 50);
        this.majorKeyHeight = this.majorKeyWidth * 3;

        this.drawKeyboard(sketch, keyboardPositionDown, keyboardPositionRight);
        //
    }


    keyPressed(oscillators, sliders, mouseX, mouseY, keyboardPositionRightPressedVar, keyboardPositionDown) {
        oscillators.setOscParameters();
        let minorKeyWidth = this.majorKeyWidth / 1.6;
        let minorKeyHeight = this.majorKeyHeight / 2;
        let minorKeyPosition = this.majorKeyWidth;
        let minorKeyPositionRight = keyboardPositionRightPressedVar + (this.majorKeyWidth / 1.5);
        let minorKeysToSkip = [2, 6, 9, 13];
        let vco1PitchSliderValue = (sliders.vco1PitchSlider.value() / 100) / 2;
        let vco2PitchSliderValue = (sliders.vco2PitchSlider.value() / 100) / 2;

        for (let keyPressedMajorKeyIterator = 0; keyPressedMajorKeyIterator < 15; keyPressedMajorKeyIterator++) {
            if (mouseX > minorKeyPosition * keyPressedMajorKeyIterator + minorKeyPositionRight && mouseX < (minorKeyPosition * keyPressedMajorKeyIterator + minorKeyPositionRight) + minorKeyWidth * 2 && mouseY < keyboardPositionDown + minorKeyHeight && !minorKeysToSkip.includes(keyPressedMajorKeyIterator)) {
                if (keyPressedMajorKeyIterator > 9) {
                    oscillators.osc1.freq(this.minorKeys5[keyPressedMajorKeyIterator - 7] + ((this.minorKeys5[keyPressedMajorKeyIterator - 6] - this.minorKeys5[keyPressedMajorKeyIterator - 7]) * vco1PitchSliderValue));
                    oscillators.osc2.freq(this.minorKeys5[keyPressedMajorKeyIterator - 7] + ((this.minorKeys5[keyPressedMajorKeyIterator - 6] - this.minorKeys5[keyPressedMajorKeyIterator - 7]) * vco2PitchSliderValue));
                }
                else if (keyPressedMajorKeyIterator > 6 && keyPressedMajorKeyIterator < 9) {
                    oscillators.osc1.freq(this.minorKeys5[keyPressedMajorKeyIterator - 6] + ((this.minorKeys5[keyPressedMajorKeyIterator - 5] - this.minorKeys5[keyPressedMajorKeyIterator - 6]) * vco1PitchSliderValue));
                    oscillators.osc2.freq(this.minorKeys5[keyPressedMajorKeyIterator - 6] + ((this.minorKeys5[keyPressedMajorKeyIterator - 5] - this.minorKeys5[keyPressedMajorKeyIterator - 6]) * vco2PitchSliderValue));
                }
                else if (keyPressedMajorKeyIterator > 2 && keyPressedMajorKeyIterator < 6) {
                    oscillators.osc1.freq(this.minorKeys4[keyPressedMajorKeyIterator] + ((this.minorKeys4[keyPressedMajorKeyIterator + 1] - this.minorKeys4[keyPressedMajorKeyIterator]) * vco1PitchSliderValue));
                    oscillators.osc2.freq(this.minorKeys4[keyPressedMajorKeyIterator] + ((this.minorKeys4[keyPressedMajorKeyIterator + 1] - this.minorKeys4[keyPressedMajorKeyIterator]) * vco2PitchSliderValue));
                }
                else {
                    oscillators.osc1.freq(this.minorKeys4[keyPressedMajorKeyIterator + 1] + ((this.minorKeys4[keyPressedMajorKeyIterator] - this.minorKeys4[keyPressedMajorKeyIterator + 1]) * vco1PitchSliderValue));
                    oscillators.osc2.freq(this.minorKeys4[keyPressedMajorKeyIterator + 1] + ((this.minorKeys4[keyPressedMajorKeyIterator] - this.minorKeys4[keyPressedMajorKeyIterator + 1]) * vco2PitchSliderValue));
                }
            }
            else if (mouseX > (this.majorKeyWidth * keyPressedMajorKeyIterator + keyboardPositionRightPressedVar) && mouseX < this.majorKeyWidth * (keyPressedMajorKeyIterator + 1) + keyboardPositionRightPressedVar && mouseY < this.majorKeyHeight + keyboardPositionDown) {
                if (keyPressedMajorKeyIterator == 14) {
                    oscillators.osc1.freq(this.majorKeys6[keyPressedMajorKeyIterator - 13] + ((this.majorKeys6[keyPressedMajorKeyIterator - 12] - this.majorKeys6[keyPressedMajorKeyIterator - 13]) * vco1PitchSliderValue));
                    oscillators.osc2.freq(this.majorKeys6[keyPressedMajorKeyIterator - 13] + ((this.majorKeys6[keyPressedMajorKeyIterator - 12] - this.majorKeys6[keyPressedMajorKeyIterator - 13]) * vco2PitchSliderValue));
                }
                else if (keyPressedMajorKeyIterator > 6 && keyPressedMajorKeyIterator <= 13) {
                    oscillators.osc1.freq(this.majorKeys5[keyPressedMajorKeyIterator - 6] + ((this.majorKeys5[keyPressedMajorKeyIterator - 5] - this.majorKeys5[keyPressedMajorKeyIterator - 6]) * vco1PitchSliderValue));
                    oscillators.osc2.freq(this.majorKeys5[keyPressedMajorKeyIterator - 6] + ((this.majorKeys5[keyPressedMajorKeyIterator - 5] - this.majorKeys5[keyPressedMajorKeyIterator - 6]) * vco2PitchSliderValue));
                }
                else if (keyPressedMajorKeyIterator <= 6) {
                    oscillators.osc1.freq(this.majorKeys4[keyPressedMajorKeyIterator + 1] + ((this.majorKeys4[keyPressedMajorKeyIterator + 2] - this.majorKeys4[keyPressedMajorKeyIterator + 1]) * vco1PitchSliderValue));
                    oscillators.osc2.freq(this.majorKeys4[keyPressedMajorKeyIterator + 1] + ((this.majorKeys4[keyPressedMajorKeyIterator + 2] - this.majorKeys4[keyPressedMajorKeyIterator + 1]) * vco2PitchSliderValue));
                }
            }
        }
        oscillators.osc1Env.play(oscillators.osc1);
        oscillators.osc2Env.play(oscillators.osc2);
    }

    drawKeyboard(sketch, keyboardPositionDown, keyboardPositionRightDrawlet) {
        sketch.fill(240);//Make the keys white

        let majorKeyIteration;
        for (let majorKeyIteration = 0; majorKeyIteration < 15; majorKeyIteration++) {
            if (majorKeyIteration == 0) {
                sketch.rect((this.majorKeyWidth * majorKeyIteration) + keyboardPositionRightDrawlet, keyboardPositionDown, this.majorKeyWidth, this.majorKeyHeight, 10, 0, 7, 18);
            }
            else if (majorKeyIteration == 14) {
                sketch.rect((this.majorKeyWidth * majorKeyIteration) + keyboardPositionRightDrawlet, keyboardPositionDown, this.majorKeyWidth, this.majorKeyHeight, 0, 10, 7, 18);
            }
            else {
                sketch.rect((this.majorKeyWidth * majorKeyIteration) + keyboardPositionRightDrawlet, keyboardPositionDown, this.majorKeyWidth, this.majorKeyHeight, 0, 0, 7, 18);
            }

        }

        sketch.fill(20);//Make the keys black
        let minorKeyWidth = this.majorKeyWidth / 1.6;
        let minorKeyHeight = this.majorKeyHeight / 2;
        let minorKeyPosition = this.majorKeyWidth;
        let minorKeyPositionRight = keyboardPositionRightDrawlet + (this.majorKeyWidth / 1.5);

        let minorKeysToSkip = [2, 6, 9, 13];
        let minorKeyIteration;
        for (minorKeyIteration = 0; minorKeyIteration < 14; minorKeyIteration++) {
            if (!minorKeysToSkip.includes(minorKeyIteration)) {
                sketch.rect(minorKeyPosition * minorKeyIteration + minorKeyPositionRight, keyboardPositionDown, minorKeyWidth, minorKeyHeight, 0, 0, 18, 7);
            }
        }
    };
}