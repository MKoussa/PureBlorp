/*jshint esversion: 6 */

let vco1VolumeSlider;
let vco1PitchSlider;
let vco1ShapeSlider;

let vco1AttackSlider;
let vco1DecaySlider;
let vco1SustainSlider;
let vco1ReleaseSlider;

let vco2VolumeSlider;
let vco2PitchSlider;
let vco2ShapeSlider;

let vco2AttackSlider;
let vco2DecaySlider;
let vco2SustainSlider;
let vco2ReleaseSlider;

//Filter
let filterEGAmountSlider;
let filterEGResonanceSlider;

let sliderArr = [];

function buildSliders() {
    vco1VolumeSlider = createSlider(1, 100, 25, 1);
    vco1VolumeSlider.position(Math.floor(browserWidth / 80), 80);
    vco1VolumeSlider.class("slider");
    sliderArr.push(vco1VolumeSlider);

    vco1PitchSlider = createSlider(-100, 100, 0, 1);
    vco1PitchSlider.position(Math.floor(browserWidth / 80) + 50, 80);
    vco1PitchSlider.class("slider");
    sliderArr.push(vco1PitchSlider);

    vco1ShapeSlider = createSlider(0, 3, 0, 1);
    vco1ShapeSlider.position(Math.floor(browserWidth / 80) + 100, 80);
    vco1ShapeSlider.class("slider");
    sliderArr.push(vco1PitchSlider);

    vco1AttackSlider = createSlider(1, 100, 20, 1);
    vco1AttackSlider.position(Math.floor(browserWidth / 80) + 200, 80);
    vco1AttackSlider.class("slider");
    sliderArr.push(vco1AttackSlider);

    vco1DecaySlider = createSlider(1, 100, 20, 1);
    vco1DecaySlider.position(Math.floor(browserWidth / 80) + 250, 80);
    vco1DecaySlider.class("slider");
    sliderArr.push(vco1DecaySlider);

    vco1SustainSlider = createSlider(1, 100, 20, 1);
    vco1SustainSlider.position(Math.floor(browserWidth / 80) + 300, 80);
    vco1SustainSlider.class("slider");
    sliderArr.push(vco1SustainSlider);

    vco1ReleaseSlider = createSlider(1, 100, 20, 1);
    vco1ReleaseSlider.position(Math.floor(browserWidth / 80) + 350, 80);
    vco1ReleaseSlider.class("slider");
    sliderArr.push(vco1ReleaseSlider);

    vco2VolumeSlider = createSlider(1, 100, 25, 1);
    vco2VolumeSlider.position(Math.floor(browserWidth / 80), 200);
    vco2VolumeSlider.class("slider");
    sliderArr.push(vco2VolumeSlider);

    vco2PitchSlider = createSlider(-100, 100, 0, 1);
    vco2PitchSlider.position(Math.floor(browserWidth / 80) + 50, 200);
    vco2PitchSlider.class("slider");
    sliderArr.push(vco2PitchSlider);

    vco2ShapeSlider = createSlider(0, 3, 0, 1);
    vco2ShapeSlider.position(Math.floor(browserWidth / 80) + 100, 200);
    vco2ShapeSlider.class("slider");
    sliderArr.push(vco2PitchSlider);

    vco2AttackSlider = createSlider(1, 100, 20, 1);
    vco2AttackSlider.position(Math.floor(browserWidth / 80) + 200, 200);
    vco2AttackSlider.class("slider");
    sliderArr.push(vco2AttackSlider);

    vco2DecaySlider = createSlider(1, 100, 20, 1);
    vco2DecaySlider.position(Math.floor(browserWidth / 80) + 250, 200);
    vco2DecaySlider.class("slider");
    sliderArr.push(vco2DecaySlider);

    vco2SustainSlider = createSlider(1, 100, 20, 1);
    vco2SustainSlider.position(Math.floor(browserWidth / 80) + 300, 200);
    vco2SustainSlider.class("slider");
    sliderArr.push(vco2SustainSlider);

    vco2ReleaseSlider = createSlider(1, 100, 20, 1);
    vco2ReleaseSlider.position(Math.floor(browserWidth / 80) + 350, 200);
    vco2ReleaseSlider.class("slider");
    sliderArr.push(vco2ReleaseSlider);

    //filter
    filterEGAmountSlider = createSlider(1, 100, 20, 1);
    filterEGAmountSlider.position(Math.floor(browserWidth / 80, 200), 350);
    filterEGAmountSlider.class("medSlider");
    sliderArr.push(filterEGAmountSlider);

    filterEGResonanceSlider = createSlider(1, 100, 20, 1);
    filterEGResonanceSlider.position(Math.floor(browserWidth / 80, 200) + 50, 350);
    filterEGResonanceSlider.class("medSlider");
    sliderArr.push(filterEGResonanceSlider);
}



