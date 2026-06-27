/*jshint esversion: 6 */
import p5 from './p5/p5'

export default class Oscillator {



    constructor(sliders) {
        this.envArr = [];
        this.oscArr = [];
        this.envelopeCounter = 0;
        this.oscillatorCounter = 0;
        this.osc1;
        this.osc1Env;
        this.osc1WaveShape;
        this.osc1AttackLevel;
        this.osc1ReleaseLevel = 0;
        this.osc1Attack;
        this.osc1Decay;
        this.osc1Sustain;
        this.osc1Release;
        this.osc2;
        this.osc2Env;
        this.osc2WaveShape;
        this.osc2AttackLevel;
        this.osc2ReleaseLevel = 0;
        this.osc2Attack;
        this.osc2Decay;
        this.osc2Sustain;
        this.osc2Release;
        this.maxOsc = 60;
        this.maxEnv = 60;
        this.sliders = sliders;

    }
    getEnvelope() {
        let tempEnv;
        if (this.envArr === undefined || this.envArr.length == 0) {
            for (let buildEnvArrIter = 0; buildEnvArrIter < this.maxEnv; buildEnvArrIter++) {
                tempEnv = new p5.Envelope();
                this.envArr.push(tempEnv);
            }
        }
        if (this.envelopeCounter >= this.maxEnv) {
            this.envelopeCounter = 0;
            tempEnv = this.envArr[this.envelopeCounter];
            return tempEnv;
        }
        tempEnv = this.envArr[this.envelopeCounter];
        this.envelopeCounter++;
        return tempEnv;
    }


    getOscillator() {
        let tempOsc;
        if (this.oscArr === undefined || this.oscArr.length == 0) {
            for (let buildOscArrIter = 0; buildOscArrIter < this.maxOsc; buildOscArrIter++) {
                tempOsc = new p5.Oscillator();
                this.oscArr.push(tempOsc);
            }
        }
        if (this.oscillatorCounter >= this.maxOsc) {
            this.oscillatorCounter = 0;
            tempOsc = this.oscArr[this.oscillatorCounter];
            tempOsc.stop();
            return tempOsc;
        }
        tempOsc = this.oscArr[this.oscillatorCounter];
        tempOsc.stop();
        this.oscillatorCounter++;
        return tempOsc;
    }


    setOscParameters() {
        this.osc1 = this.getOscillator();
        this.osc2 = this.getOscillator();
        this.osc1Env = this.getEnvelope();
        this.osc2Env = this.getEnvelope();
        this.osc1AttackLevel = (this.sliders.vco1VolumeSlider.value() / 100);
        this.osc1Attack = (this.sliders.vco1AttackSlider.value() / 100);
        this.osc1Decay = (this.sliders.vco1DecaySlider.value() / 100);
        this.osc1Sustain = (this.sliders.vco1SustainSlider.value() / 100);
        this.osc1Release = (this.sliders.vco1ReleaseSlider.value() / 100);

        switch (this.sliders.vco1ShapeSlider.value()) {
            case 0:
                this.osc1WaveShape = 'sine';
                break;
            case 1:
                this.osc1WaveShape = 'triangle';
                break;
            case 2:
                this.osc1WaveShape = 'sawtooth';
                break;
            case 3:
                this.osc1WaveShape = 'square';
                break;
        }

        this.osc1Env.setADSR(this.osc1Attack, this.osc1Decay, this.osc1Sustain, this.osc1Release);
        this.osc1Env.setRange(this.osc1AttackLevel, this.osc1ReleaseLevel);
        this.osc1.setType(this.osc1WaveShape);
        this.osc1.amp(this.osc1Env);
        this.osc1.start();
        this.osc2AttackLevel = (this.sliders.vco2VolumeSlider.value() / 100);
        this.osc2Attack = (this.sliders.vco2AttackSlider.value() / 100);
        this.osc2Decay = (this.sliders.vco2DecaySlider.value() / 100);
        this.osc2Sustain = (this.sliders.vco2SustainSlider.value() / 100);
        this.osc2Release = (this.sliders.vco2ReleaseSlider.value() / 100);

        switch (this.sliders.vco2ShapeSlider.value()) {
            case 0:
                this.osc2WaveShape = 'sine';
                break;
            case 1:
                this.osc2WaveShape = 'triangle';
                break;
            case 2:
                this.osc2WaveShape = 'sawtooth';
                break;
            case 3:
                this.osc2WaveShape = 'square';
                break;
        }

        this.osc2Env.setADSR(this.osc2Attack, this.osc2Decay, this.osc2Sustain, this.osc2Release);
        this.osc2Env.setRange(this.osc2AttackLevel, this.osc2ReleaseLevel);
        this.osc2.setType(this.osc2WaveShape);
        this.osc2.amp(this.osc2Env);
        this.osc2.start();
    }


    buildOscillators() {
        this.osc1 = new p5.Oscillator('sine');
        this.osc1AttackLevel = (this.sliders.vco1VolumeSlider.value() / 100);
        this.osc1Attack = (this.sliders.vco1AttackSlider.value() / 100);
        this.osc1Decay = (this.sliders.vco1DecaySlider.value() / 100);
        this.osc1Sustain = (this.sliders.vco1SustainSlider.value() / 100);
        this.osc1Release = (this.sliders.vco1ReleaseSlider.value() / 100);

        this.osc1Env = new p5.Envelope();
        this.osc1Env.setADSR(this.osc1Attack, this.osc1Decay, this.osc1Sustain, this.osc1Release);
        this.osc1Env.setRange(this.osc1AttackLevel, this.osc1ReleaseLevel);
        this.osc1.amp(this.osc1Env);
        this.osc1.start();

        this.osc2 = new p5.Oscillator('sine');
        this.osc2AttackLevel = (this.sliders.vco2VolumeSlider.value() / 100);
        this.osc2Attack = (this.sliders.vco2AttackSlider.value() / 100);
        this.osc2Decay = (this.sliders.vco2DecaySlider.value() / 100);
        this.osc2Sustain = (this.sliders.vco2SustainSlider.value() / 100);
        this.osc2Release = (this.sliders.vco2ReleaseSlider.value() / 100);

        this.osc2Env = new p5.Envelope();
        this.osc2Env.setADSR(this.osc2Attack, this.osc2Decay, this.osc2Sustain, this.osc2Release);
        this.osc2Env.setRange(this.osc2AttackLevel, this.osc2ReleaseLevel);
        this.osc2.amp(this.osc2Env);
        this.osc2.start();
    }

}