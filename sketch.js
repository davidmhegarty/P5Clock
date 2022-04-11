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

    hrArc = map(hr % 12, 0, 12, 0, 360);
    mnArc = map(mn, 0, 60, 0, 360);
    secArc = map(sec, 0, 60, 0, 360);

    noFill();


    push();
    fill(255);
    noStroke();
    textSize(30);
    textAlign(CENTER);
    text(hr + ':' + mn + ':' + sec, 200, 400);
    pop();

    translate(200, 200);
    rotate(-90);

    push();
    stroke(255);
    strokeWeight(4);
    
    ellipse(0, 0, 300, 300);
    pop();

    push();
    stroke(199,36,177);
    strokeWeight(5);
    arc(0, 0, 270, 270, 0, hrArc);
    pop();

    push();
    stroke(68,214,44);
    strokeWeight(5);
    arc(0, 0, 250, 250, 0, mnArc);
    pop();

    push();
    stroke(255,173,0);
    strokeWeight(5);
    arc(0, 0, 230, 230, 0, secArc);
    pop();

}
