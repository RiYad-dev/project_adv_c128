let harry_potter;
let peter_pan;
let leftWristX;
let leftWristY;
let rightWristX;
let rightWristY;
function preload() {
    harry_potter = loadSound('harry_potter.mp3');
    peter_pan = loadSound('peter_pan.mp3');
}
function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(440, 250);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 500, 400);
}

function modelLoaded() {
    console.log('PoseNet is initialised!');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        console.log("LeftWristX = " + leftWristX + ", LeftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;

        console.log("RightWristX = " + rightWristX + ", RightWristY = " + rightWristY);
    }
}