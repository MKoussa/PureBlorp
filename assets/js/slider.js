export default class Slider {


    constructor(sketch, browserWidth) {
        // this.buildSliders(sketch, browserWidth)
        this.vco1VolumeSlider = sketch.createSlider(1, 100, 25, 1);
        this.vco1VolumeSlider.position(Math.floor(browserWidth / 80), 80);
        this.vco1VolumeSlider.class("slider");

        this.vco1PitchSlider = sketch.createSlider(-100, 100, 0, 1);
        this.vco1PitchSlider.position(Math.floor(browserWidth / 80) + 50, 80);
        this.vco1PitchSlider.class("slider");

        this.vco1ShapeSlider = sketch.createSlider(0, 3, 0, 1);
        this.vco1ShapeSlider.position(Math.floor(browserWidth / 80) + 100, 80);
        this.vco1ShapeSlider.class("slider");

        this.vco1AttackSlider = sketch.createSlider(1, 100, 20, 1);
        this.vco1AttackSlider.position(Math.floor(browserWidth / 80) + 200, 80);
        this.vco1AttackSlider.class("slider");

        this.vco1DecaySlider = sketch.createSlider(1, 100, 20, 1);
        this.vco1DecaySlider.position(Math.floor(browserWidth / 80) + 250, 80);
        this.vco1DecaySlider.class("slider");

        this.vco1SustainSlider = sketch.createSlider(1, 100, 20, 1);
        this.vco1SustainSlider.position(Math.floor(browserWidth / 80) + 300, 80);
        this.vco1SustainSlider.class("slider");

        this.vco1ReleaseSlider = sketch.createSlider(1, 100, 20, 1);
        this.vco1ReleaseSlider.position(Math.floor(browserWidth / 80) + 350, 80);
        this.vco1ReleaseSlider.class("slider");

        this.vco2VolumeSlider = sketch.createSlider(1, 100, 25, 1);
        this.vco2VolumeSlider.position(Math.floor(browserWidth / 80), 200);
        this.vco2VolumeSlider.class("slider");

        this.vco2PitchSlider = sketch.createSlider(-100, 100, 0, 1);
        this.vco2PitchSlider.position(Math.floor(browserWidth / 80) + 50, 200);
        this.vco2PitchSlider.class("slider");

        this.vco2ShapeSlider = sketch.createSlider(0, 3, 0, 1);
        this.vco2ShapeSlider.position(Math.floor(browserWidth / 80) + 100, 200);
        this.vco2ShapeSlider.class("slider");

        this.vco2AttackSlider = sketch.createSlider(1, 100, 20, 1);
        this.vco2AttackSlider.position(Math.floor(browserWidth / 80) + 200, 200);
        this.vco2AttackSlider.class("slider");

        this.vco2DecaySlider = sketch.createSlider(1, 100, 20, 1);
        this.vco2DecaySlider.position(Math.floor(browserWidth / 80) + 250, 200);
        this.vco2DecaySlider.class("slider");

        this.vco2SustainSlider = sketch.createSlider(1, 100, 20, 1);
        this.vco2SustainSlider.position(Math.floor(browserWidth / 80) + 300, 200);
        this.vco2SustainSlider.class("slider");

        this.vco2ReleaseSlider = sketch.createSlider(1, 100, 20, 1);
        this.vco2ReleaseSlider.position(Math.floor(browserWidth / 80) + 350, 200);
        this.vco2ReleaseSlider.class("slider");

        this.filterEGAmountSlider = sketch.createSlider(1, 100, 20, 1);
        this.filterEGAmountSlider.position(Math.floor(browserWidth / 80, 200), 350);
        this.filterEGAmountSlider.class("medSlider");

        this.filterEGResonanceSlider = sketch.createSlider(1, 100, 20, 1);
        this.filterEGResonanceSlider.position(Math.floor(browserWidth / 80, 200) + 50, 350);
        this.filterEGResonanceSlider.class("medSlider");
    }
}