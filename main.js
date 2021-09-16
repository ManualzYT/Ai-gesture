function setup(){
    canvas = createCanvas(500,500);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(500,500);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose' , gotPoses);

}

function draw(){
background("lightblue");
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("x = " + results[0].pose.nose.x);
    }
}