const featherCanvas = document.getElementById("feather-canvas");
var featherCtx = featherCanvas.getContext("2d");

// linear gradient for circles
var canvasGradient = featherCtx.createLinearGradient(0,500,0, 0);
canvasGradient.addColorStop(1, '#fffafb');
canvasGradient.addColorStop(0, 'rgba(251, 118, 128, 0.35)');

const resizeCanvas = () => {
    // set canvas dimensions 
    featherCanvas.width = Math.min(window.innerWidth, 2000);
    featherCanvas.height = Math.max(800, Math.min(window.innerHeight, 1200));
}

function drawCircles(){
    featherCtx.clearRect(0, 0, featherCanvas.width, featherCanvas.height);

    featherCtx.fillStyle = "#fffafb";
    featherCtx.fillRect(0, 0, featherCanvas.width, featherCanvas.height);

    featherCtx.globalCompositeOperation = "multiply";
    featherCtx.strokeStyle = canvasGradient;

    var position = [featherCanvas.width * .75, featherCanvas.height * .40];

    featherCtx.beginPath();
    featherCtx.arc(...position, featherCanvas.height*.75, 0, 2*Math.PI);
    featherCtx.stroke();

    featherCtx.beginPath();
    featherCtx.arc(...position, featherCanvas.height*1.05, 0, 2*Math.PI);
    featherCtx.stroke();

}

var image = new Image();
image.src = 'icons/feather.jpg';
image.onload = drawImage;

function drawImage(){
    console.log("in draw image");
    featherCtx.save();

    featherCtx.translate(featherCanvas.width-1100, featherCanvas.height*.9);
    featherCtx.rotate(-45 * Math.PI / 180);
    var featherDimensions = [Math.min(1600, featherCanvas.height*2), Math.min(1600/3, (featherCanvas.height*2)/3)]
    //var featherDimensions = [featherCanvas.height*2, (featherCanvas.height*2)/3];
    featherCtx.drawImage(image, 0, 0, ...featherDimensions);

    featherCtx.restore();
}

window.onresize = () => {
    featherCanvas.width = Math.min(window.innerWidth, 1800);
    featherCanvas.height = Math.max(800, Math.min(window.innerHeight, 1200));
    drawCircles();
    drawImage();
}

resizeCanvas();
drawCircles();