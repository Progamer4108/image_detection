img = "";
status = "";

function preload() {
    img = loadImage("Bedroom.jpeg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object's Detected";
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000");
    text("Door", 390, 35);
    noFill();
    stroke("#FF0000");
    rect(380,20, 150, 300);

    fill("#FF0000");
    text("Almirah", 260, 35);
    noFill();
    stroke("#FF0000");
    rect(250,20, 97, 250 );
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function back() {
    window.location = "index.html";
}