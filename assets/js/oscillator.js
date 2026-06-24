/*jshint esversion: 6 */
let envArr = [];
let oscArr = [];
let envelopeCounter = 0;
let oscillatorCounter = 0;

let osc1;
let osc1Env;
let osc1WaveShape;

let osc1AttackLevel;
let osc1ReleaseLevel = 0;
let osc1Attack;
let osc1Decay;
let osc1Sustain;
let osc1Release;

let osc2;
let osc2Env;
let osc2WaveShape;

let osc2AttackLevel;
let osc2ReleaseLevel = 0;
let osc2Attack;
let osc2Decay;
let osc2Sustain;
let osc2Release;

let maxOsc = 60;
let maxEnv = 60;

getEnvelope = function () {
    let tempEnv;
    if (envArr === undefined || envArr.length == 0) {
        for (let buildEnvArrIter = 0; buildEnvArrIter < maxEnv; buildEnvArrIter++) {
            tempEnv = new p5.Envelope();
            envArr.push(tempEnv);
        }
    }
    if (envelopeCounter > maxEnv) {
        envelopeCounter = 0;
        tempEnv = envArr[envelopeCounter];
        return tempEnv;
    }
    envelopeCounter++;
    tempEnv = envArr[envelopeCounter];
    return tempEnv;
};


getOscillator = function () {
    let tempOsc;
    if (oscArr === undefined || oscArr.length == 0) {
        for (let buildOscArrIter = 0; buildOscArrIter < maxOsc; buildOscArrIter++) {
            tempOsc = new p5.Oscillator();
            oscArr.push(tempOsc);
        }
    }
    if (oscillatorCounter > maxOsc) {
        oscillatorCounter = 0;
        tempOsc = oscArr[oscillatorCounter];
        tempOsc.stop();
        return tempOsc;
    }
    oscillatorCounter++;
    tempOsc = oscArr[oscillatorCounter];
    tempOsc.stop();
    return tempOsc;
};


setOscParameters = function () {
    osc1 = getOscillator();
    osc2 = getOscillator();

    osc1Env = getEnvelope();
    osc2Env = getEnvelope();

    osc1AttackLevel = (vco1VolumeSlider.value() / 100);
    osc1Attack = (vco1AttackSlider.value() / 100);
    osc1Decay = (vco1DecaySlider.value() / 100);
    osc1Sustain = (vco1SustainSlider.value() / 100);
    osc1Release = (vco1ReleaseSlider.value() / 100);

    switch (vco1ShapeSlider.value()) {
        case 0:
            osc1WaveShape = 'sine';
            break;
        case 1:
            osc1WaveShape = 'triangle';
            break;
        case 2:
            osc1WaveShape = 'sawtooth';
            break;
        case 3:
            osc1WaveShape = 'square';
            break;
    }

    osc1Env.setADSR(osc1Attack, osc1Decay, osc1Sustain, osc1Release);
    osc1Env.setRange(osc1AttackLevel, osc1ReleaseLevel);

    osc1.setType(osc1WaveShape);
    osc1.amp(osc1Env);
    osc1.start();

    osc2AttackLevel = (vco2VolumeSlider.value() / 100);
    osc2Attack = (vco2AttackSlider.value() / 100);
    osc2Decay = (vco2DecaySlider.value() / 100);
    osc2Sustain = (vco2SustainSlider.value() / 100);
    osc2Release = (vco2ReleaseSlider.value() / 100);

    switch (vco2ShapeSlider.value()) {
        case 0:
            osc2WaveShape = 'sine';
            break;
        case 1:
            osc2WaveShape = 'triangle';
            break;
        case 2:
            osc2WaveShape = 'sawtooth';
            break;
        case 3:
            osc2WaveShape = 'square';
            break;
    }

    osc2Env.setADSR(osc2Attack, osc2Decay, osc2Sustain, osc2Release);
    osc2Env.setRange(osc2AttackLevel, osc2ReleaseLevel);

    osc2.setType(osc2WaveShape);
    osc2.amp(osc2Env);
    osc2.start();
};


buildOscillators = function () {
    osc1 = new p5.Oscillator();
    osc1.setType('sine');

    osc1AttackLevel = (vco1VolumeSlider.value() / 100);
    osc1Attack = (vco1AttackSlider.value() / 100);
    osc1Decay = (vco1DecaySlider.value() / 100);
    osc1Sustain = (vco1SustainSlider.value() / 100);
    osc1Release = (vco1ReleaseSlider.value() / 100);
    osc1Env = new p5.Envelope();

    //osc1Env.setADSR(osc1Attack, osc1Decay, osc1Sustain, osc1Release);
    osc1Env.setRange(osc1AttackLevel, osc1ReleaseLevel);
    osc1.amp(osc1Env);
    osc1.start();

    osc2 = new p5.Oscillator();
    osc2.setType('sine');
    osc2AttackLevel = (vco2VolumeSlider.value() / 100);
    osc2Attack = (vco2AttackSlider.value() / 100);
    osc2Decay = (vco2DecaySlider.value() / 100);
    osc2Sustain = (vco2SustainSlider.value() / 100);
    osc2Release = (vco2ReleaseSlider.value() / 100);
    osc2Env = new p5.Envelope();
    osc2Env.setADSR(osc2Attack, osc2Decay, osc2Sustain, osc2Release);
    osc2Env.setRange(osc2AttackLevel, osc2ReleaseLevel);
    osc2.amp(osc2Env);
    osc2.start();
};

