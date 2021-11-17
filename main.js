noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}
function modalLoaded() {
    console.log('PoseNet Is Intialized');
}
function draw() {
    background("#f63e02");

    document.getElementById("circle_side").innerHTML = "Radius of a Circle will be =  "+difference+"PX";
    fill('#757bc8');
    stroke('#757bc8');
    circle(noseX, noseY, difference);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX= " + noseX + "noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrist =" + leftWristX + "rightWristX" + rightWristX + "difference = " + difference);
    }
}