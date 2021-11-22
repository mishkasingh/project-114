function preload() {

}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    postNet = ml5.postNet(video, modelLoaded)
    postNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("Post Net is Inistialised");
}

function draw() {
Image(video, 0, 0, 300, 300)
}

function takesnapshot(){
    save('myFilterImage.png')
}

function gotPoses() {
    if (results.length){
        console.log(results);
        console.log("nose x =" + results[0].postNet.console.x)
        console.log("nose y =" + results[0].postNet.console.y)
    }
}