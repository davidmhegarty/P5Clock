/* From Code Train - Coding Challenge #74: Clock with p5.js

https://www.youtube.com/watch?v=E4RyStef-gY&ab_channel=TheCodingTrain

*/
function setup() {
    createCanvas(900, 600);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    let hr = hour();
    let mn = minute();
    let sec = second();

    drawNeonClock(hr, mn, sec);

    drawDigitalDisplay(hr, mn, sec, 400, 500);

}

function drawDigitalDisplay(_hr, _mn, _sec, _x, _y) {
    push();
    fill(255);
    noStroke();
    textSize(30);
    textAlign(CENTER);
    text(nf(_hr,2) + ':' + nf(_mn,2) + ':' + nf(_sec,2), _x, _y);
    pop();
}

function drawNeonClock(_hr, _mn, _sec) {
    
    hrArc = map(_hr % 12, 0, 12, 0, 330) + 
            map(_mn, 0, 60, 0, 29.5) + 
            map(_sec, 0, 60, 0, 0.5);
    mnArc = map(_mn, 0, 60, 0, 354) + map(_sec, 0, 60, 0, 6);
    secArc = map(_sec, 0, 60, 0, 360);

    push();
    noFill();
    translate(400, 300);
    rotate(-90);
    stroke(255);
    strokeWeight(4);
    ellipse(0, 0, 300, 300);
    
    // seconds arc and hand
    drawArc(230, 100, secArc, color(255,173,0));
    // minutes arc and hand
    drawArc(250, 75, mnArc, color(68,214,44));
    // hours arc and hand
    drawArc(270, 50, hrArc, color(199,36,177));

    pop();
}

function drawArc(_width, _lineLength, _arc, _colour) {
    push();
    stroke(_colour);
    strokeWeight(5);
    arc(0, 0, _width, _width, 0, _arc);
    rotate(_arc);
    line(0, 0, _lineLength, 0);
    pop();
}