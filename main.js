noseX = 0;
noseY = 0;

function preload(){
    clown_image = loadImage('https://i.postimg.cc/qRdGSFG5/mustache.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x - 17;
        noseY = results[0].pose.nose.y - 5;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoaded(){
    console.log("My model is loaded!");
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_image, noseX, noseY, 40, 40);
}

function take_snapshot(){
    save (filter.png);
}