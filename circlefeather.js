const featherCanvas = document.getElementById("feather");
var featherCtx = featherCanvas.getContext("2d");

// set canvas dimensions to screen size
featherCanvas.width = window.innerWidth;
featherCanvas.height = window.innerHeight;

// linear gradient for circles
var canvasGradient = featherCtx.createLinearGradient(0,500,0, 0);
canvasGradient.addColorStop(1, '#FFFFFF');
canvasGradient.addColorStop(0, '#FB7680');

function drawCircles(){
    featherCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    featherCtx.fillStyle = "#fffafb";
    featherCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    featherCtx.globalCompositeOperation = "multiply";
    featherCtx.strokeStyle = canvasGradient;

    var position = [window.innerWidth * .75, window.innerHeight * .40];

    featherCtx.beginPath();
    featherCtx.arc(...position, window.innerHeight*.75, 0, 2*Math.PI);
    featherCtx.stroke();

    featherCtx.beginPath();
    featherCtx.arc(...position, window.innerHeight*1.05, 0, 2*Math.PI);
    featherCtx.stroke();

}

var image = new Image();
image.src = 'icons/feather.jpg';
image.onload = drawImage;

function drawImage(){
    console.log("in draw image");
    featherCtx.save();

    featherCtx.translate(window.innerWidth * .15, window.innerHeight*.9)
    featherCtx.rotate(-45 * Math.PI / 180);
    featherCtx.drawImage(image, 0, 0, window.innerHeight*2, (window.innerHeight*2)/3);

    featherCtx.restore();
}



drawCircles();